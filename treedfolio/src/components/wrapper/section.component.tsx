import { staggerContainer } from "@/utils/motion";
import { MotionSection } from "../motion/section.component";
import { styles } from "@/app/styles";

export const SectionWrapper = (Component: any, id: string) =>
  function Wrapper() {
    return (
      <MotionSection
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={id}>
          &nbsp;
        </span>
        <Component />
      </MotionSection>
    );
  };
