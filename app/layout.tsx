import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/concex-provider";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/providers/modalProvider";

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
    <html lang="en" suppressContentEditableWarning>
      <body className={inter.className}>
      <ConvexClientProvider>
      <ThemeProvider 
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
         storageKey="notify-theme"
        >
           <Toaster position="bottom-center" />
           <ModalProvider/>
        {children}
        </ThemeProvider>
        </ConvexClientProvider>
        </body>
    </html>
  );
}
