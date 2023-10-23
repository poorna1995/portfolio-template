"use client";

import React from "react";
import ReactPlayer from "react-player";
import Image, { StaticImageData } from "next/image";
import importedImage from "@/public/assets/whitepapers/ai-and-compute.png";
import { Button } from "@/components/ui/button";

export default function DetailsPageHeroComponent({
  title,
  description,
  image,
  imageStyles,
  buttonTitle,
  detailPageVideo,
  linkForWhitepaperDownload,
}: {
  title?: string;
  description?: string;
  image?: StaticImageData;
  detailPageVideo?: string;
  imageStyles?: {};
  buttonTitle?: string;
  linkForWhitepaperDownload?: string;
}) {
  const handleDownloadWhitepaper = () => {
    window.open(linkForWhitepaperDownload || "", "_blank");
  };

  return (
    <div className="w-full p-24 bg-black">
      <div className="flex-1 flex items-center max-w-[1600px] mx-auto">
        {/* text */}
        <div className="flex-1">
          <h1 className="mb-8 text-6xl text-white font-display">
            {title || `AI Compute- Technical Deep Dive`}
          </h1>
          <p className="mb-8 text-3xl text-white font-default">
            {description || `Explore AI computing hardware and accelerators`}
          </p>
          <Button onClick={handleDownloadWhitepaper}>
            {buttonTitle || `Download Whitepaper`}
          </Button>
        </div>
        {/* image */}
        <div className="flex-1">
          {detailPageVideo ? (
            <ReactPlayer
              height={600}
              width={600}
              url={
                detailPageVideo ||
                "https://res.cloudinary.com/du6wh3et2/video/upload/v1697777438/video/yku9gbldy0ddxvdbis8q.mp4"
              }
              light="/static/normal-sarong-0007.jpg"
              controls={false}
              playing={true}
              loop={true}
              // autoPlay={true}
              // autoPlayAfterSrcChange={true}
              muted={true}
              playsinline={true}
              allow="autoplay"
            />
          ) : (
            <Image
              src={image || importedImage}
              alt="placeholder"
              height={600}
              width={600}
              className="ml-24 max-h-[900px] max-w-[600px] object-fit"
              style={{
                ...imageStyles,
              }}
            />
          )}
        </div>

        {/* <iframe
          src={
            detailPageVideo ||
            "https://drive.google.com/file/d/1--452_FDub6_nfaRpUc_jFpmFoyuJsAZ/preview"
          }
          height={600}
          width={800}
          // allow="autoplay"
        ></iframe> */}
      </div>
    </div>
  );
}
