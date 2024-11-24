"use client";
import { useState, useEffect } from "react";

export function useIsMobile(breakpoint: string = "(max-width: 768px)") {
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia(breakpoint).matches
      : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(breakpoint);
    const handleChange = () => setIsMobile(mediaQuery.matches);

    // Adiciona o listener ao montar
    mediaQuery.addEventListener("change", handleChange);

    // Define o valor inicial
    setIsMobile(mediaQuery.matches);

    // Remove o listener ao desmontar
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMobile;
}
