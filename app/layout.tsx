import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/shared/header";
import { Container } from "@/components/shared/container";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { getUser } from "./actions";


const ubuntu = Ubuntu({
  subsets: ['cyrillic'],
  weight: "400",
  variable: '--font-ubuntu',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "MY LEGO LIST",
  description: "Сервис для отслеживания LEGO",
  icons:{
    icon: [
      {
        
        url: '/public/logo_ico.ico',
        href: '/public/logo_ico.ico'
      }
    ]
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  const user = session?.user?.id ? await getUser(String(session?.user?.id)) : null;

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${ubuntu.className} antialiased`}
        >
          <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Container>
              <Header user={user}/>
              {children}
            </Container>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>

  );
}
