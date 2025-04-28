import React from "react";
import Spinner from "./_components/common/spinner";
export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-7xl mx-auto">
      <div className="mt-[72px]">
        <Spinner />
      </div>
    </main>
  );
}
