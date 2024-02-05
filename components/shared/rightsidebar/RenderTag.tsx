import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

type props = {
  _id: number | string;
  name: string;
  showCount?: boolean;
  totalQuestions?: number;
};

const RenderTag = ({ totalQuestions, _id, name, showCount }: props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between py-1">
      <Badge className="subtle-medium background-light800_dark300 text-dark400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700 ">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default RenderTag;
