"use client";
import "react-vertical-timeline-component/style.min.css";

import { VerticalTimeline } from "react-vertical-timeline-component";

import { styles } from "@/app/styles";
import { MotionSection } from "@/components/motion/section.component";
import { SectionWrapper } from "@/components/wrapper/section.component";
import { textVariant } from "@/utils/motion";
import { experiences } from "@/utils/constants";
import { ExperienceCard } from "@/components/card/experience.component";

export const Experience = SectionWrapper(
  () => (
    <>
      <MotionSection variants={textVariant()}>
        <p className={`${styles.section.sub.text} text-center`}>
          What I Have done so far
        </p>
        <h2 className={`${styles.section.head.text} text-center`}>
          Work Experience
        </h2>
      </MotionSection>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.title + experience.date}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  ),
  "experiences",
);
