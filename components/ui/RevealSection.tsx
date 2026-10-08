"use client";

import {
  useRef,
  useSyncExternalStore,
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

function subscribeNoop() {
  return () => {};
}

export default function RevealSection<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...rest
}: RevealSectionProps<T>) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  // false saat SSR, true setelah hidrasi — tanpa setState di dalam effect.
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const isVisible = useRevealObserver(ref, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  });

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