import { Computer } from "@/components/canvas/computer/render.component";
import { Stars } from "@/components/canvas/stars/render.component";
import { MotionDiv } from "@/components/motion/div.component";
import { NavBar } from "@/components/navbar.component";
import { About } from "@/sections/about.section";
import { Contacts } from "@/sections/contacts.section";
import { Experience } from "@/sections/experiences.section";
import { Feedbacks } from "@/sections/feedbacks.section";
import { Hero } from "@/sections/hero.section";
import { Tech } from "@/sections/tech.section";
import { Works } from "@/sections/works.section";
import Link from "next/link";
import { styles } from "./styles";

export default function Home() {
  return (
    <main className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center w-screen h-screen">
        <NavBar />

        <section className="relative w-full h-screen mx-auto mt-20">
          <div
            className={`mx-auto ${styles.paddingX} -mb-52 flex flex-row items-start gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1 className={`${styles.hero.head.text} text-white`}>
                Hi, I&#39;m <span className="text-[#915EFF]">Adrian</span>
              </h1>

              <p className={`${styles.hero.sub.text} mt-2 text-white-100`}>
                I develop 3D visuals, user <br className="sm:block hidden" />
                interfaces and web applications
              </p>
            </div>
          </div>

          <Computer />

          <div className="absolute xs:bottom-32 bottom-32 w-full flex justify-center items-center">
            <Link scroll href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
                <MotionDiv
                  animate={{ y: [20, -16, 20] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </Link>
          </div>
        </section>
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
