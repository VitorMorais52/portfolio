import Image from "next/image";

import { Suspense } from "react";

import bgInstitutional from "../../../public/bg-institutional-2.webp";

import {
  WrittenLogo,
  GithubLogoWhite,
  RocketseatLogo,
  LinkedinLogo,
} from "../_components/icons";
import Link from "next/link";

export default function Institutional() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-7xl mx-auto mb-[72px]">
      <div className="h-screen w-screen overflow-hidden -z-10">
        <Suspense>
          <Image
            alt="Mountains"
            src={bgInstitutional}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              opacity: "0.8",
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
        <div className="flex flex-col ml-auto mr-auto mb-[150px] text-[#E7E7E7]">
          <span className="ml-auto mr-auto text-[34px]">
            More than one developer
          </span>
          <span className="ml-auto mr-auto text-[32px]">
            less than two developers
          </span>
        </div>
        <ul className="gap-4 px-4 py-[14px] ml-auto mr-auto flex border-2 border-solid border-[#585858] rounded-[12px] text-[#E7E7E7]">
          <li>
            <Link href="#Home">Home</Link>
          </li>
          <li>
            <Link href="#WhoWeAre">Who we are</Link>
          </li>
          <li>
            <Link href="#Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="#ContactMe">Contact me</Link>
          </li>
        </ul>
      </div>
      <div id="WhoWeAre" className="flex flex-col items-center content-center">
        <h1 className="font-bold text-[26px]">
          Who{" "}
          <span className="relative mx-[1px]">
            we are
            <div className="absolute h-[2px] w-[77px] bg-white top-[50%] left-[-2.5px]"></div>
          </span>{" "}
          I am
        </h1>
        <Image
          alt="Mountains"
          src="/me-profile.webp"
          quality={100}
          width="151"
          height="180"
          style={{
            borderRadius: "100%",
          }}
          className="mt-[32px] mb-[25px]"
        />
        <h2>About me</h2>
        <p className="mt-[18px] mb-[18px] text-justify">
          Enthusiastic about technology and its continuous advancement, always
          learning more about the new features and tools that have been
          appearing, but also improving myself in what I already work on
        </p>
        <div className="flex">
          <Image
            alt="Mountains"
            src="/me-evo.webp"
            quality={100}
            width="258"
            height="282"
            className="mr-auto max-h-[282px]"
          />
          <div>
            <p className="ml-[24px] mb-[24px] text-justify">
              Enthusiastic about technology and its continuous advancement,
              always learning more about the new features and tools that have
              been appearing, but also improving myself in what I already work
              on
            </p>
            <div className="flex">
              <p className="mx-[24px] text-justify">
                Enthusiastic about technology and its continuous advancement,
                always learning more about the new features and tools that have
                been appearing, but also improving myself in what I already work
                on
              </p>
              <Image
                alt="Mountains"
                src="/me-porto.webp"
                quality={100}
                width="225"
                height="282"
                className="ml-auto mt-[-24px] max-h-[282px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="Portfolio"
        className="flex flex-col items-center content-center mt-[128px]"
      >
        <h1 className="font-bold text-[26px]">Portfolio</h1>
        <div className="flex items-end">
          <p className=" max-w-[282px] text-center text-[16px] mt-[20px]">
            Dude, this is my portfolio!{" "}
          </p>
          <p className="text-[12px] mb-[1px] ml-[6px] opacity-[0.4]">
            For now...
          </p>
        </div>
        <p className="max-w-[222px] text-center text-[16px]">Enjoy it.</p>
      </div>
      <div
        id="ContactMe"
        className="flex flex-col items-center content-center mt-[128px] w-full"
      >
        <h1 className="font-bold text-[26px]">Contact me</h1>
        <div className="mr-auto mt-[32px]">
          <p className="text-[20px]">João Morais</p>
          <p>vitormorais52@gmail.com</p>
        </div>
        <div className="mr-auto mt-6">
          <p className="text-[20px]">Links</p>
          <div className="flex gap-6 mt-1">
            <Link
              href="https://www.linkedin.com/in/joaovitormorais/"
              target="_blank"
              rel="noreferrer"
              className="flex gap-[8px]"
            >
              <LinkedinLogo classes="w-[22px] h-[22px]" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/VitorMorais52"
              target="_blank"
              rel="noreferrer"
              className="flex gap-[8px]"
            >
              <GithubLogoWhite classes="w-[22px] h-[22px]" /> Github
            </Link>
            <Link
              href="https://app.rocketseat.com.br/me/joaovitormorais"
              target="_blank"
              rel="noreferrer"
              className="flex gap-[8px]"
            >
              <RocketseatLogo classes="w-[22px] h-[22px]" /> Rocketseat
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
