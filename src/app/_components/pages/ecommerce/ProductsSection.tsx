"use client";

import { useFilters } from "src/app/_lib/contexts/useProductsFilter";
import { IProduct } from "src/app/_lib/interfaces/product";
import Product from "./Product";

export default function ProductsSection() {
  const { filteredProducts } = useFilters();

  return (
    <section id="mainContent" className="flex bg-[#161616] w-[100%] ">
      <section
        id="products"
        className="mt-16 xs:px-8 mb-8 w-full justify-items-center grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
      >
        {filteredProducts.map((product: IProduct) => (
          <Product key={product.iconName} product={product} />
        ))}
      </section>
    </section>
  );
}
