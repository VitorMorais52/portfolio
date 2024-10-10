interface Burguer {
  className?: string;
}

export default function Burguer({ className }: Burguer) {
  return (
    <svg
      width="26"
      height="17"
      viewBox="0 0 26 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ""}
    >
      <path
        d="M1 1H25M1 8.21354H25M1 15.4271H25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
