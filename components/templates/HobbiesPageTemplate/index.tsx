"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-menubar";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import HobbiesImage1 from "@/public/assets/hobbies/hobbies-image-1.jpg";
import HobbiesImage2 from "@/public/assets/hobbies/hobbies-image-2.jpg";
import HobbiesImage3 from "@/public/assets/hobbies/hobbies-image-3.jpg";
import HobbiesImage4 from "@/public/assets/hobbies/hobbies-image-4.jpg";
import HobbiesImage5 from "@/public/assets/hobbies/hobbies-image-5.jpg";
import HobbiesImage6 from "@/public/assets/hobbies/hobbies-image-6.jpg";
import HobbiesImage7 from "@/public/assets/hobbies/hobbies-image-7.jpg";
import HobbiesImage8 from "@/public/assets/hobbies/hobbies-image-8.jpg";
import HobbiesImage9 from "@/public/assets/hobbies/hobbies-image-9.jpg";
import HobbiesImage10 from "@/public/assets/hobbies/hobbies-image-10.jpg";
import HobbiesImage11 from "@/public/assets/hobbies/hobbies-image-11.jpg";
import HobbiesImage12 from "@/public/assets/hobbies/hobbies-image-12.jpg";
import HobbiesImage13 from "@/public/assets/hobbies/hobbies-image-13.jpg";
import HobbiesImage14 from "@/public/assets/hobbies/hobbies-image-14.jpg";
import HobbiesImage15 from "@/public/assets/hobbies/hobbies-image-15.jpg";

const SHEET_SIDES = ["bottom"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export default function HobbiesPageTemplate() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="">
      <h1 className="my-4 text-2xl font-medium">
        &quot;Art is more than just a<br /> image. It&apos;s storytelling&quot;
      </h1>
      <div className="grid grid-cols-3 gap-5 pb-5">
        {data.map((item, index) => {
          return <ImageCardData data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

const ImageCardData = ({ data }: { data: ImageCardDataProps }) => {
  const { HobbieImages } = data;
  return (
    <>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Image
              src={HobbieImages}
              alt={"logo"}
              className=" cursor-pointer max-h-[500px] max-w-[400px]"
            />
          </SheetTrigger>
          <SheetContent
            side={side}
            className="flex mx-auto h-[500px] rounded-2xl"
          >
            {/* <SheetHeader>
            </SheetHeader> */}
            <div className="flex items-center gap-5 mx-auto">
              <Image
                src={HobbieImages}
                alt={"logo"}
                className="pb-2 cursor-pointer max-h-[400px] max-w-[300px]"
              />
              <div>
                {" "}
                <h1 className="mb-2 text-2xl font-medium text-l">
                  {data.imageHeader}
                </h1>
                <p className="max-w-[400px] text-base	font-normal">
                  {data.imageDescription}
                </p>
              </div>
            </div>
            {/* <SheetFooter>
            </SheetFooter> */}
          </SheetContent>
        </Sheet>
      ))}
    </>
  );
};

interface ImageCardDataProps {
  id?: number | string;
  HobbieImages: string | StaticImageData;
  imageHeader?: string;
  imageDescription?: string;
}

const data: ImageCardDataProps[] = [
  {
    id: 1,
    HobbieImages: HobbiesImage1,
    imageHeader: "Wildness and freedom",
    imageDescription:
      "The image of a wolf in the mountains can represent the idea of wildness and freedom, as wolves are often seen as symbols of independence and strength",
  },
  {
    id: 2,
    HobbieImages: HobbiesImage2,
    imageHeader: "Hope in life and growth",
    imageDescription:
      "The painting that depicts hope in life and growth can feature various symbols that convey a sense of new beginnings, progress, and renewal. Together, these represent the one of positivity, vitality, and the possibility of transformation.",
  },
  {
    id: 3,
    HobbieImages: HobbiesImage3,
    imageHeader: "Qualities of enlightenment and teachings",
    imageDescription:
      "Buddha's painting is a system of visual elements that represent the teachings, wisdom, and qualities. together, these elements create a balanced and harmonious image of the Buddha, inspiring spiritual growth and enlightenment.",
  },
  {
    id: 4,
    HobbieImages: HobbiesImage4,
    imageHeader: "Emotional Purification through the Universe",
    imageDescription:
      "Human represents the compassion, and kindness that is being offered to another person or the universe as a whole. The painting has fascinated me that the universe helps wash away negative thoughts and emotions, Overall, the symbolism of a hand in the rain can convey a sense of hope, and renewal.",
  },
  // {
  //   id: 5,
  //   HobbieImages: HobbiesImage5,
  // imageHeader: "Wildness and freedom",
  //   imageDescription:
  //     "The image of a wolf in the mountains can represent the idea of wildness and freedom, as wolves are often seen as symbols of independence and strength",
  // },
  // {
  //   id: 6,
  //   HobbieImages: HobbiesImage6,
  // imageHeader: "Wildness and freedom",
  //   imageDescription:
  //     "The image of a wolf in the mountains can represent the idea of wildness and freedom, as wolves are often seen as symbols of independence and strength",
  // },
  // {
  //   id: 7,
  //   HobbieImages: HobbiesImage7,
  // imageHeader: "Wildness and freedom",
  //   imageDescription:
  //     "The image of a wolf in the mountains can represent the idea of wildness and freedom, as wolves are often seen as symbols of independence and strength",
  // },
  {
    id: 9,
    HobbieImages: HobbiesImage9,
    imageHeader: "Power and Strength",
    imageDescription:
      "Wolves are often seen as powerful and strong animals, capable of taking down large prey and surviving in harsh environments. As a result,wolf paintings can symbolize strength and power, representing the idea of resilience and the ability to overcome obstacles.",
  },
  {
    id: 10,
    HobbieImages: HobbiesImage10,
    imageHeader: "My Spiritual Significance",
    imageDescription:
      "I am born and raised in one of the most spiritual places in India. In most of the Indian cultures, mountains are believed to have spiritual significance, representing the power of the gods, the sacredness of nature, or the importance of balance and harmony. Mountain with designs can thus symbolize the importance of connecting with the nature, culture and embracing the spiritual side of life.",
  },
  {
    id: 11,
    HobbieImages: HobbiesImage11,
    imageHeader: "New beginnings and hope",
    imageDescription:
      "The aurora is often associated with new beginnings, as it marks the start of a new day. When combined with flowers, it can represent hope and optimism for the future.",
  },
  {
    id: 8,
    HobbieImages: HobbiesImage8,
    imageHeader: "Transformation and growth",
    imageDescription:
      "Trees undergo a constant process of transformation and growth, shedding leaves and growing new ones. Painting a woman's face tree branches could be seen as a way to represent this process of transformation and growth, emphasizing the idea of change and renewal.",
  },
  {
    id: 12,
    HobbieImages: HobbiesImage12,
    imageHeader: "The Stillness of Winter",
    imageDescription:
      "The presence of snow can symbolize the stillness and purity of winter. The soft white blanket of snow covering the ground can create a sense of calmness and quietness.",
  },
  {
    id: 13,
    HobbieImages: HobbiesImage13,
    imageHeader: "The Light Within",
    imageDescription:
      "The painting is seen as a metaphor for the spiritual or emotional journey of self-discovery and self-awareness, in which an individual learns to tap into their own inner light and use it to guide them through life's challenges. It encourages to look within for guidance, inspiration, and strength, and to cultivate my own inner light as a source of positivity and hope.",
  },
  {
    id: 14,
    HobbieImages: HobbiesImage14,
    imageHeader: "Power and Strength",
    imageDescription:
      "Wolves are often seen as powerful and strong animals, capable of taking down large prey and surviving in harsh environments. As a result,wolf paintings can symbolize strength and power, representing the idea of resilience and the ability to overcome obstacles.",
  },
  {
    id: 15,
    HobbieImages: HobbiesImage15,
    imageHeader: "Connection with nature",
    imageDescription:
      "nature represents growth, strength, and resilience. Using nature to paint on a women’s face could suggest a desire to connect with the natural world and highlight the beauty and vitality of nature and women.",
  },
];
