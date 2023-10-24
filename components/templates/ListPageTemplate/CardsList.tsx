"use client";

import React, { useRef } from "react";
import ProductCard, { ProductCardProps } from "./card";
import { ListProductCardProps } from "@/constants/pages/products";
import Link from "next/link";

export default function CardsList({
  data,
  pageType,
}: {
  data: ListProductCardProps[];
  pageType: string;
}) {
  function scrollToSection(sectionId: any) {
    const section = document.getElementById(sectionId);
    if (section) {
      const start = window.pageYOffset;
      const end = section.getBoundingClientRect().top + window.pageYOffset;
      const duration = 500;

      const scrollTop = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + (end - start) * progress);

        if (progress < 1) {
          requestAnimationFrame(scrollTop);
        }
      };

      const startTime = performance.now();

      requestAnimationFrame(scrollTop);
    }
  }

  return (
    <div className="py-8">
      <div className="sticky top-0 z-50 flex items-center justify-between max-w-full mx-auto my-8 bg-white">
        <div className="max-w-[1440px] mx-auto flex">
          {Array.isArray(data) &&
            data.map((item) => {
              return (
                <Link
                  href=""
                  onClick={() => scrollToSection(item.title)}
                  key={item.title}
                  className="py-3 px-8 text-[18px] rounded-lg text-black border border-[rgba(63, 105, 254, 0.80) ] m-4 font-default hover:bg-[#ECF0FF] hover:text-[#3F69FE] focus:bg-accent focus:text-accent-foreground cursor-pointer"
                >
                  {item.linkTitle}{" "}
                </Link>
              );
            })}
        </div>
      </div>
      <div>
        {Array.isArray(data) &&
          data.map((item) => {
            return (
              <div id={item.title} key={item.title}>
                <ProductCard key={item.title} data={item} pageType={pageType} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
