import React from "react";
interface Tag {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
  picture: string;
}

interface QuestionCardProps {
  _id: string;
  title: string;
  tags: Tag[];
  author: Author;
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: string;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionCardProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700">
            {createdAt}
          </span>
        </div>
      </div>
      {title}
    </div>
  );
};

export default QuestionCard;
