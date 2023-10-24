"use client";

import { Button } from "@/components/ui/button";
import React from "react";

interface IntroductionProps {
  linkForWhitepaperDownload?: string;
  buttonTitle?: string;
  title?: string;
  content?: Array<{
    paragraph?: string;
    list: {
      type: string;
      data: Array<{ title: string; description?: string }>;
    };
  }>;
}

export default function IntroductionComponent({
  title,
  content,
  linkForWhitepaperDownload,
  buttonTitle,
}: IntroductionProps) {
  const handleDownloadWhitepaper = () => {
    window.open(linkForWhitepaperDownload || "", "_blank");
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <h1 className="mt-12 text-4xl font-display">{title}</h1>

      {content?.map((item) => {
        return (
          <div key={item.paragraph}>
            {" "}
            <p
              key={item.paragraph}
              className="text-[18px] leading-8 mt-4 font-default"
            >
              {item.paragraph}
            </p>
            {item.list.type === "ordered" && (
              <ol className="list-decimal pt-4 text-[18px] leading-9 list-inside font-default">
                {item.list.data.map((listItem) => {
                  return (
                    <li className="list-item" key={listItem.title}>
                      {listItem.title}
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
        );
      })}
      <Button
        className="mt-8 px-6  mb-16 text-[18px]"
        onClick={handleDownloadWhitepaper}
      >
        {buttonTitle || "Download Whitepaper"}
      </Button>
    </div>
  );
}
