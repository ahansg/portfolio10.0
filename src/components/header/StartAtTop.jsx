import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const StartAtTop = () => {
  const location = useLocation(); // Få den gjeldende ruten.

  useLayoutEffect(() => {
    // Sett scrollposisjonen til topp med én gang.
    window.scrollTo(0, 0);
  }, [location]); // Trigges ved hver ruteendring.

  return null; // Ingen synlig komponent, bare håndteringen av ruten.
};

export default StartAtTop;
