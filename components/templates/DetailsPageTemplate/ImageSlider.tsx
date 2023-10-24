"use client";

import Image, { StaticImageData } from "next/image";
import React, { Ref, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({
  data,
}: {
  data?: Array<{ src: string | StaticImageData | undefined; alt?: string }>;
}) {
  const [index, setIndex] = useState<number>(0);
  const [sliderRef, setSliderRef] = useState<Ref<Slider> | null>(null);
  const beforeChange = (prev: number, next: number) => {
    setIndex(next);
  };

  if (Array.isArray(data) && data.length > 0)
    return (
      <Slider
        ref={sliderRef}
        arrows={true}
        dots={false}
        infinite={true}
        slidesToScroll={1}
        slidesToShow={1}
      >
        {data?.map((item) => {
          return (
            <Image
              src={(item.src as string) || (item.src as StaticImageData)}
              alt={"product image"}
              key={item.src as string}
              width={450}
              height={450}
              className="hero-image-slider"
            />
          );
        })}
      </Slider>
    );
}
