import { Ball } from "@/components/canvas/ball/ball.render";
import { SectionWrapper } from "@/components/wrapper/section.component";
import { technologies } from "@/utils/constants";

const section = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((tech) => (
      <div className="w-28 h-28" key={tech.name}>
        <Ball icon={tech.icon} />
      </div>
    ))}
  </div>
);

export const Tech = SectionWrapper(section, "tech");
