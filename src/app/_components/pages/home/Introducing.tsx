"use client";

import { useState } from "react";

export default function Introducing() {
  const [isHovered, setIsHovered] = useState(false);

  const handleSelect = (option: string) => {
    window.gtag("event", "home_events", {
      event_category: "who are you",
      event_label: option,
    });
  };

  return (
    <div
      className="relative w-fit mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className=" font-extralight text-[14px]">Who are you?</span>
      <div
        className={`absolute left-1/2 top-full mt-2 w-[200px] -translate-x-1/2 transform rounded-lg bg-white p-3 shadow-lg transition-all duration-300 ease-in-out ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        {[
          { label: "Dev", value: "dev" },
          { label: "Recruiter", value: "recruiter" },
          { label: "Other", value: "other" },
        ].map((option) => (
          <button
            key={option.value}
            className="block w-full rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
