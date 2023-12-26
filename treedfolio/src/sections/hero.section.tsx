import { styles } from "@/app/styles";
import { MotionDiv } from "@/components/motion/div.component";
import Link from "next/link";

export const Hero = () => (
  <section className="relative w-full h-screen mx-auto">
    <div
      className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
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

    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <Link href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
          <MotionDiv
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </Link>
    </div>
  </section>
);
