import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notify",
  description: "Not your average notes service",
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme: light)",
        url:"/logo1.png",
        href:"/logo1.png",
      },
      {
        media:"(prefers-color-scheme: dark)",
        url:"/logo2.png",
        href:"/logo2.png",
      }
    ]

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
