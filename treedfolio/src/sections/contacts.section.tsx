"use client";

import { SectionWrapper } from "@/components/wrapper/section.component";
import { useCallback, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MotionDiv } from "@/components/motion/div.component";
import { slideIn } from "@/utils/motion";
import { styles } from "@/app/styles";
import { Earth } from "@/components/canvas/earth/render.component";

export const Contacts = SectionWrapper(() => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form],
  );

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      setLoading(true);

      emailjs
        .send(
          process.env.VITE_APP_EMAILJS_SERVICE_ID + "",
          process.env.VITE_APP_EMAILJS_TEMPLATE_ID + "",
          {
            from_name: form.name,
            to_name: "Samuel Ricardo",
            from_email: form.email,
            to_email: process.env.VITE_APP_EMAILJS_RECEIVER,
            message: form.message,
          },
          process.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({ name: "", email: "", message: "" });
          },
          (error) => {
            console.error(error);
            alert("Ahh, something went wrong. Please try again.");
          },
        );
    },
    [form],
  );

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <MotionDiv
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.section.sub.text}>Get in touch</p>
        <h3 className={styles.section.head.text}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </MotionDiv>
      <MotionDiv
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-autoo md:h-[550px] h-[350px]"
      >
        <Earth />
      </MotionDiv>
    </div>
  );
}, "contacts");
