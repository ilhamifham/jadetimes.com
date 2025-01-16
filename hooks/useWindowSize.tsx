import { useState, useEffect } from "react";

const useWindowSize = (): number => {
  const [size, setSize] = useState(0);
  useEffect(() => {
    setSize(window.innerWidth);

    function handleResize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

export default useWindowSize;
