"use client";
import { IProduct } from "src/app/_lib/interfaces/product";
import DynamicIcon from "./DynamicIcon";
import { useRef, useState } from "react";
import { useIsMobile } from "src/app/_lib/hooks/useIsMobile";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const { iconName, title } = product;

  const refCover = useRef<null | HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = (): void => {
    setDetailsVisible((prev) => !prev);
  };

  const handleInteraction = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (isMobile || event.type === "click" || event.type === "keydown") {
      if (
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key !== "Enter" &&
        (event as React.KeyboardEvent).key !== " "
      ) {
        return;
      }
      toggleDetails();
    }
  };

  return (
    <div
      id="product-container"
      role="button"
      tabIndex={0}
      aria-expanded={detailsVisible}
      aria-controls="product-details"
      onMouseOver={!isMobile ? toggleDetails : undefined}
      onMouseOut={!isMobile ? toggleDetails : undefined}
      onClick={handleInteraction}
      onKeyDown={handleInteraction}
      className="relative"
    >
      <div
        id="product-cover"
        ref={refCover}
        className={`${
          detailsVisible ? "opacity-0" : "opacity-100"
        } transition-opacity duration-[300ms] relative z-10 flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]`}
      >
        <DynamicIcon iconName={iconName} />
      </div>

      <div
        id="product-details"
        className="absolute top-0 left-0 w-full h-full p-4 bg-[#000000]"
      >
        <h2>{title}</h2>
        <p>description</p>
      </div>
    </div>
  );
}
