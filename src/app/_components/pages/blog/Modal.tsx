"use client";
import { useCallback, useEffect, useState } from "react";
import { IPost } from "src/app/_lib/interfaces/post";
import Avatar from "../../common/avatar";
import DynamicIcon from "./DynamicIcon";

interface ModalProps {
  post: IPost;
  toggleModal: () => void;
}

export default function Modal({ post, toggleModal }: ModalProps) {
  const [state, setState] = useState("open");
  const {
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

  const handleCloseModal = useCallback(() => {
    setState("closed");
    setTimeout(() => toggleModal(), 200);
  }, [toggleModal]);

  const handleEscClick = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEscClick);
    return () => {
      window.removeEventListener("keydown", handleEscClick);
    };
  }, [handleEscClick]);

  return (
    <>
      <div
        data-state={state}
        role="button"
        onClick={handleCloseModal}
        className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
      />
      <div
        role="dialog"
        id="radix-:r1dt:"
        aria-describedby="radix-:r1dv:"
        aria-labelledby="radix-:r1du:"
        data-state={state}
        className="pointer-events-auto data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out bg-[#161616] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 grid gap-4 bg-background p-6 shadow-lg sm:rounded-lg w-[90%] sm:max-w-[425px] w-full max-w-lg"
        tabIndex={-1}
      >
        <div className="flex flex-col space-y-1.5 sm:text-left h-fit">
          <header>
            <p className="text-[14px] text-[#B0B0B0]">
              <time dateTime={formattedDate}>{formattedDate}</time>
              <span className="ml-4">{readingMinutes} min read</span>
            </p>
            <h2 id="radix-:r1du:" className="text-[18px] mt-4 mb-2">
              {title}
            </h2>
            {subtitle && <h2 className="text-[18px] mt-4 mb-2">{subtitle}</h2>}
          </header>
          <main id="paragraphs" className="">
            {paragraphs.map((paragraph, index) => (
              <p
                key={title + index}
                id="radix-:r1dv:"
                className="mb-4 mr-4 text-sm"
              >
                {paragraph}
              </p>
            ))}
          </main>
          <footer className="flex flex-col h-fit ">
            <p className="flex items-center pb-4">
              <Avatar alt="author photo" className="w-[40px] h-[40px]" />
              <span className="ml-2">{author}</span>
            </p>
            <div
              className={`w-[200px] h-[120px] mx-auto flex justify-center items-center aspect-square bg-[#161616] rounded-[4px]`}
            >
              <DynamicIcon iconName={icon} />
            </div>
          </footer>
        </div>
        <button
          type="button"
          className="absolute pointer-events-auto right-4 top-4 rounded-sm brightness-50 ring-offset-background transition-brightness hover:brightness-100 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1"
          onClick={handleCloseModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x h-4 w-4"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  );
}
