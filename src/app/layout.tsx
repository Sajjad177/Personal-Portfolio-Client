import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "./Providers";

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
    <Providers>
      <html lang="en" data-theme="light">
        <body>
          <div>{children}</div>
          <Toaster position="top-right" />
        </body>
      </html>
    </Providers>
  );
}
