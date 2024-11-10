import Chat from "../_components/icons/blog/chat";
import Screen from "../_components/icons/blog/screen";
import FolderScreen from "../_components/icons/blog/folderScreen";
import CleanCode from "../_components/icons/blog/cleanCode";
import CodeRand from "../_components/icons/blog/codeRand";
import CodeOptimization from "../_components/icons/blog/codeOptimization";
import Me from "../_components/icons/blog/me";
import Avatar from "../_components/avatar";

export default function Blog() {
  return (
    <main className="mx-4 flex min-h-screen flex-col items-center max-w-7xl xl:mx-auto mb-[72px]">
      <article className="flex flex-col items-center sm:flex-row w-full justify-between mt-[72px] bg-[#242323] rounded-[4px] p-4">
        <div className="w-full sm:w-[68%] xl:w-[84%]">
          <header>
            <p className="text-[14px] text-[#B0B0B0]">
              <time dateTime="2023-09-06">Nov 8, 2024</time>
              <span className="ml-4">1 min read</span>
            </p>
            <h2 className="text-[18px] mt-4 mb-2">About me</h2>
          </header>
          <p className="line-clamp-6 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4">
            My name is João Morais, I’m a Brazilian Developer and I’ve been
            working with development for over 4 years.
          </p>
          <footer className="flex mb-[12px]">
            <p className="flex items-center">
              <Avatar alt="author photo" className="w-[40px] h-[40px]" />
              <span className="ml-2">João Morais</span>
            </p>
          </footer>
        </div>
        <div className="flex justify-center items-center my-auto w-[14%] min-w-[180px] aspect-square bg-[#161616] rounded-[4px]">
          <Me className="w-[60%] h-[60%] fill-[#D9D9D9]" />
        </div>
      </article>
      <section
        id="best-skills-sections"
        className="flex flex-col w-full items-center justify-center mt-8"
      >
        <h2 className="text-[24px] font-bold xl:mb-0 mt-4">Best Skills</h2>
        <div className="gap-4 md:gap-[2%] justify-center md:justify-between flex float w-full flex-wrap items-center">
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2020-03-13">Ago 11, 2020</time>
                  <span className="ml-4">3 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">ReactJS</h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                I have been studying ReactJS since version 16 and working with
                it since the release of version 16.8, which introduced hooks and
                the concept of functional programming.
              </p>{" "}
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                Throughout my experience, I have worked with features like React
                Hooks, React Router, Tanstack Query (formerly React Query),
                Redux and Redux Toolkit, React Hook Form, Styled Components,
                among others.
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <Avatar alt="author photo" className="w-[40px] h-[40px]" />
                  <span className="ml-2">João Morais</span>
                </p>
              </footer>
            </div>
            <div className="flex justify-center items-center my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]">
              <CleanCode className="w-[60%] fill-[#D9D9D9]" />
            </div>
          </article>
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2020-09-01">Sep 1, 2020</time>
                  <span className="ml-4">2 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">VueJS</h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                I have used Vue.js professionally in version 2.0 during one of
                my past experiences.
              </p>
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                I have also worked with and studied version 3.0, where we saw
                improvements in JSX and TypeScript support.
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <Avatar alt="author photo" className="w-[40px] h-[40px]" />
                  <span className="ml-2">João Morais</span>
                </p>
              </footer>
            </div>
            <div className="flex justify-center items-center my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]">
              <CodeOptimization className="w-[60%] fill-[#D9D9D9]" />
            </div>
          </article>
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Oct 4, 2020</time>
                  <span className="ml-4">3 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">Typescript</h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                I started using TypeScript in 2020.
              </p>{" "}
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                Javascript offers unparalleled coding freedom, but Typescript is
                essential for the health of the project, and consequently, for
                the developer’s well-being.
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <Avatar alt="author photo" className="w-[40px] h-[40px]" />
                  <span className="ml-2">João Morais</span>
                </p>
              </footer>
            </div>
            <div className="flex justify-center items-center my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]">
              <CodeRand className="w-[60%] fill-[#D9D9D9]" />
            </div>
          </article>
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2022-09-01">Sep 1, 2022</time>
                  <span className="ml-4">4 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">NextJS</h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                I have been studying and following Next.js since version 12,
                where I had my first professional experience with this
                framework.
              </p>{" "}
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                Today, I am using version 15 to create this humble portfolio.
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <Avatar alt="author photo" className="w-[40px] h-[40px]" />
                  <span className="ml-2">João Morais</span>
                </p>
              </footer>
            </div>
            <div className="flex justify-center items-center my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]">
              <CleanCode className="w-[60%] fill-[#D9D9D9]" />
            </div>
          </article>
        </div>
      </section>
      <section
        id="experiences-sections"
        className="flex flex-col w-full items-center justify-center mt-8"
      >
        <h2 className="text-[24px] font-bold mt-4">Experiences</h2>
        <div className="gap-4 md:gap-[2%] justify-center md:justify-between flex float w-full flex-wrap items-center">
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 1, 2020</time>
                  <span className="ml-4">4 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">
                  Code49 - Web System Developer
                </h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                Responsible for maintaining the product, implementing new
                features and also for refactoring and migrating part of the
                project to use new technologies and frameworks.
              </p>{" "}
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                Techs and resources: PHP, JavaScript, VueJS, HTML, CSS,
                Bootstrap, Laravel, NodeJS, MariaDB, Docker, Git/GitLab e
                Discord. Methodologies: Scrum and Kanban.
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <Avatar alt="author photo" className="w-[40px] h-[40px]" />
                  <span className="ml-2">João Morais</span>
                </p>
              </footer>
            </div>
            <div className="flex justify-center items-center my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]">
              <Screen className="w-[60%] fill-[#D9D9D9]" />
            </div>
          </article>
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 1, 2022</time>
                  <span className="ml-4">6 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">
                  SOFTABLE - Frontend Web Developer
                </h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                I participated in the migration and refactoring of an ERP
                product at its beginning, being also responsible for
                implementing new screens and functionalities.
              </p>{" "}
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                Techs and resources: ReactJS, React Hooks, React Hook Form,
                React Router, React Query, Styled Components, NextJS,
                Typescript, HTML, JavaScript, CSS.
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <Avatar alt="author photo" className="w-[40px] h-[40px]" />
                  <span className="ml-2">João Morais</span>
                </p>
              </footer>
            </div>
            <div className="flex justify-center items-center my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]">
              <FolderScreen className="w-[60%] fill-[#D9D9D9]" />
            </div>
          </article>
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">May 6, 2022</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">
                  UOL - Frontend Web Developer
                </h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                Responsible for maintaining and adding new features to the
                product, this being a realtime chat.
              </p>{" "}
              <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
                Technologies and resources used: ReactJS, React Hooks, React
                Router, React Query, React Redux, React Testing Library, Styled
                Components, SASS, NextJS, Typescript, Adobe XD, Figma, Atlassian
                resources and Teams.
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <Avatar alt="author photo" className="w-[40px] h-[40px]" />
                  <span className="ml-2">João Morais</span>
                </p>
              </footer>
            </div>
            <div className="flex justify-center items-center my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]">
              <Chat className="w-[60%] fill-[#D9D9D9]" />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
