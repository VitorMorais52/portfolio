interface Design {
  className: string;
}

export default function Filters({ className }: Design) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M32 144h448M112 256h288M208 368h96"
      />
    </svg>
  );
}
