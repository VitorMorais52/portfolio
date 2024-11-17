import Image from "next/image";

import { Suspense } from "react";

import bgInstitutional from "../../../public/bg-institutional-2.webp";

import {
  WrittenLogo,
  GithubLogoWhite,
  RocketseatLogo,
  LinkedinLogo,
} from "../_components/common/icons";
import Link from "next/link";

export default function Institutional() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-7xl mx-auto mb-[72px]">
      <div
        id="wrapper-bg-img"
        className="h-screen w-screen overflow-hidden -z-10"
      >
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
      <section
        id="Introduction"
        className="absolute flex flex-col ml-auto mr-auto"
        style={{ color: "white" }}
      >
        <div
          id="container-logo"
          className="mt-[64px] mb-[106px] ml-auto mr-auto"
        >
          <WrittenLogo />
        </div>
        <div
          id="title"
          className="max-w-[96%] sm:max-w-full flex flex-col ml-auto mr-auto mb-[150px] text-center text-[#E7E7E7]"
        >
          <span className="text-[34px] ml-auto mr-auto w-fit">
            More than one developer
          </span>
          <span className="text-[32px] ml-auto mr-auto">
            less than two developers
          </span>
        </div>
        <ul className="text-xs xs:text-sm sm:text-base gap-4 px-4 py-[14px] ml-auto mr-auto flex border-2 border-solid border-[#585858] rounded-[12px] text-[#E7E7E7]">
          <li>
            <Link href="#Introduction">Home</Link>
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
      </section>
      <section
        id="WhoWeAre"
        className="px-4 lg:mx-0 flex flex-col items-center content-center"
      >
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
        <p className="mt-[18px] mb-4 text-justify">
          My name is João Morais, and I’m a Brazilian developer. I’ve been
          working in development for over 4 years. Since 2016, I’ve been
          studying and striving to discover my best version both as a
          professional and as a person.
        </p>
        <div className="flex justify-center flex-col md:flex-row">
          <Image
            alt="Mountains"
            src="/me-evo.webp"
            quality={100}
            width="258"
            height="282"
            className="mt-2 md:mt-0 mx-auto md:mr-auto h-[282px] lg:max-h-[282px]"
          />
          <div>
            <p className="mt-6 md:mt-0 md:ml-[24px] mb-[24px] text-justify">
              I have Associate’s Degree since 2018 and I got my first job as
              Software Developer in 2020. Since then, I’ve been conquering for
              experience with various technologies, but having my core skills
              with JavaScript based technologies like ReactJS, NextJS and VueJS.
            </p>
            <div className="flex justify-center flex-col md:flex-row">
              <p className="md:mx-[24px] text-justify">
                We are humans, not code or machines. Humanized work is
                important. “I am because we are”.
              </p>
              <Image
                alt="Mountains"
                src="/me-porto.webp"
                quality={100}
                width="225"
                height="282"
                className="mt-6 md:mt-[-8px] mx-auto md:ml-auto h-[282px] max-h-[282px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section
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
      </section>
      <section
        id="ContactMe"
        className="px-4 flex flex-col items-center content-center mt-[128px] w-full"
      >
        <h1 className="font-bold text-[26px]">Contact me</h1>
        <div className="mr-auto mt-[32px]">
          <p className="text-[20px]">João Morais</p>
          <p>vitormorais52@gmail.com</p>
        </div>
        <div className="mr-auto mt-6">
          <p className="text-[20px]">Links</p>
          <div className="flex flex-wrap gap-6 mt-1">
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
      </section>
    </main>
  );
}
