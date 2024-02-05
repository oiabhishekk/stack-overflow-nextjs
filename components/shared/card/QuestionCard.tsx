import Link from "next/link";
import React from "react";
import RenderTag from "../rightsidebar/RenderTag";
import Metric from "../search/Metric";
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
    <div className="card-wrapper mt-1 rounded-[10px] p-9 sm:px-11 ">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            date
            {/* {getTimeStamp(createdAt)} */}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>

        {/* //Todo: if sign-in edit delete actions */}
        {/* <SignedIn>
          {showActionButtons && (
            <EditDeleteAction type="Question" itemId={JSON.stringify(_id)} />
          )}
        </SignedIn> */}
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        {/* <Metric
          href={`/profile/${author.clerkId}`}
          imgUrl={author.picture}
          alt="user"
          value={author.name}
          isAuthor
          title={`- asked ${(createdAt)}`}
          textStyles="body-medium text-dark400_light700"
        /> */}

        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            href={`/question/${_id}`}
            imgUrl="/assets/icons/like.svg"
            alt="upvotes"
            value={upvotes}
            title="Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            href={`/question/${_id}`}
            imgUrl="/assets/icons/message.svg"
            alt="message"
            value={answers.length}
            title="Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            href={`/question/${_id}`}
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={views}
            title="Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
