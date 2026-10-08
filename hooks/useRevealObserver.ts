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
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

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
  }, [ref, threshold, rootMargin]);

  return isVisible;
}