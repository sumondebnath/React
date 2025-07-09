import { useEffect, useState } from "react";

const useWindowWidthParams = (screensize) => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setOnSmallScreen(window.innerWidth < screensize);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return onSmallScreen;
};

export default useWindowWidthParams;
