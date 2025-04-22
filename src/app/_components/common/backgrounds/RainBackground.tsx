"use client";
import { useEffect } from "react";

export default function RainBackground() {
  useEffect(() => {
    const numLines = 80;
    for (let i = 0; i < numLines; i++) {
      const line = document.createElement("div");
      line.className = "rain-line";
      line.style.left = `${Math.random() * 100}vw`;
      line.style.animationDuration = `${1 + Math.random() * 2}s`;
      line.style.animationDelay = `${Math.random() * 3}s`;
      document.body.appendChild(line);
    }

    return () => {
      document.querySelectorAll(".rain-line").forEach((line) => line.remove());
    };
  }, []);

  return null;
}
