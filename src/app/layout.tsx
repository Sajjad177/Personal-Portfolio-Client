import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "./Providers";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";

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
      <html lang="en">
        <body>
          <ThemeProvider attribute="class" defaultTheme="system">
            {children}
          </ThemeProvider>
          <Toaster position="top-right" />
        </body>
      </html>
    </Providers>
  );
}
