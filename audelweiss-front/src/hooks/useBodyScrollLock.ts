import { useEffect } from "react";

const useLockBodyScroll = (condition: boolean | (() => boolean)) => {
  useEffect(() => {
    const locked = typeof condition === "function" ? condition() : condition;

    document.body.classList.toggle("overflow-hidden", locked);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [condition]);
};

export default useLockBodyScroll;
