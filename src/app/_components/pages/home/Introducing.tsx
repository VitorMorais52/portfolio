"use client";

import { useState } from "react";
import { Mark } from "../../common/icons";

export default function Introducing() {
  const [isHovered, setIsHovered] = useState(false);
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setLoadingButton(option);
    window.gtag("event", "home_events", {
      event_category: "who are you?",
      event_label: option,
    });

    setTimeout(() => {
      setLoadingButton("check-" + option);
      setTimeout(() => {
        setLoadingButton(null);
        setIsHovered(false);
      }, 1000);
    }, 1200);
  };

  return (
    <div
      className="overflow-hidden relative w-full flex flex-col items-center h-[36px]"
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
            className="rounded-md px-4 py-2 text-sm hover:text-gray-700 hover:bg-gray-100 flex items-center justify-center h-[36px] w-[92px]"
            onClick={() => handleSelect(option.value)}
            disabled={loadingButton !== null}
          >
            {loadingButton === option.value ? (
              <div className="animate-spin w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full" />
            ) : loadingButton === "check-" + option.value ? (
              <Mark className="w-[26px] h-[26px]" />
            ) : (
              option.label
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
