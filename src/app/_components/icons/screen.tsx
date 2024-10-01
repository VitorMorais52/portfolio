interface Screen {
  className: string;
}

export default function Screen({ className }: Screen) {
  return (
    <svg
      fill="#f0f0f0f0"
      width="24px"
      height="24px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#f0f0f0f0"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M30 2.994h-28c-1.099 0-2 0.9-2 2v17.006c0 1.099 0.9 1.999 2 1.999h13v3.006h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1h12c0.552 0 1-0.448 1-1s-0.448-1-1-1h-5v-3.006h13c1.099 0 2-0.9 2-1.999v-17.006c0-1.1-0.901-2-2-2zM30 22h-28v-17.006h28v17.006z"></path>
      </g>
    </svg>
  );
}
