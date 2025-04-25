import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Container, Footer, Header } from "@/components/shared";
import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";
import { getUser } from "@/lib/actions/user";
import { StoreProvider } from "@/store/providers/store-provider";


const ubuntu = Ubuntu({
  subsets: ['cyrillic'],
  weight: "400",
  variable: '--font-ubuntu',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "MY LEGO LIST",
  description: "Сервис для отслеживания LEGO",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  const user = session?.user?.id ? await getUser(String(session?.user?.id)) : null;
  return (
    <SessionProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${ubuntu.className} antialiased`}>
          <StoreProvider userId={session?.user?.id}>
            <ThemeProvider attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange>
              <Container>
                <Header user={user} />
                {children}
              </Container>
              <Footer />
            </ThemeProvider>
          </StoreProvider>


        </body>
      </html>
    </SessionProvider>

  );
}
