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
import "@/components/home/Education/Education.scss";
import "@/components/home/About/About.scss";
import Header from "../components/layout/Header";
import Email from "../../public/sm/entypo_email.svg";
import Github from "../../public/sm/ri_github-line.svg";
import Linkedln from "../../public/sm/ri_linkedin-fill.svg";
import Twitter from "../../public/sm/mingcute_twitter-line.svg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <html lang="en">
        <head>{/* Add metadata here if needed */}</head>
        <body>
          <div>
            <Header />
            {children}
            <footer className="footer">
              <div className="footer__wrapper">
                <a target="_blank" href="mailto:zinwotatimothy@gmail.com">
                  <Image src={Email} alt="" />
                </a>

                <a target="_blank" href="/">
                  <Image
                    src={Twitter}
                    alt="https://twitter.com/TimGabrielCodes"
                  />
                </a>
                <a target="_blank" href="https://github.com/TimGabrielCodes">
                  {" "}
                  <Image src={Github} alt="" />
                </a>
                <a
                  target="_black"
                  href="https://www.linkedin.com/in/timtimgabriel/"
                >
                  {" "}
                  <Image src={Linkedln} alt="" />
                </a>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </>
  );
}
