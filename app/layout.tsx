import type { Metadata } from "next";
import "@/Styles/globals.css"
import { Navbar } from "@/components";
import Header from "@/sections/Header"

export const metadata: Metadata = {
  title: "Ona Adrian",
  description: "Frontend Developer, Artist, Technical Analyst, and Web3 Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
      </body>
    </html>
  );
}
