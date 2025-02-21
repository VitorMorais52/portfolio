import Image from "next/image";
import { headers } from "next/headers";
import { Suspense } from "react";

import bgInstitutional from "../../../public/bg-ecommerce.webp";
import { WrittenLogo } from "../_components/common/icons";

import { IProducts, IProduct } from "../_lib/interfaces/product";
import Product from "../_components/pages/ecommerce/Product";
import Filters from "../_components/pages/ecommerce/Filters";

import { FilterProvider, useFilters } from "../_lib/contexts/useProductsFilter";

export default async function Ecommerce() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto");

  const data = await fetch(`${protocol}://${host}/api/products`);
  const products: IProducts = await data.json();

  return (
    <FilterProvider products={products}>
      <MainContent />
    </FilterProvider>
  );
}

function MainContent() {
  const { filteredProducts } = useFilters();

  return (
    <main className="flex flex-col items-center min-h-screen mx-auto mb-[72px]">
      <div className="h-[427px] w-screen overflow-hidden -z-10">
        <Suspense>
          <Image
            alt="Mountains"
            src={bgInstitutional}
            placeholder="blur"
            quality={100}
            fill
            style={{
              objectFit: "cover",
              opacity: "0.8",
              maxHeight: "427px",
            }}
          />
        </Suspense>
      </div>
      <div
        id="Home"
        className="absolute flex flex-col ml-auto mr-auto"
        style={{ color: "white" }}
      >
        <div className="mt-[64px] mb-[106px] ml-auto mr-auto">
          <WrittenLogo />
        </div>
        <div className="flex flex-col ml-auto mr-auto text-[#E7E7E7]">
          <h1 className="ml-auto mr-auto text-[34px]">PRODUCTS</h1>

          <input
            type="text"
            placeholder="Search"
            className="mt-6 border-2 border-solid border-[#585858] rounded-[12px] text-[#E7E7E7] bg-transparent p-1 pl-2"
          />
        </div>
      </div>
      <div id="container" className="relative flex mt-[-6rem] w-full">
        <Filters />
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
      </div>
    </main>
  );
}
