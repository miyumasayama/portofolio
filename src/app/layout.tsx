// ページ共通の処理を設定できる。再レンダリングされない
'use client'
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
      <head>
        <meta  />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_URL}//favicon.png`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`Miyu's Portfolio`}</title> 
      </head>
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
