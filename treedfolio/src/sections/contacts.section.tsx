"use client";

import { SectionWrapper } from "@/components/wrapper/section.component";
import { useCallback, useRef, useState } from "react";

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

  return <></>;
}, "contacts");
