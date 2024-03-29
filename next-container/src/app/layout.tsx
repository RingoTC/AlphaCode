//import type { Metadata } from "next";
//import { Inter as FontSans } from "next/font/google"
import React from "react";
import "./globals.css";

import { cn } from "@/lib/utils"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
