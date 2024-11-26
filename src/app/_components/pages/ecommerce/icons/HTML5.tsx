interface HTML5 {
  className: string;
}

export default function HTML5({ className }: HTML5) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0.900391 0.0146484L2.10168 13.4888L7.49248 14.9853L12.8982 13.4867L14.1008 0.0146484H0.900391ZM11.595 3.21226L11.5197 4.05003L11.4867 4.42154H11.4812H7.5006H7.49482H5.16282L5.31385 6.11376H7.49482H7.5006H10.8909H11.3363L11.2959 6.55749L10.9076 10.9083L10.8827 11.1872L7.5006 12.1246V12.125L7.49301 12.1271L4.10784 11.1873L3.87631 8.59257H4.6409H5.53521L5.65287 9.91052L7.4933 10.4075L7.49482 10.4071V10.407L9.33807 9.90958L9.52973 7.76628H7.5006H7.49482H3.80248L3.39634 3.21226L3.35676 2.76896H7.49485H7.5006H11.6345L11.595 3.21226Z" />
    </svg>
  );
}