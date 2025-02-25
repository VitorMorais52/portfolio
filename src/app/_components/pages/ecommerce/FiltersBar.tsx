"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { useFilters } from "src/app/_lib/contexts/useProductsFilter";

interface CustomCheckBox {
  title: string;
  value: string;
}

export default function Filters() {
  const { types, setType } = useFilters();
  const filtersRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleFiltersBar = () => {
    if (filtersRef.current) {
      filtersRef.current.classList.toggle("translate-x-0");
      filtersRef.current.classList.toggle("-translate-x-full");

      filtersRef.current.classList.toggle("opacity-0");
      filtersRef.current.classList.toggle("opacity-100");

      setIsOpen((prev) => !prev);
    }
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        toggleFiltersBar();
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);

  const CustomCheckbox = ({ title, value }: CustomCheckBox) => {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="hidden peer"
          value={value}
          checked={types.includes(value)}
          onChange={({ target }) => setType(target.value)}
        />
        <div
          className="w-5 h-5 border-2 border-gray-500 rounded-md flex items-center justify-center 
                      peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all"
        ></div>
        <span className="text-gray-800 dark:text-gray-200">{title}</span>
      </label>
    );
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={toggleFiltersBar}
        style={{ zIndex: "12" }}
        className="absolute top-4 left-[2.5rem] text-lg"
      >
        Filters
      </button>
      <section
        id="leftBar"
        ref={filtersRef}
        style={{ zIndex: "11" }}
        className="w-[320px] bg-[#0C0C0C] flex flex-col items-start absolute top-0 left-0 bottom-0 transform -translate-x-full opacity-0 transition-all duration-500 ease-in-out"
      >
        <button
          type="button"
          className="absolute m-[4] mt-[22px] right-4"
          onClick={toggleFiltersBar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x h-4 w-4"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>
        <section id="Fields" className="mt-20 pl-6">
          <h3 className="mb-2">Fields</h3>
          <div className="flex flex-col gap-2 mt-1 ml-[-2px]">
            <CustomCheckbox title="Frontend" value="frontend" />
            <CustomCheckbox title="Backend" value="backend" />
            <CustomCheckbox title="DevOps" value="devops" />
            <CustomCheckbox title="Database" value="database" />
            <CustomCheckbox title="Design" value="design" />
            <CustomCheckbox title="Code versioning" value="codeversioning" />
          </div>
        </section>
        <section id="sides"></section>
      </section>
    </div>
  );
}
