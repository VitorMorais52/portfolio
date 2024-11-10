import Image from "next/image";
interface Avatar {
  className: string;
  alt: string;
}
export default function Avatar({ className, alt }: Avatar) {
  return (
    <Image
      alt={alt}
      width={40}
      height={40}
      quality={100}
      className={`${className} rounded-full object-cover object-top`}
      src="/me-tiny.jpg"
    />
  );
}
