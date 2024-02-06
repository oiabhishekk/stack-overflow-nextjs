import { formatLargeNumber } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type MetricType = {
  href?: string;
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  textStyles?: string;
  isAuthor?: boolean;
};

const Metric = ({
  imgUrl,
  href,
  alt,
  value,
  title,
  textStyles,
  isAuthor,
}: MetricType) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain  ${href ? "rounded-full" : ""}`}
      />
      <p className="flex items-center gap-1">
        {typeof value === "number" ? formatLargeNumber(value) : value}

        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          } `}
        >
          {title}
        </span>
      </p>
    </>
  );
  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link> 
    );
  }
  return <div>{metricContent}</div>;
};

export default Metric;
