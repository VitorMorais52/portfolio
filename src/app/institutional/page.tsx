import Image from "next/image";

import { Suspense } from "react";

import bgInstitutional from "../../../public/bg-institutional-2.webp";

import {
  WrittenLogo,
  GithubLogoWhite,
  RocketseatLogo,
  LinkedinLogo,
  GmailLogo,
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
          className="mt-8 mb-8"
        />
        <p className=" mb-4 font-light text-justify hyphens-auto">
          &nbsp;&nbsp;With 4+ years of experience in website development, I have
          worked on medium and large-scale products, focusing on performance
          optimization, usability, and accessibility. Additionally, I have been
          actively involved in creating and implementing new features, always
          adhering to industry standards and seeking innovation efficiently,
          basing decisions on test results and metric analysis.
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
            <p className="mt-6 md:mt-0 md:ml-[24px] mb-[24px] font-light hyphens-auto">
              &nbsp;&nbsp;I have solid expertise in JavaScript technologies,
              with proficiency in frameworks and libraries such as ReactJS,
              NextJS, and VueJS. I have applied these tools to develop various
              products, including catalogs, real-time chats, ERP and CRM
              systems, landing pages, and institutional websites. On the
              backend, I have experience building APIs and other services using
              PHP and Node.js, with libraries like ExpressJS and NestJS
            </p>
            <div className="flex justify-center flex-col md:flex-row">
              <p className="md:mx-[24px] font-light hyphens-auto">
                &nbsp;&nbsp;I am continuously expanding my knowledge by working
                on study projects, where I am responsible for prototyping and
                implementing screens and functionalities. As a distinguishing
                factor, I leverage Figma for UI/UX tasks and React Native for
                mobile development.
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
        id="ContactMe"
        className="px-4 flex flex-col items-center content-center mt-8 w-full"
      >
        <h1 className="font-bold text-[26px]">Contact me</h1>
        <div className="mx-auto mt-[32px]">
          <div className="flex flex-wrap gap-6 mt-1">
            <Link
              className="flex gap-[8px]"
              aria-label="email"
              href="mailto:vitormorais52@gmail.com"
            >
              <GmailLogo classes="w-[25px] h-[25px]" /> vitormorais52@gmail.com
            </Link>
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
