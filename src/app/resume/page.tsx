import Link from "next/link";
import {
  GithubLogoWhite,
  LinkedinLogo,
  RocketseatLogo,
} from "../_components/common/icons";

export default function Resume() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-7xl mx-auto">
      <div className="mx-4 sm:my-[72px] mt-16 pb-12 sm:pb-[84px] px-4 sm:px-[34px] lg:w-[850px] flex flex-col border border-solid border-[#8B8B8B] bg-[#1A1A1A]">
        <h1 className="mx-auto mt-[84px] text-[26px]">Software Engineer</h1>
        <section id="personalInfo" className="w-auto mt-8">
          <h2 className="text-[20px]">João Morais</h2>
          <p className="font-extralight">
            <Link aria-label="email" href="mailto:vitormorais52@gmail.com">
              vitormorais52@gmail.com
            </Link>
          </p>
        </section>
        <div className="flex flex-col md:flex-row justify-between">
          <section id="leftContent" className="max-w-[560px] mt-8">
            <section id="aboutMe">
              <h2 className="text-[20px]">About me</h2>
              <p className="mt-2 font-extralight text-justify hyphens-auto">
                With 4+ years of experience in website development, I have
                worked on medium and large-scale products, focusing on
                performance optimization, usability, and accessibility.
                Additionally, I have been actively involved in creating and
                implementing new features, always adhering to industry standards
                and seeking innovation efficiently, basing decisions on test
                results and metric analysis.
              </p>
              <p className="mt-2 font-extralight text-justify hyphens-auto">
                I have solid expertise in JavaScript technologies, with
                proficiency in frameworks and libraries such as ReactJS, NextJS,
                and VueJS. I have applied these tools to develop various
                products, including catalogs, real-time chats, ERP and CRM
                systems, landing pages, and institutional websites. On the
                backend, I have experience building APIs and other services
                using PHP and Node.js, with libraries like ExpressJS and NestJS
              </p>
              <p className="mt-2 font-extralight text-justify hyphens-auto">
                I am continuously expanding my knowledge by working on study
                projects, where I am responsible for prototyping and
                implementing screens and functionalities. As a distinguishing
                factor, I leverage Figma for UI/UX tasks and React Native for
                mobile development.
              </p>
            </section>
            <section id="professionalBackground" className="mt-8">
              <h2 className="text-[20px]">Experiences</h2>
              <section id="UOL" className="mt-2">
                <p className=" text-[18px]">
                  <strong className="font-normal">
                    Frontend Software Engineer at UOL - Universo Online
                  </strong>
                </p>
                <p className="font-extralight">May 2022 - Present</p>
                <p className="mt-3">
                  <strong className="font-normal">Product type</strong>
                </p>
                <p className="font-extralight">Realtime Chat</p>
                <p className="mt-3">
                  <strong className="font-normal">About</strong>
                </p>
                <p className="font-extralight text-justify hyphens-auto">
                  As a frontend developer on the team behind Bate-Papo UOL — a
                  real-time chat platform with a large user base — I lead the
                  maintenance and implementation of new features in its web
                  version. I drive innovation and improvement by analyzing
                  metrics and results to deliver continuous enhancements.
                </p>
                <p className="font-extralight mt-2 text-justify hyphens-auto">
                  On a daily basis, I apply tool updates, refactor code, and
                  restructure parts of the project when necessary and feasible.
                  My work consistently prioritizes performance optimization and
                  scalability.
                </p>
                <p className="mt-3">
                  <strong className="font-normal">
                    Technologies and Resources
                  </strong>
                </p>
                <p className="font-extralight">
                  ReactJS, NextJS, TypeScript, Adobe XD, Figma, Atlassian
                  resources and Teams
                </p>
              </section>
              <section
                id="SOFTABLE"
                className="mt-4 pt-4 border-solid border-t-[1px] border-[#f0f0f0]"
              >
                <p className="text-[18px]">
                  <strong className="font-normal">
                    Frontend Software Engineer at Softable LTDA
                  </strong>
                </p>
                <p className="font-extralight">September 2021 - January 2022</p>
                <p className="mt-3">
                  <strong className="font-normal">Product type</strong>
                </p>
                <p className="font-extralight">ERP</p>
                <p className="mt-3">
                  <strong className="font-normal">About</strong>
                </p>
                <p className="font-extralight text-justify hyphens-auto">
                  Led the migration and refactoring of an ERP product from
                  Next.js to React.js, ensuring a smoother, more maintainable
                  codebase. Developed new features and functionalities, and
                  implemented multiple improvements and bug fixes to enhance
                  overall performance and user experience.
                </p>
                <p className="mt-3">
                  <strong className="font-normal">
                    Technologies and Resources
                  </strong>
                </p>
                <p className="font-extralight">
                  ReactJS, NextJS, TypeScript, Figma, Jira, Bitbucket and Slack
                </p>
              </section>
              <section
                id="CODE49"
                className="mt-4 pt-4 border-solid border-t-[1px] border-[#f0f0f0]"
              >
                <p className="text-[18px]">
                  <strong className="font-normal">
                    Software Engineer at Code49
                  </strong>
                </p>
                <p className="font-extralight">
                  September 2020 - September 2021
                </p>
                <p className="mt-3">
                  <strong className="font-normal">Product type</strong>
                </p>
                <p className="font-extralight">
                  CRM, Institutional Pages, Real Estate Webpages and integrated
                  services
                </p>
                <p className="mt-3">
                  <strong className="font-normal">About</strong>
                </p>
                <p className="font-extralight text-justify hyphens-auto">
                  Primarily contributed to the development of a CRM product,
                  where I delivered numerous fixes and enhancements. I also
                  implemented new features and expanded existing ones to improve
                  functionality. Additionally,I participated in the migration of
                  the product to a more modern framework, Vue.js.
                </p>
                <p className="font-extralight mt-2 text-justify hyphens-auto">
                  For a period, I developed a website customization feature for
                  institutional sites, working entirely without frameworks to
                  ensure maximum flexibility and performance.
                </p>
                <p className="mt-3">
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
