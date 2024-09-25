import Image from "next/image";
import { Suspense } from "react";

import bgInstitutional from "../../../public/bg-ecommerce.webp";

import { WrittenLogo, Star } from "../_components/icons";

export default function Ecommerce() {
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
            placeholder="🔍 Search"
            className="mt-6 border-2 border-solid border-[#585858] rounded-[12px] text-[#E7E7E7] bg-transparent p-1 pl-2"
          ></input>
        </div>
      </div>
      <div id="container" className="relative flex mt-[-6rem] w-full">
        <section
          id="leftBar"
          className="w-[340px] bg-[#0C0C0C] flex flex-col items-start"
        >
          <h2 className="mt-4 mx-auto mb-[42px]">Filters</h2>

          <section id="reviews" className="pl-6">
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
        <section id="mainContent" className="flex bg-[#161616] w-[100%] ">
          <section
            id="products"
            className="mt-16 mx-8 mb-8 w-full justify-items-center grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
          >
            <div className="w-[300px] h-[380px] bg-[#000000] rounded-[10px]" />
            <div className="w-[300px] h-[380px] bg-[#000000] rounded-[10px]" />
            <div className="w-[300px] h-[380px] bg-[#000000] rounded-[10px]" />
            <div className="w-[300px] h-[380px] bg-[#000000] rounded-[10px]" />
            <div className="w-[300px] h-[380px] bg-[#000000] rounded-[10px]" />
            <div className="w-[300px] h-[380px] bg-[#000000] rounded-[10px]" />
            <div className="w-[300px] h-[380px] bg-[#000000] rounded-[10px]" />
            <div className="w-[300px] h-[380px] bg-[#000000] rounded-[10px]" />
            <div className="w-[300px] h-[380px] bg-[#000000] rounded-[10px]" />
            <div className="w-[300px] h-[380px] bg-[#000000] rounded-[10px]" />
          </section>
        </section>
      </div>
    </main>
  );
}
