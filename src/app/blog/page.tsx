import { headers } from "next/headers";
import Section from "../_components/pages/blog/Section";
import { IPosts } from "../_lib/interfaces/post";

const fakePost = {
  title: "ReactJS",
  author: "João Morais",
  paragraphs: [
    "I have been studying ReactJS since version 16 and working with it since the release of version 16.8, which introduced hooks and the concept of functional programming.",
    "Throughout my experience, I have worked with features like React Hooks, React Router, Tanstack Query (formerly React Query), Redux and Redux Toolkit, React Hook Form, Styled Components, among others.",
  ],
  date: new Date("August 11, 2020"),
  readingMinutes: 3,
  icon: "CleanCode",
};

import Modal from "../_components/pages/blog/Modal";

export default async function Blog() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto");

  const data = await fetch(`${protocol}://${host}/api/posts`);
  const posts: IPosts = await data.json();

  return (
    <main className="mx-4 flex min-h-screen flex-col items-center max-w-7xl xl:mx-auto mb-[72px]">
      {Object.entries(posts).map(([key, section]) => (
        <Section key={key} section={section} />
      ))}
    </main>
  );
}
