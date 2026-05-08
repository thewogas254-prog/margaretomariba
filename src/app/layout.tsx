import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Margaret Omariba Foundation",
  description:
    "Elegant African luxury editorial leadership and community-centered impact for London Ward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-charcoal text-cream">{children}</body>
    </html>
  );
}
