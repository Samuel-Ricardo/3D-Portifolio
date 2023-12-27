"use client";

import { useState } from "react";

export const NavBar = () => {
  const [activeNav, setActiveNav] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return <nav></nav>;
};
