import Image from "next/image";
import React from "react";
import image from "@/public/home-hero.png";

export default function HomePageHeroComponent() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <Image src={image} alt="my image" width={600} height={600} />
      </div>
      <div className="col-span-8 p-24">
        <h1 className="text-5xl font-display font-medium">
          I create unique solutions that improve people&apos;s lives.
        </h1>
        <p className="mt-4 text-lg font-normal">
          My name is{" "}
          <span
            style={{
              color: "#3F69FE",
            }}
          >
            Poorna Praneesha
          </span>
          , I also go by “the most Inquisitive learner and Passionate in the
          room”
        </p>
        <p className="my-4 text-lg font-normal">
          A{" "}
          <span
            style={{
              color: "#3F69FE",
            }}
          >
            Lead Developer & Designer
          </span>{" "}
          and a creative thinker with 6+ years of industry experience in team
          building & leadership. Strongly driven towards creating value for
          business & technology stakeholders.
        </p>

        <div className="flex gap-1">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17.5" fill="#3F69FE" />
            <g clip-path="url(#clip0_1331_1269)">
              <path
                d="M23 9.49927H13C10 9.49927 8 10.9993 8 14.4993V21.4993C8 24.9993 10 26.4993 13 26.4993H23C26 26.4993 28 24.9993 28 21.4993V14.4993C28 10.9993 26 9.49927 23 9.49927ZM23.47 15.5893L20.34 18.0893C19.68 18.6193 18.84 18.8793 18 18.8793C17.16 18.8793 16.31 18.6193 15.66 18.0893L12.53 15.5893C12.21 15.3293 12.16 14.8493 12.41 14.5293C12.67 14.2093 13.14 14.1493 13.46 14.4093L16.59 16.9093C17.35 17.5193 18.64 17.5193 19.4 16.9093L22.53 14.4093C22.85 14.1493 23.33 14.1993 23.58 14.5293C23.84 14.8493 23.79 15.3293 23.47 15.5893Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1331_1269">
                <rect
                  width="23.3333"
                  height="23.3333"
                  fill="white"
                  transform="translate(5.83301 5.83325)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17.5" fill="#3F69FE" />
            <g clipPath="url(#clip0_1331_1269)">
              <path
                d="M7 8.54026C7 7.71327 7.69513 7.04199 8.55203 7.04199H26.448C27.3052 7.04199 28 7.71327 28 8.54026V26.46C28 27.2872 27.3052 27.958 26.448 27.958H8.55203C7.69521 27.958 7 27.2873 7 26.4602V8.54002V8.54026Z"
                fill="#3F69FE"
              />
              <path
                d="M13.3814 24.5458V15.1294H10.2389V24.5458H13.3817H13.3814ZM11.8108 13.8439C12.9064 13.8439 13.5885 13.1208 13.5885 12.2172C13.568 11.293 12.9064 10.5901 11.8317 10.5901C10.7561 10.5901 10.0537 11.293 10.0537 12.2171C10.0537 13.1208 10.7356 13.8438 11.7902 13.8438H11.8106L11.8108 13.8439ZM15.1208 24.5458H18.263V19.2878C18.263 19.0067 18.2835 18.7249 18.3665 18.5242C18.5936 17.9617 19.1106 17.3794 19.9789 17.3794C21.1157 17.3794 21.5707 18.2428 21.5707 19.5088V24.5458H24.7129V19.1467C24.7129 16.2545 23.1628 14.9086 21.0954 14.9086C19.4004 14.9086 18.6559 15.8522 18.2423 16.4949H18.2632V15.1297H15.1209C15.162 16.0131 15.1207 24.5461 15.1207 24.5461L15.1208 24.5458Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1331_1269">
                <rect
                  width="21"
                  height="21"
                  fill="white"
                  transform="translate(7 7)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17.5" fill="#3F69FE" />
            <g clipPath="url(#clip0_1331_1269)">
              <path
                d="M17.05 20.9493L15.2 22.7993C14.81 23.1893 14.19 23.1893 13.79 22.8093C13.68 22.6993 13.57 22.5993 13.46 22.4893C12.43 21.4493 11.5 20.3593 10.67 19.2193C9.85 18.0793 9.19 16.9393 8.71 15.8093C8.24 14.6693 8 13.5793 8 12.5393C8 11.8593 8.12 11.2093 8.36 10.6093C8.6 9.99927 8.98 9.43927 9.51 8.93927C10.15 8.30927 10.85 7.99927 11.59 7.99927C11.87 7.99927 12.15 8.05927 12.4 8.17927C12.66 8.29927 12.89 8.47927 13.07 8.73927L15.39 12.0093C15.57 12.2593 15.7 12.4893 15.79 12.7093C15.88 12.9193 15.93 13.1293 15.93 13.3193C15.93 13.5593 15.86 13.7993 15.72 14.0293C15.59 14.2593 15.4 14.4993 15.16 14.7393L14.4 15.5293C14.29 15.6393 14.24 15.7693 14.24 15.9293C14.24 16.0093 14.25 16.0793 14.27 16.1593C14.3 16.2393 14.33 16.2993 14.35 16.3593C14.53 16.6893 14.84 17.1193 15.28 17.6393C15.73 18.1593 16.21 18.6893 16.73 19.2193C16.83 19.3193 16.94 19.4193 17.04 19.5193C17.44 19.9093 17.45 20.5493 17.05 20.9493Z"
                fill="white"
              />
              <path
                d="M27.9696 24.3293C27.9696 24.6093 27.9196 24.8993 27.8196 25.1793C27.7896 25.2593 27.7596 25.3393 27.7196 25.4193C27.5496 25.7793 27.3296 26.1193 27.0396 26.4393C26.5496 26.9793 26.0096 27.3693 25.3996 27.6193C25.3896 27.6193 25.3796 27.6293 25.3696 27.6293C24.7796 27.8693 24.1396 27.9993 23.4496 27.9993C22.4296 27.9993 21.3396 27.7593 20.1896 27.2693C19.0396 26.7793 17.8896 26.1193 16.7496 25.2893C16.3596 24.9993 15.9696 24.7093 15.5996 24.3993L18.8696 21.1293C19.1496 21.3393 19.3996 21.4993 19.6096 21.6093C19.6596 21.6293 19.7196 21.6593 19.7896 21.6893C19.8696 21.7193 19.9496 21.7293 20.0396 21.7293C20.2096 21.7293 20.3396 21.6693 20.4496 21.5593L21.2096 20.8093C21.4596 20.5593 21.6996 20.3693 21.9296 20.2493C22.1596 20.1093 22.3896 20.0393 22.6396 20.0393C22.8296 20.0393 23.0296 20.0793 23.2496 20.1693C23.4696 20.2593 23.6996 20.3893 23.9496 20.5593L27.2596 22.9093C27.5196 23.0893 27.6996 23.2993 27.8096 23.5493C27.9096 23.7993 27.9696 24.0493 27.9696 24.3293Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1331_1269">
                <rect
                  width="23.3333"
                  height="23.3333"
                  fill="white"
                  transform="translate(5.83301 5.83325)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
