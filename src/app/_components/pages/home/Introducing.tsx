"use client";

import { useState, useEffect } from "react";
import { Mark, PointingFinger } from "../../common/icons";

export default function Introducing() {
  const [isHovered, setIsHovered] = useState(false);
  const [loadingButton, setLoadingButton] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    if (selectedOption) return;

    setLoadingButton(option);
    setSelectedOption(option);
    localStorage.setItem("@mt-portfolio/whoAreYou", option);

    window.gtag("event", "home_events", {
      event_category: "who are you?",
      event_label: option,
    });

    setTimeout(() => {
      setLoadingButton("check-" + option);
      setTimeout(() => {
        setLoadingButton(null);
      }, 1000);
    }, 1200);
  };

  useEffect(() => {
    const previousAnswer =
      localStorage.getItem("@mt-portfolio/whoAreYou") || null;
    setSelectedOption(previousAnswer);
  }, []);

  return (
    <div
      className="overflow-hidden relative w-full flex flex-col items-center h-[36px]"
      onMouseLeave={() => {
        if (!selectedOption) setIsHovered(false);
      }}
    >
      <span
        className={`cursor-pointer mt-[6px] absolute transition-transform duration-300 ease-in-out ${
          isHovered
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
        onMouseEnter={() => setIsHovered(true)}
      >
        <PointingFinger className="absolute top-[2px] left-[-26px] w-[20px] h-[20px] animate-pulse" />
        Who are you?
      </span>
      <div
        className={`absolute flex transition-transform duration-300 ease-in-out ${
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
            className={`rounded-md px-4 py-2 text-sm  flex items-center justify-center h-[36px] w-[92px] 
              ${!selectedOption ? "hover:text-gray-700 hover:bg-gray-100" : ""}
              ${
                selectedOption === option.value
                  ? "text-gray-700 bg-gray-100"
                  : ""
              }
            `}
            onClick={() => handleSelect(option.value)}
            disabled={selectedOption !== null}
          >
            {loadingButton === option.value ? (
              <div className="animate-spin w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full" />
            ) : loadingButton === "check-" + option.value ? (
              <span className="flex items-center justify-center ml-[13px]">
                Sent <Mark className="w-[26px] h-[26px] mb-1" />
              </span>
            ) : (
              option.label
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
