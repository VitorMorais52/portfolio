import { createContext, useContext, useState, useMemo } from "react";
import { IProducts } from "../interfaces/product";

interface FilterContextType {
  types: string[];
  name: string;
  setType: (newType: string) => void;
  setName: (newName: string) => void;
  filteredProducts: IProducts;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({
  children,
  products,
}: {
  children: React.ReactNode;
  products: IProducts;
}) => {
  const [types, setTypesState] = useState<string[]>([]);
  const [name, setName] = useState<string>("");

  const setType = (newType: string) => {
    setTypesState((prev) =>
      prev.includes(newType)
        ? prev.filter((t) => t !== newType)
        : [...prev, newType]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesType =
        types.length === 0 || types.some((t) => product.types.includes(t));
      const matchesName =
        name === "" || product.title.toLowerCase().includes(name.toLowerCase());
      return matchesType && matchesName;
    });
  }, [products, types, name]);

  return (
    <FilterContext.Provider
      value={{ types, name, setType, setName, filteredProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};
