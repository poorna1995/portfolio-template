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
  buttonTitle?: string;
  imageStyles?: {};
  detailPageVideo?: string;
  linkForWhitepaperDownload?: string;
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
    detailPageVideo,
    linkForWhitepaperDownload,
  } = data;

  const router = useRouter();
  const handleViewDetail = () => {
    router.push(`/${pageType}/${link}`);
  };

  return (
    <div className="flex flex-1 items-center max-w-[1700px] mx-auto">
      {/* text column */}
      <div className="items-center justify-center flex-1">
        <div className="flex px-1">
          <h1
            className="px-10 mr-8 text-7xl font-display"
            style={{
              color: countTextColor,
            }}
          >
            {count}
          </h1>
          <div>
            <h3 className="text-6xl font-display">
              {title || "MultiChannel E-Commerce"}
            </h3>
            <p className="mt-4 mr-4 text-2xl font-default">
              {description ||
                `Centralize and Streamline Your Multi-Channel Business`}
            </p>
            <Button
              className="mt-6 px-8 text-[18px] color-#3F69FE "
              onClick={() => handleViewDetail()}
            >
              View Detail
            </Button>
          </div>
        </div>
      </div>
      {/* image column */}
      {/* <div
        className={`flex-1 py-36 `}
        style={{
          background: backgroundColor,
        }}
      >
        <Image
          src={image || importedImage}
          width={700}
          height={700}
          alt="placeholder"
          className="ml-24 max-h-[900px] object-fit"
          style={{ ...imageStyles }}
        />
      </div> */}
      <div
        className={`flex-1 py-36 `}
        style={{
          background: backgroundColor,
        }}
      >
        {detailPageVideo ? (
          <iframe
            className="ml-5 max-h-[900px] object-fit"
            src={
              detailPageVideo ||
              "https://drive.google.com/file/d/1--452_FDub6_nfaRpUc_jFpmFoyuJsAZ/preview"
            }
            height={600}
            width={800}
            allow="autoplay"
          ></iframe>
        ) : (
          <Image
            src={image || importedImage}
            alt="placeholder"
            height={600}
            width={600}
            className="w-full"
            style={{
              ...imageStyles,
            }}
          />
        )}
      </div>
    </div>
  );
}
