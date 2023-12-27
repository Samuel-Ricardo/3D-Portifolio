import { Stars } from "@/components/canvas/stars.component";
import { NavBar } from "@/components/navbar.component";
import { About } from "@/sections/about.section";
import { Contacts } from "@/sections/contacts.section";
import { Experience } from "@/sections/experiences.section";
import { Feedbacks } from "@/sections/feedbacks.section";
import { Hero } from "@/sections/hero.section";
import { Tech } from "@/sections/tech.section";
import { Works } from "@/sections/works.section";

export default function Home() {
  return (
    <main className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavBar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contacts />
        <Stars />
      </div>
    </main>
  );
}
