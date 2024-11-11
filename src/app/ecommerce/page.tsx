import Image from "next/image";
import { Suspense } from "react";

import bgInstitutional from "../../../public/bg-ecommerce.webp";

import IconReactJS from "../_components/icons/ecommerce/reactjs";
import IconJavascript from "../_components/icons/ecommerce/javascript";
import IconTypescript from "../_components/icons/ecommerce/typescript";
import IconVueJS from "../_components/icons/ecommerce/vuejs";
import IconNextJS from "../_components/icons/ecommerce/nextjs";
import IconNodeJS from "../_components/icons/ecommerce/nodejs";
import IconHTML5 from "../_components/icons/ecommerce/html5";
import IconPHP from "../_components/icons/ecommerce/php";

import IconCSS from "../_components/icons/ecommerce/css";
import IconDocker from "../_components/icons/ecommerce/docker";
import IconFigma from "../_components/icons/ecommerce/figma";
import IconMariaDB from "../_components/icons/ecommerce/mariadb";
import IconSass from "../_components/icons/ecommerce/sass";
import IconStyledComponents from "../_components/icons/ecommerce/styledComponents";
import IconTailwind from "../_components/icons/ecommerce/tailwind";
import { WrittenLogo } from "../_components/icons";

import Filters from "./Filters";

//ReactJS X
//NextJS X
//VueJS X
//Typescript X
//Javascript X
//HTML & HTML5 X
//PHP X
//NodeJS X

//CSS e Module CSS
//MariaDB
//Docker
//Styled-components
//Sass
//Tailwind
//Figma

//Git / Github / Gitlab / Bitbucket

import IconGit from "../_components/icons/ecommerce/git";
import IconGithub from "../_components/icons/ecommerce/github";
import IconGitlab from "../_components/icons/ecommerce/gitlab";
import IconBitbucket from "../_components/icons/ecommerce/bitbucket";

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
            placeholder="Search"
            className="mt-6 border-2 border-solid border-[#585858] rounded-[12px] text-[#E7E7E7] bg-transparent p-1 pl-2"
          ></input>
        </div>
      </div>
      <div id="container" className="relative flex mt-[-6rem] w-full">
        <Filters />
        <section id="mainContent" className="flex bg-[#161616] w-[100%] ">
          <section
            id="products"
            className="mt-16 xs:px-8 mb-8 w-full justify-items-center grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
          >
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconReactJS className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconNextJS className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconVueJS className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconTypescript className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconJavascript className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconHTML5 className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconNodeJS className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconPHP className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>

            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconCSS className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconDocker className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconFigma className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconMariaDB className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconSass className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconStyledComponents className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconTailwind className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>

            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconGit className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconGithub className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconGitlab className="w-[60%] h-[60%] stroke-[#D9D9D9]" />
            </div>
            <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
              <IconBitbucket className="w-[60%] h-[60%] fill-[#D9D9D9]" />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
