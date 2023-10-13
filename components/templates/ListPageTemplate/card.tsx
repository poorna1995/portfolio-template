import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import React from "react";
import importedImage from "@/public/assets/whitepapers/ai-and-compute.png";
import { useRouter } from "next/navigation";

export interface ProductCardProps {
  count: number;
  title: string;
  description: string;
  link: string;
  website: string;
  image?: StaticImageData | string;
  backgroundColor: string;
  countTextColor: string;
  imageStyles?: {};
}

export default function ProductCard({
  data,
  pageType,
}: {
  data: ProductCardProps;
  pageType: string;
}) {
  const {
    count,
    title,
    description,
    link,
    website,
    image,
    backgroundColor,
    countTextColor,
    imageStyles,
  } = data;

  const router = useRouter();
  const handleViewDetail = () => {
    router.push(`/${pageType}/${link}`);
  };

  return (
    <div className="flex flex-1 items-center max-w-[1440px] mx-auto">
      {/* text column */}
      <div className="flex-1 ">
        <div className="px-12">
          <h3 className="text-5xl">
            {/* <span
              className="text-5xl me-2"
              style={{
                color: countTextColor,
              }}
            >
              {count}
            </span> */}
            {title || "MultiChannel E-Commerce"}
          </h3>
          <p className="text-3xl mt-8">
            {description ||
              `Centralize and Streamline Your Multi-Channel Business`}
          </p>
          <Button
            className="mt-8 color-#3F69FE "
            onClick={() => handleViewDetail()}
          >
            View Detail
          </Button>
        </div>
      </div>
      {/* image column */}
      <div
        className={`flex-1 py-24 `}
        style={{
          background: backgroundColor,
        }}
      >
        <Image
          src={image || importedImage}
          width={600}
          height={600}
          alt="placeholder"
          className="ml-24 max-h-[800px] object-fit"
          style={{ ...imageStyles }}
        />
      </div>
    </div>
  );
}
