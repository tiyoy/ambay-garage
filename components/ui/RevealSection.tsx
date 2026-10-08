"use client";

import {
  useEffect,
  useRef,
  useState,
  ElementType,
  ComponentPropsWithoutRef,
  Ref,
} from "react";
import useRevealObserver from "@/hooks/useRevealObserver";

type RevealSectionProps<T extends ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function RevealSection<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...rest
}: RevealSectionProps<T>) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const isVisible = useRevealObserver(ref, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Tag
      ref={ref as Ref<never>}
      className={`reveal ${mounted && !isVisible ? "reveal-hidden" : ""} ${
        isVisible ? "is-visible" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}