import Image from "next/image";

type RocketseatLogo = {
  classes: string;
};

export default function RocketseatLogo({ classes }: RocketseatLogo) {
  return (
    <Image
      src="/rocketseat-logo.png"
      alt="Rocketseat Logo"
      quality={100}
      width={32}
      height={32}
      className={`${classes} rounded-[6px]`}
    />
  );
}
