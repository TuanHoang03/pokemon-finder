import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body  suppressHydrationWarning={true} >
          <ThemeProvider attribute="class" defaultTheme="dark">
            <main className="flex min-h-screen flex-col items-center p-24">
              <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
                <Link href="/">
                  <h2 className="text-2xl text-bold">PokemonFinder</h2>
                </Link>
              </div>
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
  );
}