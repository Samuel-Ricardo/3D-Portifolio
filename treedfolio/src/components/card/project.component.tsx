"use client";

import { Tilt } from "react-tilt";
import { MotionDiv } from "../motion/div.component";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import { github } from "@/assets";

interface IProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string }[];
  image: any;
  source_code_link: any;
}

export const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: IProps) => (
  <MotionDiv variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <Image
          src={image}
          alt="project image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justfy-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <Image
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.name}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </MotionDiv>
);
