import { useState, useEffect, useCallback } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState<number | null>(null);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return width;
}

export default useWindowWidth;
