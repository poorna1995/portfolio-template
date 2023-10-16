import Image from "next/image";
import React from "react";
import universityLogo from "@/public/assets/aboutme/university-logo.png";
import codeAcademyLogo from "@/public/assets/aboutme/code-academy-logo.png";

export default function Education() {
  return (
    <div className="mt-8 border-t border-black max-w-4xl mx-auto">
      <h2 className="my-4 text-2xl font-medium font-display">Education</h2>
      {data.map((item, index) => (
        <EducationItem key={index} data={item} />
      ))}
    </div>
  );
}
const EducationItem = ({
  data,
}: {
  data: {
    institution: string;
    institutionLogo: String;
    degree: string;
    timePeriod: string;
    description: string;
  };
}) => {
  const { institution, institutionLogo, degree, timePeriod, description } =
    data;
  return (
    <div className="grid grid-cols-12 my-4">
      <div className="col-span-1">
        <Image src={institutionLogo} alt="logo" width={40} height={40} />
      </div>
      <div className="col-span-11">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium font-display">{institution}</h3>{" "}
          <span
            className="text-base text-lg font-medium"
            style={{
              color: "#535353",
            }}
          >
            {timePeriod}
          </span>
        </div>
        <h4
          className="text-base font-medium mb-2 mt-1"
          style={{
            color: "#535353",
          }}
        >
          {degree}
        </h4>
        <p
          className="text-lg font-normal"
          style={{
            color: "#535353",
          }}
        >
          <span className="font-bold text-lg">Courses:</span> {description}
        </p>
      </div>
    </div>
  );
};

const data = [
  {
    institution: "Sri Venkateswara University",
    institutionLogo: universityLogo,
    degree: "B.tech Major in Chemical Engineering ",
    timePeriod: "2013-2017",
    description:
      "Courses: Data Structures, C, C++, Algorithm, Calculus, Python Programming, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision",
  },
  {
    institution: "Code Academy",
    institutionLogo: codeAcademyLogo,
    degree: "Advance Software Immersive Program",
    timePeriod: "2013-2017",
    description:
      "Data Structures, C, C++, Algorithm, Calculus, Python Programming, Machine Learning, Deep Learning, NaturalLanguage Processing, Computer Vision",
  },
];
