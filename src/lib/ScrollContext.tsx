"use client";
import Lenis from "lenis";
import { useEffect, useState, createContext, useContext } from "react";

const SmoothScrollerContext = createContext<Lenis | null>(null);
export const useSmoothScroller = () => useContext(SmoothScrollerContext);

export default function ScrollContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenisRef, setLenis] = useState<Lenis | null>(null);
  const [rafState, setRaf] = useState(null);
  useEffect(() => {
    const scroller = new Lenis();
    let rf: number;
    function raf(time: number) {
      scroller.raf(time);
      rf = requestAnimationFrame(raf);
    }
    rf = requestAnimationFrame(raf);
    setLenis(scroller);
    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rf);
        scroller.destroy();
      }
    };
  }, []);
  return (
    <SmoothScrollerContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollerContext.Provider>
  );
}
