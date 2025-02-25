"use client";

import { useFilters } from "src/app/_lib/contexts/useProductsFilter";

export default function InputFilter() {
  const { name, setName } = useFilters();
  return (
    <input
      type="text"
      placeholder="Search"
      value={name}
      onChange={({ target }) => setName(target.value)}
      className="mt-6 border-2 border-solid border-[#585858] rounded-[12px] text-[#E7E7E7] bg-transparent p-1 pl-2"
    />
  );
}
