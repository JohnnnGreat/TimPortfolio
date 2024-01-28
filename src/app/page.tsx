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
import Contact from "@/components/home/Contact/Contact";

export default function Home() {
  // Boolean value to control preloader
  // value is set to true by default

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 5000);
  }, []);
  return (
    <>
      {showLoader && <Preloader />}

      <div>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/*  About Section */}
        <About />

        {/* Professional Experience Section */}
        <ProfessionalExp />

        {/* Skills Section */}
        <Skills />

        {/* Education Details Section */}
        <Education />

        {/* Contact Page */}
        <Contact />
      </div>
    </>
  );
}
