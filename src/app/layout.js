import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "VEOScreens - Broadcast Anywhere. Every Screen.",
  description: "The world's most powerful digital signage engine. Stream Power BI dashboards, Google Analytics, and 4K video to any screen, anywhere in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
