import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProductMediaProps {
  data?: {
    image?: Array<{
      src: string | StaticImageData | undefined;
      alt?: string;
    }>;
    video?: Array<{
      src: string;
      alt?: string;
    }>;
  };
}

export default function ProductMedia({ data }: ProductMediaProps) {
  return (
    <div className="max-w-[1600px] py-12 mx-auto ">
      <h1 className="my-6 text-4xl font-display">Product Media</h1>
      <div className="sticky flex gap-2 mx-auto overflow-x-scroll">
        {data?.image?.map((item) => {
          return (
            <Image
              src={(item.src as string) || (item.src as StaticImageData)}
              alt={"product image "}
              key={item.src as string}
              width={800}
              height={400}
              className="object-cover w-full"
            />
          );
        })}
      </div>
    </div>
  );
}
