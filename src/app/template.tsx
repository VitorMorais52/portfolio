"use client";

import { usePathname } from "next/navigation";

import Header from "./_components/common/header";
import Footer from "./_components/common/footer";

const pagesName = ["home", "blog", "institutional", "ecommerce", "resume"];

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="overflow-x-hidden mb-8">
      <Header currentPage={pathname} pagesName={pagesName} />
      {children}
      <Footer pagesName={pagesName} />
    </div>
  );
}
