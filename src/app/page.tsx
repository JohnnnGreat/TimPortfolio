import Image from "next/image";
import { Hero } from "../components/home/Hero/Hero";
import Services from "../components/home/Services/Services";
import ProfessionalExp from "../components/home/Professional/Professional";
import Skills from "../components/home/Skills/Skills";
export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ProfessionalExp />
      <Skills />
    </div>
  );
}
