"use client";
import { useRef } from "react";

interface CustomCheckBox {
  title: string;
  value: string;
}

export default function Filters() {
  const filtersRef = useRef<HTMLDivElement>(null);
  const toggleFilters = () => {
    if (filtersRef.current) {
      filtersRef.current.classList.toggle("translate-x-0");
      filtersRef.current.classList.toggle("-translate-x-full");

      filtersRef.current.classList.toggle("opacity-0");
      filtersRef.current.classList.toggle("opacity-100");
    }
  };

  const CustomCheckbox = ({ title, value }: CustomCheckBox) => {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="hidden peer"
          value={value}
          onChange={(e) => console.log("clicked is checked", e.target.checked)}
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
    <>
      <button
        type="button"
        onClick={toggleFilters}
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
    </>
  );
}
