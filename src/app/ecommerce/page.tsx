import Image from "next/image";
import { headers } from "next/headers";
import { Suspense } from "react";

import bgInstitutional from "../../../public/bg-ecommerce.webp";
import { IProducts } from "../_lib/interfaces/product";

import FiltersBar from "../_components/pages/ecommerce/FiltersBar";
import { WrittenLogo } from "../_components/common/icons";
import ProductsSection from "../_components/pages/ecommerce/ProductsSection";
import InputFilter from "../_components/pages/ecommerce/InputFilter";
import UseClientWrapper from "../_components/pages/ecommerce/UseClientWrapper";

export default async function Ecommerce() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto");

  const data = await fetch(`${protocol}://${host}/api/products`);
  const products: IProducts = await data.json();

  return (
    <UseClientWrapper products={products}>
      <MainContent />
    </UseClientWrapper>
  );
}

function MainContent() {
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
          <InputFilter />
        </div>
      </div>
      <div id="container" className="relative flex mt-[-6rem] w-full">
        <FiltersBar />
        <ProductsSection />
      </div>
    </main>
  );
}
