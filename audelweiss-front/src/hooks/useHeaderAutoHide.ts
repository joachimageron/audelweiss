import { useEffect, useState } from "react";
import { useBreakpoint } from "./useBreakpoint";

export const useHeaderAutoHide = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const breakpoint = useBreakpoint();

  useEffect(() => {
    if (!["xs", "sm", "md"].includes(breakpoint)) return;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false); // scroll down
      } else {
        setShowHeader(true); // scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [breakpoint, lastScrollY]);

  return showHeader;
};
