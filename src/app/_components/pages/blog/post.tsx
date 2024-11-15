"use client";

import Avatar from "../../common/avatar";
import CleanCode from "../../common/icons/blog/cleanCode";

export default function Post() {
  const handleOpenPost = () => {};
  return (
    <article
      role="button"
      onClick={handleOpenPost}
      tabIndex={0}
      className="cursor-pointer flex  flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4"
    >
      <div className="w-full xs:w-[77%]">
        <header>
          <p className="text-[14px] text-[#B0B0B0]">
            <time dateTime="2020-03-13">Ago 11, 2020</time>
            <span className="ml-4">3 min read</span>
          </p>
          <h2 className="text-[18px] mt-4 mb-2">ReactJS</h2>
        </header>
        <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
          I have been studying ReactJS since version 16 and working with it
          since the release of version 16.8, which introduced hooks and the
          concept of functional programming.
        </p>{" "}
        <p className="line-clamp-3 xs:line-clamp-2 overflow-hidden text-ellipsis mb-4 mr-4">
          Throughout my experience, I have worked with features like React
          Hooks, React Router, Tanstack Query (formerly React Query), Redux and
          Redux Toolkit, React Hook Form, Styled Components, among others.
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
  );
}
