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
            <iframe
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

        {/* <ReactPlayer
            height={600}
            width={600}
            // width="530px"
            // height="300px"
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            light="/static/normal-sarong-0007.jpg"
          /> */}
      </div>
    </div>
  );
}
