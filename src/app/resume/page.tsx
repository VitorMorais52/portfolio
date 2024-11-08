import Link from "next/link";
import {
  GithubLogoWhite,
  LinkedinLogo,
  RocketseatLogo,
} from "../_components/icons";

export default function Resume() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-7xl mx-auto">
      <div className="mx-4 sm:my-[72px] mt-16 pb-12 sm:pb-[84px] px-4 sm:px-[34px] lg:w-[850px] flex flex-col border border-solid border-[#8B8B8B] bg-[#1A1A1A]">
        <h1 className="mx-auto mt-[84px] text-[26px]">
          Frontend Web Developer
        </h1>
        <section id="personalInfo" className="w-auto mt-8">
          <h2 className="text-[20px]">João Morais</h2>{" "}
          <p className="font-extralight">
            Email:{" "}
            <a href="mailto:vitormorais52@gmail.com">vitormorais52@gmail.com</a>
          </p>
        </section>
        <div className="flex flex-col md:flex-row justify-between">
          <section id="leftContent" className="max-w-[560px] mt-8">
            <section id="aboutMe">
              <h2 className="text-[20px]">About me</h2>
              <p className="mt-2 font-extralight">
                Enthusiastic about technology and its continuous advancement,
                always learning more about the new features and tools that have
                been appearing, but also improving myself in what I already work
                on
              </p>
            </section>
            <section id="professionalBackground" className="mt-8">
              <h2 className="text-[20px]">Experiences</h2>
              <section id="UOL" className="mt-2">
                <p className=" text-[18px]">
                  <strong className="font-normal">
                    Frontend Developer at UOL - Universo Online
                  </strong>
                </p>
                <p className="font-extralight">May 2022 - Present</p>
                <p className="mt-1">
                  <strong className="font-normal">Product type</strong>
                </p>
                <p className="font-extralight">Realtime Chat</p>
                <p className="mt-1">
                  <strong className="font-normal">
                    Technologies and Resources
                  </strong>
                </p>
                <p className="font-extralight">
                  ReactJS, NextJS, TypeScript, Adobe XD, Figma, Atlassian
                  resources and Teams
                </p>
              </section>
              <section id="SOFTABLE" className="mt-4">
                <p className="text-[18px]">
                  <strong className="font-normal">
                    Frontend Developer at Softable LTDA
                  </strong>
                </p>
                <p className="font-extralight">September 2021 - January 2022</p>
                <p className="mt-1">
                  <strong className="font-normal">Product type</strong>
                </p>
                <p className="font-extralight">ERP</p>
                <p className="mt-1">
                  <strong className="font-normal">
                    Technologies and Resources
                  </strong>
                </p>
                <p className="font-extralight">
                  ReactJS, NextJS, TypeScript, Figma, Jira, Bitbucket and Slack
                </p>
              </section>
              <section id="CODE49" className="mt-4">
                <p className="text-[18px]">
                  <strong className="font-normal">
                    System Developer at Code49
                  </strong>
                </p>
                <p className="font-extralight">
                  September 2020 - September 2021
                </p>
                <p className="mt-1">
                  <strong className="font-normal">Product type</strong>
                </p>
                <p className="font-extralight">
                  CRM, Institutional Pages, Real Estate Webpages and integrated
                  services
                </p>
                <p className="mt-1">
                  <strong className="font-normal">
                    Technologies and Resources
                  </strong>
                </p>
                <p className="font-extralight">
                  PHP, JavaScript, VueJS, Laravel, NodeJS, MariaDB, Docker,
                  GIT/GitLab and Discord
                </p>
              </section>
            </section>
            <section id="education" className="mt-8">
              <h2 className="text-[20px]">Education</h2>
              <section id="CTI" className="mt-2">
                <p>
                  <strong className="font-normal">
                    Associate’s Degree in IT, Colégio Técnico Industrial - Isaac
                    Portal Roldan - UNESP Bauru, Bauru
                  </strong>
                </p>
                <p className="font-extralight">February 2016 - December 2018</p>
                <p className="mt-1">
                  <strong className="font-normal">
                    Acquisition of skills and concepts of:
                  </strong>
                </p>
                <div>
                  <ul className="font-extralight">
                    <li>Programming Logic, MVC Pattern, OOP</li>
                    <li>C/C++, PHP, C#, JAVA, JavaScript</li>
                    <li>PArduino, Linux</li>
                  </ul>
                </div>
              </section>
            </section>
          </section>
          <section id="rightContent" className="mt-8">
            <section id="bestSkills">
              <h2 className="text-[20px]">Best skills</h2>
              <ul className="mt-2 font-extralight">
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
              </ul>
            </section>
            <section id="languages" className="mt-8">
              <h2 className="text-[20px]">Languages</h2>
              <ul className="mt-2 font-extralight">
                <li>Portuguese</li>
                <li>English</li>
              </ul>
            </section>
            <section id="links" className="mt-8">
              <h2 className="text-[20px]">Links</h2>
              <ul className="mt-2 font-extralight grid gap-3">
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
              </ul>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
