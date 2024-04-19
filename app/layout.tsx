import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/libs/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bank",
  description: "Hero Bank by Ghosthard117",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-slate-200', inter.className)}>
        <Header />
        <main className="min-h-screen flex items-center justify-center lg:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
