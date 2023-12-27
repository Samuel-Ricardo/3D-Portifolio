"use client";

import { SectionWrapper } from "@/components/wrapper/section.component";
import { useCallback, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contacts = SectionWrapper(() => {
  const formRef = useRef();
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

  return <></>;
}, "contacts");
