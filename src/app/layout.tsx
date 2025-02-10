import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "Sajjad's Portfolio",
  description: "Welcome to Sajjad's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar  />
        <div className="min-h-screen container mx-auto">{children}</div>
      </body>
    </html>
  );
}
