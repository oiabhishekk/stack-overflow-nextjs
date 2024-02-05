import Image from "next/image";
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
  return (
    <div className="flex-center flex-wrap gap-1 ">
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain  ${href ? "rounded-full" : ""}`}
      />
    </div>
  );
};

export default Metric;
