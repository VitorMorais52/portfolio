"use client";

import { FilterProvider } from "src/app/_lib/contexts/useProductsFilter";
import { IProducts } from "src/app/_lib/interfaces/product";

interface UseClientWrapper {
  children: React.ReactNode;
  products: IProducts;
}
export default function UseClientWrapper({
  children,
  products,
}: UseClientWrapper) {
  return <FilterProvider products={products}>{children}</FilterProvider>;
}
