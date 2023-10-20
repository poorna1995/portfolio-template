"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function OtherItemsCard({
  data,
  pageType,
}: {
  data: { title: string; link: string; countTextColor: string; count: number };
  pageType: string;
}) {
  const router = useRouter();
  const handleViewDetail = () => {
    router.push(`/${pageType}/${data.link}`);
  };
  return (
    <div
      className="py-10 px-8 border border-[rgba(0, 0, 0, 0.40)] rounded-md"
      style={{
        borderTop: `6px solid ${data.countTextColor}`,
      }}
    >
      <h1 className="mb-12 text-3xl font-medium font-display">
        <span>{data.count}. </span>
        {data.title}
      </h1>
      <Button
        className="px-6 text-[18px] bg-[#ECF0FF] text-[#3F69FE] duration-600 font-default"
        onClick={() => handleViewDetail()}
      >
        View Detail
      </Button>
    </div>
  );
}
