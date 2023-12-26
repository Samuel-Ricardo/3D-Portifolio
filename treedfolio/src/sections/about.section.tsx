import { styles } from "@/app/styles";
import { ServiceCard } from "@/components/card/service.component";
import { MotionDiv } from "@/components/motion/div.component";
import { MotionP } from "@/components/motion/p.component";
import { services } from "@/utils/constants";
import { textVariant } from "@/utils/motion";

export const About = () => (
  <>
    <MotionDiv variants={textVariant()}>
      <p className={styles.section.sub.text}>Introduction</p>
      <h2 className={styles.section.head.text}>Overview</h2>
    </MotionDiv>

    <MotionP>
      I &apos; m a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and Three.js.
      I &lsquo; m a quick learner and collaborate closely with clients to create
      efficient, scalable, and user-friendly solutions that solve real-world
      problems. Let &#39; s work together to bring your ideas to life!{" "}
    </MotionP>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);
