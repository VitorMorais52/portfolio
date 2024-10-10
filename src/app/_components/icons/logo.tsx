interface Logo {
  className?: string;
}
export default function Logo({ className }: Logo) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ""}
    >
      <path
        d="M11.6113 18.7286C17.3084 32.3084 17.632 33.9544 15.7588 47.4193C22.1966 34.296 21.6854 26.739 19.9063 12.5806C25.5426 23.7875 28.2462 30.0818 30.2749 41.2713C32.3037 30.0818 35.0072 23.7875 40.6436 12.5806C38.8645 26.739 38.3532 34.296 44.7911 47.4193C42.9179 33.9544 43.2414 32.3084 48.9385 18.7286"
        stroke="white"
        strokeWidth="2.14286"
      />
      <path
        d="M14.1016 18.8019C19.2549 21.9413 20.395 21.9045 30.2767 18.8019M46.4518 18.8019C38.9176 21.7774 37.8055 22.1161 30.2767 18.8019M30.2767 18.8019V47.4194"
        stroke="white"
        strokeWidth="2.14286"
      />
      <circle cx="30" cy="30" r="29.25" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}
