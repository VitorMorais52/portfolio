import {
  Bricks,
  Screen,
  Database,
  Git,
  Tools,
  Design,
  Message,
  Management,
  Styling,
} from "./_components/common/icons";
import Introducing from "./_components/pages/home/Introducing";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-7xl mx-auto mb-[72px]">
      <section id="introducing" className="flex flex-col px-4">
        <h1 className="mt-[86px] text-[24px]">I&apos;m a Software Engineer</h1>
        <Introducing />
      </section>

      <section id="hard-skills" className="w-full mt-[86px] px-4">
        <h2 className="text-center text-[18px]">What do I have to offer?</h2>
        <div className="mt-8 mb-8 w-full justify-items-start grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,auto))]">
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Bricks className="mr-2" /> I have the base stack
            </h3>
            <p className="font-extralight mt-1">HTML, CSS and JavaScript.</p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Screen className="mr-2" /> The popular
            </h3>
            <p className="font-extralight mt-1">
              ReactJS, NextJS, VueJS and TypeScript.
            </p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Styling className="mr-2" /> For styling
            </h3>
            <p className="font-extralight mt-1">
              Styled-components, Sass and Bootstrap.
            </p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Database className="mr-2" /> I’ve already worked as Backend
              Developer using
            </h3>
            <p className="font-extralight mt-1">
              NodeJS, PHP and Laravel, MariaDB and Docker.
            </p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Git className="mr-2" /> For version control
            </h3>
            <p className="font-extralight mt-1">
              Git, GitLab, GitHub and Bitbucket.
            </p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Design className="mr-2" /> For layout design
            </h3>
            <p className="font-extralight mt-1">Figma and Adobe XD.</p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Tools className="mr-2" /> The tools I&apos;m familiar with
            </h3>
            <p className="font-extralight mt-1">
              Google Tag Manager, Google Analytics and Atlassian resources.
            </p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Message className="mr-2" />
              Communication platforms
            </h3>
            <p className="font-extralight mt-1">Teams, Slack and Discord.</p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Management className="mr-2" />
              Favorite agile methodologies
            </h3>
            <p className="font-extralight mt-1">Scrum and Kanban.</p>
          </section>
        </div>
      </section>

      <section id="product-types" className="mt-[42px] px-4">
        <h2 className="text-center">What kind of products have I worked on?</h2>
        <p className="mt-2 font-extralight text-center">
          CRM, ERP, Institutional Pages, Landing Pages and a Realtime Chat.
        </p>
      </section>

      <section id="about-me" className="w-full mt-[86px] px-4">
        <h2 className="text-center">About me</h2>
        <p className="mt-2 font-extralight text-left">
          &nbsp;&nbsp; With 4+ years of experience in website development, I
          have worked on medium and large-scale products, focusing on
          performance optimization, usability, and accessibility. Additionally,
          I have been actively involved in creating and implementing new
          features, always adhering to industry standards and seeking innovation
          efficiently, basing decisions on test results and metric analysis.
        </p>
        <p className="mt-2 font-extralight text-left">
          &nbsp;&nbsp; I have solid expertise in JavaScript technologies, with
          proficiency in frameworks and libraries such as ReactJS, NextJS, and
          VueJS. I have applied these tools to develop various products,
          including catalogs, real-time chats, ERP and CRM systems, landing
          pages, and institutional websites. On the backend, I have experience
          building APIs and other services using PHP and Node.js, with libraries
          like ExpressJS and NestJS.
        </p>
        <p className="mt-2 font-extralight text-left">
          &nbsp;&nbsp; I am continuously expanding my knowledge by working on
          study projects, where I am responsible for prototyping and
          implementing screens and functionalities. As a distinguishing factor,
          I leverage Figma for UI/UX tasks and React Native for mobile
          development.
        </p>
      </section>
    </main>
  );
}
