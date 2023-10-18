import React from "react";

export interface KeyLearningRecognitionProps {
  title?: string;
  content?: Array<{
    paragraph?: string;
    list: {
      type?: string;
      data?: Array<{ title?: string; description?: string }>;
    };
  }>;
}

export default function KeyLearnings({
  title,
  content,
}: KeyLearningRecognitionProps) {
  return (
    <div className="max-w-[1600px] mx-auto">
      {content?.map((item, index) => {
        return (
          <div key={index} className="grid items-center grid-cols-2 gap-8 my-32">
            <div>
              <h1 className="text-5xl  font-display font-medium">Key Learnings</h1>
              <p
                key={item.paragraph}
                className="text-[21px] leading-8 mt-4 pr-14 font-default"
              >
                {item.paragraph}
              </p>
            </div>
            <div>
              {item.list?.data?.map((listItem, index) => {
                return (
                  <div key={index} className="my-2">
                    <div className="flex items-start gap-3 p-2">
                      <div className="mt-1">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="12" fill="#3F69FE" />
                          <path
                            d="M7.10059 13.0652L10.0834 16.0481L16.0492 9.65625"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h5 className="mb-4 text-[21px] font-normal">
                          {listItem.title}
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
