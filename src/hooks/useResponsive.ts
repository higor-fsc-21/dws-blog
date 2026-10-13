import { useEffect, useState } from "react";
import { MOBILE_BREAKPOINT } from "../constants/device";

const useResponsive = () => {
  const getIsMobile = () =>
    typeof window !== "undefined"
      ? window.innerWidth < MOBILE_BREAKPOINT
      : false;
  const getIsDesktop = () =>
    typeof window !== "undefined"
      ? window.innerWidth >= MOBILE_BREAKPOINT
      : true;

  const [isMobile, setIsMobile] = useState(getIsMobile);
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < MOBILE_BREAKPOINT);
      setIsDesktop(width >= MOBILE_BREAKPOINT);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isDesktop };
};

export default useResponsive;
