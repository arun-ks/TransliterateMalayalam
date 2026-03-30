import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malayalam Reader — Read Faster",
  description: "Improve your Malayalam reading speed with hover transliteration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ml">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
