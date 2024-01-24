"use client";
import Image from "next/image";
import { Hero } from "../components/home/Hero/Hero";
import Services from "../components/home/Services/Services";
import ProfessionalExp from "../components/home/Professional/Professional";
import Skills from "../components/home/Skills/Skills";
import Preloader from "@/components/Preloader/Preloader";
import { useEffect, useState } from "react";
import Education from "@/components/home/Education/Education";
import About from "@/components/home/About/About";
import Head from "next/head";
export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 5000);
  }, []);
  return (
    <>
      <Head>
        <title>Timothy Zinwota</title>
        <meta
          name="description"
          content="I'm passionate about exploring the
              realms of technology and innovation."
        />
      </Head>
      {showLoader && <Preloader />}

      <div>
        <Hero />
        <Services />
        <About />
        <ProfessionalExp />
        <Skills />
        <Education />
      </div>
    </>
  );
}
