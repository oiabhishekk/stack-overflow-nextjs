import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const GlobalSearch = () => {
  return <div
  className="relative w-full max-w-[600px] max-lg:hidden"
  
>
  <div className="background-light800_darkgradient relative flex min-h-[50px] grow items-center gap-1 rounded-xl px-4">
    <Image
      src="/assets/icons/search.svg"
      alt="search"
      height={24}
      width={24}
      className="cursor-pointer"
    />
    <Input
      type="text"
      placeholder="Search globally"
      className="paragraph-regular text-dark400_light700 no-focus placeholder border-none bg-transparent shadow-none outline-none"
    />
  </div>
  
</div>
};

export default GlobalSearch;
