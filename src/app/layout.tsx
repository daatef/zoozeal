import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Zoozeal — Together for a Kinder World",
  description:
    "Zoozeal is dedicated to protecting animals, supporting their welfare, and creating a kinder world where every animal is safe, loved, and respected.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="it">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
