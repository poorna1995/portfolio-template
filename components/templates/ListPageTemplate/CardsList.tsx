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
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <div className="py-8">
      <div className="max-w-[1200px] mx-auto my-8 flex justify-between items-center">
        {Array.isArray(data) &&
          data.map((item) => {
            return (
              <Link
                href=""
                onClick={() => scrollToSection(item.title)}
                key={item.title}
                className="py-3 px-8 text-[18px] rounded-lg text-black border border-[rgba(63, 105, 254, 0.80) ] mr-4 font-default hover:bg-[#ECF0FF] hover:text-[#3F69FE] focus:bg-accent focus:text-accent-foreground cursor-pointer"
              >
                {item.linkTitle}{" "}
              </Link>
            );
          })}
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
      <Link href="#first-section">My first section</Link>
      <Link href="#second-section">My second section</Link>

      <div id="first-section">SECTION 1</div>
      <main id="second-section">SECTION 2</main>
    </div>
  );
}
