"use client";
import type { Metadata } from "next";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Inter } from "next/font/google";
import "./globals.scss";
import "@/components/home/Hero/Hero.scss";
import "@/components/layout/Header.scss";
import "@/components/home/Services/Services.scss";
import "@/components/home/Professional/Professional.scss";
import "@/components/home/Skills/Skills.scss";
import Header from "../components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <html lang="en">
        <head>{/* Add metadata here if needed */}</head>
        <body>
          <div>
            <Header />
            {children}
          </div>
        </body>
      </html>
    </>
  );
}
