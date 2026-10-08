"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import useRevealObserver from "@/hooks/useRevealObserver";
import motorcycleAnimation from "@/public/lottie/motorcycle-ride.json";

type HazardDividerProps = {
  withRide?: boolean;
};

const RIDE_DURATION_MS = 6500;
const PAUSE_BETWEEN_RIDES_MS = 4500;

export default function HazardDivider({ withRide = false }: HazardDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null);
  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const isLit = useRevealObserver(dividerRef, { threshold: 0.5 });

  useEffect(() => {
    if (!isLit || !withRide || !lottieContainerRef.current) return;

    const container = lottieContainerRef.current;
    let anim: AnimationItem | null = null;
    let rideTimeout: ReturnType<typeof setTimeout>;
    let pauseTimeout: ReturnType<typeof setTimeout>;

    function playRide() {
      container.classList.add("is-riding");
      anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: motorcycleAnimation,
      });

      rideTimeout = setTimeout(() => {
        container.classList.remove("is-riding");
        anim?.destroy();
        anim = null;
        pauseTimeout = setTimeout(playRide, PAUSE_BETWEEN_RIDES_MS);
      }, RIDE_DURATION_MS);
    }

    playRide();

    return () => {
      clearTimeout(rideTimeout);
      clearTimeout(pauseTimeout);
      anim?.destroy();
    };
  }, [isLit, withRide]);

  if (withRide) {
    return (
      <div
        ref={dividerRef}
        className={`road-divider ${isLit ? "is-lit" : ""}`}
      >
        <div ref={lottieContainerRef} className="road-rider-lottie" />
      </div>
    );
  }

  return <div ref={dividerRef} className={`hazard-divider ${isLit ? "is-lit" : ""}`} />;
}
