import { styles } from "@/app/styles";
import { ProjectCard } from "@/components/card/project.component";
import { MotionDiv } from "@/components/motion/div.component";
import { MotionP } from "@/components/motion/p.component";
import { SectionWrapper } from "@/components/wrapper/section.component";
import { projects } from "@/utils/constants";
import { fadeIn, textVariant } from "@/utils/motion";

export const Works = SectionWrapper(
  () => (
    <>
      <MotionDiv variants={textVariant()} initial="hidden" whileInView="show">
        <p className={`${styles.section.sub.text}`}>My Works</p>
        <h2 className={`${styles.section.head.text}`}>Projects</h2>
      </MotionDiv>

      <div className="w-full flex">
        <MotionP
          variants={fadeIn("none", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </MotionP>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  ),
  "Projects",
);
