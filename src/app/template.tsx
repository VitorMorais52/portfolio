"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import Header from "./_components/common/header";
import Footer from "./_components/common/footer";

const pagesName = ["home", "blog", "institutional", "ecommerce", "resume"];

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentPage = useMemo(() => {
    const regex = "/([^/]+)";
    const match = pathname.match(regex);
    return match ? match[1] : "home";
  }, [pathname]);

  return (
    <div className="overflow-x-hidden mb-8">
      <Header currentPage={currentPage} pagesName={pagesName} />
      {children}
      <Footer pagesName={pagesName} />
    </div>
  );
}
