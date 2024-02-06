import QuestionCard from "@/components/shared/card/QuestionCard";
import HomeFilters from "@/components/shared/home/HomeFilters";
import NoResult from "@/components/shared/noResult/NoResult";
import Filters from "@/components/shared/search/Filter";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Effective Python Coding Practices",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "best-practices" },
    ],
    author: {
      _id: "1",
      name: "Jane .Smith",
      picture: "/assets/icons/avatar.svg",
    },
    upvotes: 1500,
    views: 1200,
    answers: [],
    createdAt: "2024-02-05T09:30:00.000Z",
  },
  {
    _id: "2",
    title: "Optimizing SQL Queries for Performance",
    tags: [
      { _id: "3", name: "sql" },
      { _id: "4", name: "performance" },
    ],
    author: {
      _id: "2",
      name: "John .Doe",
      picture: "/assets/icons/avatar.svg",
    },
    upvotes: 20000000,
    views: 1500215,
    answers: [],
    createdAt: "2022-11-15T14:45:00.000Z",
  },
  {
    _id: "3",
    title: "Pythonic Ways to Handle Database Connections",
    tags: [
      { _id: "1", name: "python" },
      { _id: "5", name: "database" },
    ],
    author: {
      _id: "3",
      name: "Alice .Anderson",
      picture: "/assets/icons/avatar.svg",
    },
    upvotes: 121526,
    views: 1110,
    answers: [],
    createdAt: "2023-01-02T11:20:00.000Z",
  },
  // Add more data as needed
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">ALL Questions</h1>
        <Link className="flex justify-end max-sm:w-full" href={"/ask-question"}>
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route={"/"}
          iconPosition={"left"}
          imgSrc="/assets/icons/sarch.svg"
          placeholder="Search Question..."
          otherClasses={"flex-1"}
        />
        <Filters
          filters={HomePageFilters}
          otherClasses={"min-h-[56px] sm:min-w-[170px]"}
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div>
        {questions.length >= 1 ? (
          questions.map((question) => {
            return (
              <QuestionCard
                key={question._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            );
          })
        ) : (
          <NoResult
            title="There is no quesiton to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
