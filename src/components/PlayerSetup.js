"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const POLL_INTERVAL_MS = 3000;
const CODE_EXPIRY_MINUTES = 15;

export default function PlayerSetup() {
  const [code, setCode] = useState(null);
  const [status, setStatus] = useState("active");
  const [channel, setChannel] = useState(null);
  const [playerId, setPlayerId] = useState(null);
  const [deviceToken, setDeviceToken] = useState(null);
  const [error, setError] = useState(null);
  const pollRef = useRef(null);

  const apiBase =
    typeof window !== "undefined"
      ? process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api/v1"
      : "http://localhost:8080/api/v1";

  const fetchCode = useCallback(async () => {
    try {
      const res = await fetch(`${apiBase}/players/request-code`);
      if (!res.ok) return null;
      const json = await res.json();
      return json.data?.code || null;
    } catch {
      return null;
    }
  }, [apiBase]);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const c = await fetchCode();
      if (!mounted || !c) {
        if (!c && typeof window !== "undefined") setError("Failed to get pairing code");
        return;
      }
      setCode(c);
      setError(null);

      const stopAt = Date.now() + CODE_EXPIRY_MINUTES * 60 * 1000;

      const doPoll = async () => {
        if (Date.now() >= stopAt) {
          if (pollRef.current) clearInterval(pollRef.current);
          return;
        }
        try {
          const res = await fetch(
            `${apiBase}/players/pairing-status?code=${encodeURIComponent(c)}`
          );
          if (!res.ok) return;
          const json = await res.json();
          const data = json.data || {};
          setStatus(data.status || "active");
          if (data.paired && data.status === "redeemed") {
            setChannel(data.channel || null);
            setPlayerId(data.player_id || null);
            setDeviceToken(data.device_token || null);
            if (pollRef.current) {
              clearInterval(pollRef.current);
              pollRef.current = null;
            }
          }
        } catch {
          return;
        }
      };

      doPoll();
      pollRef.current = setInterval(doPoll, POLL_INTERVAL_MS);
    })();

    return () => {
      mounted = false;
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [fetchCode, apiBase]);

  const playerAppUrl =
    typeof window !== "undefined"
      ? process.env.NEXT_PUBLIC_PLAYER_APP_URL || ""
      : "";
  const openPlayerUrl =
    playerAppUrl && playerId && deviceToken
      ? `${playerAppUrl}?player_id=${encodeURIComponent(playerId)}&device_token=${encodeURIComponent(deviceToken)}`
      : null;

  if (error) {
    return (
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto rounded-2xl bg-slate-800/50 p-8 text-center">
          <p className="text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto rounded-2xl bg-slate-800/50 p-8 md:p-12 text-center border border-slate-700/50">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Connect your display
        </h2>
        <p className="text-slate-400 mb-8">
          Enter this code in the CMS to pair this device with your channel.
        </p>

        {status === "redeemed" ? (
          <div className="space-y-4">
            <p className="text-emerald-400 font-semibold text-lg">
              Connected. Channel assigned.
            </p>
            {channel && (
              <p className="text-slate-300">
                Channel: {channel.channel_id}
              </p>
            )}
            {openPlayerUrl && (
              <a
                href={openPlayerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Open your display
              </a>
            )}
          </div>
        ) : (
          <>
            <div className="inline-block bg-slate-900 rounded-xl px-8 py-6 border-2 border-accent/50">
              <span className="text-4xl md:text-5xl font-mono font-bold tracking-widest text-white">
                {code || "…"}
              </span>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              Code expires in {CODE_EXPIRY_MINUTES} minutes. Polling for pairing…
            </p>
          </>
        )}
      </div>
    </section>
  );
}
