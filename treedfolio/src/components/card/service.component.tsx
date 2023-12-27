"use client";

import { Tilt } from "react-tilt";
import { MotionDiv } from "../motion/div.component";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

interface IProps {
  index: number;
  title: string;
  icon: any;
}

export const ServiceCard = ({ index, title, icon }: IProps) => (
  <Tilt className="xs:w-[250px] w-full">
    <MotionDiv
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image
          src={icon}
          alt="Web Development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </MotionDiv>
  </Tilt>
);
