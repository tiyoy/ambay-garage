"use client";

import { useEffect, useState, RefObject } from "react";

type UseRevealObserverOptions = {
  threshold?: number;
  rootMargin?: string;
};

export default function useRevealObserver(
  ref: RefObject<HTMLElement | null>,
  options: UseRevealObserverOptions = {}
) {
  const [isVisible, setIsVisible] = useState(
    // Tanpa IntersectionObserver (atau saat SSR), langsung tampil —
    // dihitung di initializer agar tidak perlu setState di dalam effect.
    () => typeof window !== "undefined" && !("IntersectionObserver" in window)
  );
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px" } = options;

  useEffect(() => {
    if (isVisible) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, isVisible]);

  return isVisible;
}