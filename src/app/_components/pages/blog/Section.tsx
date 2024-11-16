import { IPost } from "src/app/_lib/interfaces/post";
import Post from "./Post";

interface SectionProps {
  section: {
    title: string;
    list: IPost[];
  };
}

export default function Section({ section }: SectionProps) {
  const { title, list } = section;
  return (
    <section
      id="best-skills-sections"
      className={`flex flex-col w-full items-center justify-center ${
        title && "mt-8"
      }`}
    >
      {title && <h2 className="text-[24px] font-bold xl:mb-0 mt-4">{title}</h2>}
      <div className="gap-4 md:gap-[2%] justify-center md:justify-between flex float w-full flex-wrap items-center">
        {list.map((post) => (
          <Post key={post.title} post={post} />
        ))}
      </div>
    </section>
  );
}
