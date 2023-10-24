"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import bluecomLogo from "@/public/assets/aboutme/bluecom-logo.png";
import HivePathlogo from "@/public/assets/aboutme/hivepath-logo.png";
import CalpadLogo from "@/public/assets/aboutme/calpad-logo.png";
import ZelloLogo from "@/public/assets/aboutme/zello-logo.png";
import NvipaniTechnology from "@/public/assets/aboutme/nvipani-technology-logo.png";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function ExperienceComponent({
  pageType,
}: {
  pageType: string;
}) {
  return (
    <div className="my-8 border-t border-black">
      <h2 className="my-12 text-3xl font-medium font-display">Experience</h2>
      {data.map((item, index) => {
        return <ExperienceCard data={item} key={index} pageType={pageType} />;
      })}
    </div>
  );
}

const ExperienceCard = ({
  data,
  pageType,
}: {
  data: ExperienceCardProps;
  pageType: string;
}) => {
  const {
    companyLogo,
    companyName,
    jobRole,
    location,
    timePeriod,
    description,
    areaOfContributions,
    products,
    responsibilities,
  } = data;

  const router = useRouter();

  return (
    <div className="grid grid-cols-12 my-8">
      <div className="col-span-1">
        <Image src={companyLogo} alt={"logo"} width={60} height={60} />
      </div>
      <div className="col-span-11 ml-[-40px]">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium font-display">{companyName}</h3>
          <span className="text-lg font-regular ">{timePeriod}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg mt-[4px] font-regular">{jobRole}</p>
          <p className="text-lg font-regular">{location}</p>
        </div>
        {areaOfContributions && areaOfContributions?.length > 0 && (
          <div className="my-4">
            <h4 className="text-[18px] font-medium">
              Areas of Contribution and Focus:
            </h4>
            <div className="grid grid-cols-2 gap-2 my-4">
              {areaOfContributions.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="flex items-center gap-3 text-lg font-normal leading-9"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="11" fill="#3F69FE" />
                      <path
                        d="M6.50781 11.9766L9.2421 14.7109L14.7107 8.85168"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        )}{" "}
        {products && products.length > 0 && (
          <div>
            <h4 className="mb-4 text-xl font-medium">
              Key Contributions to Live Products:
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {products.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="my-1 cursor-pointer mr-6 p-2 border-2 border-gray-300 hover:shadow-[0_15px_30px_-6px_rgba(0,0,0,0.3)] hover:transition ease-in-out duration-150 hover:border-white border-solid rounded-[5px]"
                    style={{
                      borderLeft: `5px solid #3F69F0`,
                    }}
                    onClick={() => router.push(`/products/${item.link}`)}
                   
                  >
                    <div className="flex items-center gap-3 p-3">
                      <div>
                        <Image
                          src={item.logo}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold">{item.title}</h5>
                        <p className="text-base font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {responsibilities && responsibilities.length > 0 && (
          <div className="my-4">
            {responsibilities.map((item, index) => {
              return (
                <div key={index} className="flex my-1 pb-3 ">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="my-1 mr-3"
                  >
                    <ellipse
                      cx="10.4032"
                      cy="11"
                      rx="10.4032"
                      ry="11"
                      fill="#3F69FE"
                    />
                    <path
                      d="M6.15527 11.9766L8.74121 14.7109L13.9131 8.85172"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-lg font-normal">{item}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

interface ExperienceCardProps {
  companyLogo: string | StaticImageData;
  companyName: string;
  jobRole: string;
  location: string;
  timePeriod: string;
  description?: string;
  // link?: string;
  areaOfContributions?: string[];
  products?: {
    logo: string | StaticImageData;
    title: string;
    description: string;
    link?: string;
  }[];
  responsibilities?: string[];
}

const data: ExperienceCardProps[] = [
  {
    companyLogo: HivePathlogo,
    companyName: "Hivepath",
    jobRole:
      "Lead Developer & Designer - ReactJs, GitHub,NextJS, Figma, Adobe suite ",
    location: "Bangalore, India",
    timePeriod: "2021-Present",
    description:
      "Spearheading the development of diverse end-to-end product portfolios across B2C and B2B domains.",
    areaOfContributions: [
      "Product Development Achievements",
      "Design Collaboration For a Product",
      "Innovation in Product Development",
      "Leadership Activities",
    ],
    products: [
      {
        logo: bluecomLogo,
        title: "Bluecom",
        description: "E-commerce SaaS for streamlined product life cycle",
        link: "bluecom",
      },
      {
        logo: HivePathlogo,
        title: "Hivepath",
        description: "E-commerce SaaS for streamlined product life cycle",
        link: "hivepath",
      },
      {
        logo: CalpadLogo,
        title: "Calpad",
        link: "calpad",
        description: "E-commerce SaaS for streamlined product life cycle",
      },
      {
        logo: ZelloLogo,
        title: "Zello",
        link: "zello",
        description: "E-commerce SaaS for streamlined product life cycle",
      },
      {
        logo: "",
        title: "Styler",
        link: "styler",
        description: "E-commerce SaaS for streamlined product life cycle",
      },
    ],
  },
  {
    companyLogo: NvipaniTechnology,
    companyName: "nvipani Technology ",
    jobRole: "Software Developer & Designer  ",
    location: "Bangalore, India",
    timePeriod: "Sep 2020 - Sep 2021",
    description:
      "Spearheading the development of diverse end-to-end product portfolios across B2C and B2B domains.",
    responsibilities: [
      "Conducted user research to understand the needs, behaviours, and pain points of 100+ online store retailers.",
      "Built user interfaces to provide the live shopping experience in virtual stores for both desktop and mobile customers.",
      "Conducted usability testing and gathered feedback from retailers and customers to iterate and improve design solutions.",
    ],
  },
  {
    companyLogo: NvipaniTechnology,
    companyName: "Crafter",
    jobRole: "Front-End Intern",
    location: "Bangalore, India",
    timePeriod: "May 2019 - June 2019",
    description:
      "Spearheading the development of diverse end-to-end product portfolios across B2C and B2B domains.",
    responsibilities: [
      "As the sole developer on the project, assumed full responsibility for leading the engineering strategy and making technology decisions independently, ensuring efficient and effective project execution",
      "Proactively seeking feedback and input from the executive team and reflecting in the in the product Frontend",
      "Understanding the design needs and goals for the product and proactively meeting the deadlines.",
      "Collaborated closely with the design team to understand design needs and project goals, facilitating seamless integration of design elements into the product.",
    ],
  },
];
