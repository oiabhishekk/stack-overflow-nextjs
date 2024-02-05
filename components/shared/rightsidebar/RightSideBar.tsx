import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";
const hotQuestions = [
  { id: "1", title: "Sarara rarra haha raha nanan bla qlaio der lorem5" },
  { id: "2", title: "Sarara rarra haha raha nanan bla qlaio der lorem5" },
  { id: "3", title: "Sarara rarra haha raha nanan bla qlaio der lorem5" },
  { id: "4", title: "Sarara rarra haha raha nanan bla qlaio der lorem5" },
  { id: "5", title: "Sarara rarra haha raha nanan bla qlaio der lorem5" },
];
const popularTags = [
  { id: "1", totalQuestions: 2, name: "Java" },
  { id: "2", totalQuestions: 4, name: "JavaScript" },
  { id: "3", totalQuestions: 6, name: "react" },
  { id: "4", totalQuestions: 2, name: "Animation" },
  { id: "5", totalQuestions: 10, name: "OpenSource" },
];

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky  right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto  p-6 pt-28 shadow-light-300 dark:shadow-none max-xl:hidden ">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => {
            return (
              <Link
                className="flex cursor-pointer items-center justify-between gap-7"
                href={`questions/${question.id}`}
                key={question.id}
              >
                <p className="body-medium text-dark500_light700">
                  {question.title}
                </p>
                <Image
                  className="invert-colors"
                  alt="ArrowPng"
                  src={"assets/icons/chevron-right.svg"}
                  width={20}
                  height={20}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-12">
        {popularTags.map((tag) => {
          return (
            <RenderTag
              totalQuestions={tag.totalQuestions}
              _id={tag.id}
              key={tag.id}
              name={tag.name}
              showCount={true}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RightSideBar;
