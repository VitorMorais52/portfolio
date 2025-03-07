"use client";

import { useState } from "react";

export default function Introducing() {
  const [isHovered, setIsHovered] = useState(false);

  const handleSelect = (option: string) => {
    window.gtag("event", "home_events", {
      event_category: "who are you?",
      event_label: option,
    });
  };

  return (
    <div
      className="overflow-hidden relative w-full h-full flex flex-col items-center h-[36px]"
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`cursor-pointer mt-[6px] absolute transition-transform duration-300 ease-in-out ${
          isHovered
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
        onMouseEnter={() => setIsHovered(true)}
      >
        Who are you?
      </span>

      <div
        className={`absolute flex gap-4 transition-transform duration-300 ease-in-out ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        {[
          { label: "Dev", value: "dev" },
          { label: "Recruiter", value: "recruiter" },
          { label: "Other", value: "other" },
        ].map((option) => (
          <button
            key={option.value}
            className="rounded-md px-4 py-2 text-sm hover:text-gray-700 hover:bg-gray-100"
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
