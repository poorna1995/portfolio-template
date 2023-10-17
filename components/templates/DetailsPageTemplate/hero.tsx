import Image, { StaticImageData } from "next/image";
import React from "react";
import importedImage from "@/public/assets/whitepapers/ai-and-compute.png";
import { Button } from "@/components/ui/button";

export default function DetailsPageHeroComponent({
  title,
  description,
  image,
  imageStyles,
  buttonTitle,
}: {
  title?: string;
  description?: string;
  image?: StaticImageData;
  imageStyles?: {};
  buttonTitle?: string;
}) {
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
          <Button>{buttonTitle || `Download Whitepaper`}</Button>
        </div>
        {/* image */}
        <div className="flex-1">
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
        </div>
      </div>
    </div>
  );
}
