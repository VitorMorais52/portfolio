"use client";
import { useRef } from "react";
import { Star } from "../../common/icons";

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

  return (
    <>
      <button
        type="button"
        onClick={toggleFilters}
        style={{ zIndex: "1" }}
        className="absolute top-4 left-[2.5rem] text-lg"
      >
        Filters
      </button>
      <section
        id="leftBar"
        ref={filtersRef}
        className="w-[320px] bg-[#0C0C0C] flex flex-col items-start absolute top-0 left-0 bottom-0 transform -translate-x-full opacity-0 transition-all duration-500 ease-in-out"
      >
        <section id="reviews" className="mt-20 pl-6">
          <h3>Reviews</h3>
          <div className="flex mt-1 ml-[-2px]">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </section>
        <section id="sides"></section>
      </section>
    </>
  );
}
