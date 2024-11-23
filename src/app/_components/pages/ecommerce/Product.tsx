import { IProduct } from "src/app/_lib/interfaces/product";
import DynamicIcon from "./DynamicIcon";

interface ProductProps {
  product: IProduct;
}
export default function Product({ product }: ProductProps) {
  const { iconName } = product;
  return (
    <div className="flex justify-center items-center w-[80%] xs:w-[300px] h-[380px] bg-[#000000] rounded-[10px]">
      <DynamicIcon iconName={iconName} />
    </div>
  );
}
