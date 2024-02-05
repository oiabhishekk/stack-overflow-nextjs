"use client";
import { HomePageFilters } from "@/constants/filter";

import React from "react";
import { Button } from "@/components/ui/button";

const HomeFilters = () => {
  const active = "unanswered";

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((tag) => {
        return (
          <Button
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
              active === tag.value
                ? "bg-primary-100 text-primary-500"
                : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
            } `}
            key={tag.value}
          >
            {tag.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilters;
