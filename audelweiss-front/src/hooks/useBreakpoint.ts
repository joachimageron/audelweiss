import { useEffect, useState } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const getBreakpoint = (width: number): Breakpoint => {
  if (width < 640) return "xs";
  if (width < 768) return "sm";
  if (width < 1024) return "md";
  if (width < 1280) return "lg";
  if (width < 1536) return "xl";
  return "2xl";
};

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() => getBreakpoint(0));

  useEffect(() => {
    if (typeof window === "undefined") return;

    setBreakpoint(getBreakpoint(window.innerWidth));

    const onResize = () => setBreakpoint(getBreakpoint(window.innerWidth));

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return breakpoint;
};
