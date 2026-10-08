"use client";

import { useEffect, useState } from "react";

export default function useScrollHeader(threshold = 20) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function updateScrolled() {
      setIsScrolled(window.scrollY > threshold);
    }

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, [threshold]);

  return isScrolled;
}