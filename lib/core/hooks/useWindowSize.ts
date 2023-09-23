import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: Math.max(window?.innerWidth || 300, 300),
        height: Math.max(window?.innerHeight || 500, 500),
      });
    };
    window?.addEventListener("resize", handleResize);
    handleResize();

    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
