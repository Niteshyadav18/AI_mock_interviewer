import type { Metadata } from "next";
import { Mona_Sans} from "next/font/google";
import "./globals.css";
import React from "react";
import {Toaster} from "sonner";

const monsSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "PrepWise",
  description: "AN AI platform for mockinterview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monsSans.className} antialiased pattern`}
      >
        {children}
      <Toaster />
      </body>
    </html>
  );
}
