"use client";

import Image, { StaticImageData } from "next/image";
import React, { Dispatch, LegacyRef, SetStateAction, useState } from "react";
import Slider from "react-slick";
import ImageSlider from "./ImageSlider";

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
      <div className="w-full max-w-full height-[600px]">
        <ImageSlider data={data?.image} />
      </div>
    </div>
  );
}
