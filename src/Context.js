import React, { createContext, useState } from "react";

export const ScrollContext = createContext();

export function ScrolledContext({ children }) {
  const [scrolling, setScrolling] = useState();

  React.useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setScrolling(y);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
  }, [scrolling]);

  return (
    <ScrollContext.Provider value={scrolling}>
      {children}
    </ScrollContext.Provider>
  );
}
