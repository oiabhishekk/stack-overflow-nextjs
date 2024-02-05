"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
interface customInputClass {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;

  otherClasses: string;
}

const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: customInputClass) => {
  return (
    <div className="relative w-full max-w-[600px] ">
      <div
        className={`background-light800_darkgradient relative flex min-h-[56px] grow ${
          iconPosition === "right" && "flex-row-reverse"
        } items-center gap-4 rounded-[10px] px-4 ${otherClasses} `}
      >
        {
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            height={24}
            width={24}
            className="cursor-pointer"
          />
        }
        <Input
          type="text"
          placeholder={placeholder}
          value=""
          onChange={() => {}}
          className="paragraph-regular text-dark400_light700 no-focus placeholder border-none bg-transparent shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default LocalSearchBar;
