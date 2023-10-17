import Image, { StaticImageData } from "next/image";
import React from "react";
import HobbiesImage1 from "@/public/assets/hobbies/hobbies-image-1.png";
import HobbiesImage2 from "@/public/assets/hobbies/hobbies-image-2.png";
import HobbiesImage3 from "@/public/assets/hobbies/hobbies-image-3.png";
import HobbiesImage4 from "@/public/assets/hobbies/hobbies-image-4.png";
import HobbiesImage5 from "@/public/assets/hobbies/hobbies-image-5.png";
import HobbiesImage6 from "@/public/assets/hobbies/hobbies-image-6.png";

export default function HobbiesPageTemplate() {
  return (
    <div className="">
      <h1 className="my-4 text-2xl font-medium">
        &quot;Art is more than just a<br /> image. It&apos;s storytelling&quot;
      </h1>
      <div className="grid grid-cols-3 gap-1">
        {data.map((item, index) => {
          return <ImageCardData data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

const ImageCardData = ({ data }: { data: ImageCardDataProps }) => {
  const { HobbieImages } = data;
  return <Image src={HobbieImages} alt={"logo"} className="pb-2" />;
};

interface ImageCardDataProps {
  HobbieImages: string | StaticImageData;
}

const data: ImageCardDataProps[] = [
  {
    HobbieImages: HobbiesImage1,
  },
  {
    HobbieImages: HobbiesImage2,
  },
  {
    HobbieImages: HobbiesImage3,
  },
  {
    HobbieImages: HobbiesImage4,
  },
  {
    HobbieImages: HobbiesImage5,
  },
  {
    HobbieImages: HobbiesImage6,
  },
];
