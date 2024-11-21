"use client";
import { useState } from "react";

import Avatar from "../../common/avatar";
import DynamicIcon from "./DynamicIcon";
import Modal from "./Modal";

import { IPost } from "../../../_lib/interfaces/post";
interface PostProps {
  post: IPost;
}

export default function Post({ post }: PostProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    highlighted,
    title,
    subtitle,
    author,
    readingMinutes,
    date: dateString,
    icon,
    paragraphs,
  } = post;

  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);

  const variation = highlighted ? "highlighted" : "common";

  const containerStyle = {
    common: "xs:flex-row md:w-[49%] xl:max-w-[624px] mt-[2%]",
    highlighted: "sm:flex-row mt-[72px]",
  };
  const dynamicImportStyle = {
    highlighted: "w-[14%] min-w-[180px] h-fit max-h-[60%]",
    common: "w-[21%] min-w-[120px] h-fit max-h-[60%]",
  };

  return (
    <>
      {isOpen && (
        <Modal post={post} toggleModal={() => setIsOpen((value) => !value)} />
      )}
      <article
        role="button"
        onClick={() => setIsOpen(true)}
        tabIndex={0}
        className={`${containerStyle[variation]} flex flex-col items-center w-full justify-between bg-[#242323] rounded-[4px] p-4`}
      >
        <div className="w-full xs:w-[77%]">
          <header>
            <p className="text-[14px] text-[#B0B0B0]">
              <time dateTime={formattedDate}>{formattedDate}</time>
              <span className="ml-4">{readingMinutes} min read</span>
            </p>
            <h2 className="text-[18px] mt-4 mb-2">{title}</h2>
            {subtitle && <h2 className="text-[18px] mt-4 mb-2">{subtitle}</h2>}
          </header>
          <main
            id="paragraphs"
            className="line-clamp-3 overflow-hidden text-ellipsis"
          >
            {paragraphs.map((paragraph, index) => (
              <p key={title + index} className="mb-4 mr-4">
                {paragraph}
              </p>
            ))}
          </main>
          <footer
            className={`flex mt-4 mb-6 ${
              variation === "highlighted" ? "sm:mb-0" : "xs:mb-0"
            }`}
          >
            <p className="flex items-center">
              <Avatar alt="author photo" className="w-[40px] h-[40px]" />
              <span className="ml-2">{author}</span>
            </p>
          </footer>
        </div>
        <div
          className={`${dynamicImportStyle[variation]} flex justify-center items-center my-auto aspect-square bg-[#161616] rounded-[4px]`}
        >
          <DynamicIcon iconName={icon} />
        </div>
      </article>
    </>
  );
}
