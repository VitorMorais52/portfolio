"use client";
import { useState } from "react";
import { IPost } from "src/app/_lib/interfaces/post";

interface ModalProps {
  post: IPost;
  toggleModal: () => void;
}
export default function Modal({ post, toggleModal }: ModalProps) {
  const [state, setState] = useState("open");

  const handleCloseModal = () => {
    setState("closed");
    setTimeout(() => toggleModal(), 200);
  };

  return (
    <>
      <div
        data-state={state}
        className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
      />
      <div
        role="dialog"
        id="radix-:r1dt:"
        aria-describedby="radix-:r1dv:"
        aria-labelledby="radix-:r1du:"
        data-state={state}
        className="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out bg-[#161616] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 grid w-full max-w-lg gap-4 bg-background p-6 shadow-lg sm:rounded-lg sm:max-w-[425px]"
        tabIndex={-1}
        style={{ pointerEvents: "auto" }}
      >
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2
            id="radix-:r1du:"
            className="text-lg font-semibold leading-none tracking-tight"
          >
            Edit profile
          </h2>
          <p id="radix-:r1dv:" className="text-sm text-muted-foreground">
            Make changes to your profile here. Click save when you’re done.
          </p>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right"
              htmlFor="name"
            >
              Name
            </label>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button
            className="bg-white text-black inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            type="submit"
          >
            Save changes
          </button>
        </div>
        <button
          type="button"
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
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
