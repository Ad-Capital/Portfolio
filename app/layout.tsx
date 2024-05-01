import type { Metadata } from "next";
import "@/Styles/globals.css"
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Trader AD",
  description: "Genius Philiantropist Billionaire Trader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
