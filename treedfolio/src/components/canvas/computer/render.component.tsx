"use client";

import { useEffect, useState } from "react";

export const Computer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //Screen size Listener

    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: any) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);
};
