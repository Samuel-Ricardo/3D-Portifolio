import { staggerContainer } from "@/utils/motion";
import { MotionSection } from "../motion/section.component";
import { styles } from "@/app/styles";

export const StartWrapper = (Component: any, id: string) =>
  function SectionWrapper() {
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
