// ページ共通の処理を設定できる。再レンダリングされない
'use client'
import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import "./globals.css";
import { theme } from "../theme";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
