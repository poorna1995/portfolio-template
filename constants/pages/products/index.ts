// how to define the type for productsPageData

import { ProductCardProps } from "@/components/templates/ListPageTemplate/card";
import bluecomData from "./bluecomData";
import hivepathData from "./hivepathData";
import zelloData from "./zelloData";
import calpadData from "./calpadData";
import bluecomCentralData from "./bluecomCentralData";
import stylerData from "./stylerData";

import bluecomImage from "@/public/assets/products/bluecom.png";

import hivepathImage from "@/public/assets/products/hivepath.png";
import zelloImage from "@/public/assets/products/zello.png";
import bluecomCentralImage from "@/public/assets/products/bluecom-central.png";
import stylerImage from "@/public/assets/products/styler.png";
import calpadImage from "@/public/assets/products/calpad.png";
import { StaticImageData } from "next/image";

export interface ListProductCardProps extends ProductCardProps {
  detailsPageData: {
    introData?: {
      title?: string;
      buttonTitle?: string;
      detailPageVideo?: string;
      linkForWhitepaperDownload?: string;
      content?: Array<{
        paragraph?: string;
        list: {
          type: string;
          data: Array<{
            title: string;
            description?: string;
          }>;
        };
      }>;
    };
    contributionData?: {
      title?: string;
      content?: Array<{
        paragraph?: string;
        list?: {
          type?: string;
          data?: Array<{
            title?: string;
            list?: {
              type?: string;
              data?: Array<{ title: string }>;
            };
          }>;
        };
      }>;
    };
    productMedia?: {
      image?: Array<{
        src: string | StaticImageData | undefined;
        alt?: string;
      }>;
      video?: Array<{
        src: string;
        alt?: string;
      }>;
    };
  };
  linkTitle: string;
  timeline?: string;
}

const productsPageData: {
  heroTitle: string;
  heroDescription: string;
  listData: Array<ListProductCardProps>;
} = {
  heroTitle: "Product Portfolio",
  heroDescription:
    "Spearheading the development of diverse end-to-end product portfolios across B2C and B2B domains.",
  listData: [
    {
      title: "Bluecom.ai",
      buttonTitle: "View Product",
      description: "E-commerce SaaS for streamlined product life cycle",
      backgroundColor: "#3F69FE",
      count: 1,
      countTextColor: "#3F69FE",
      countBackgroundColor: "#FBFBFB",
      image: bluecomImage,
      detailPageVideo:
        "https://res.cloudinary.com/du6wh3et2/video/upload/v1697805240/video/bluecom.mp4",
      linkForWhitepaperDownload: "https://bluecom.ai",
      link: "bluecom",
      website: "https://bluecom.ai",
      linkTitle: "Bluecom",
      timeline: "Dec 2022 - Present",
      detailsPageData: bluecomData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "600px",
        fitObject: "fill",
        align: "center",
      },
    },
    {
      title: "Hivepath.io",
      buttonTitle: "View Product",
      description: "Professional networking Platform.",
      backgroundColor: "#6C60BA",
      count: 2,
      countTextColor: "#6C60BA",
      countBackgroundColor: "",
      image: hivepathImage,
      detailPageVideo:
        "https://res.cloudinary.com/du6wh3et2/video/upload/v1698136131/video/hivepath.mp4",
      linkForWhitepaperDownload: "https://hivepath.io",
      link: "hivepath",
      website: "https://hivepath.io",
      linkTitle: "Hivepath",
      timeline: "July 2021 - March 2022",
      detailsPageData: hivepathData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "600px",
        fitObject: "fill",
        align: "center",
      },
    },
    {
      title: "Zello.live",
      buttonTitle: "View Product",
      description: "Andriod photo widget sharing platform",
      backgroundColor: "#739459",
      count: 3,
      countTextColor: "#739459",
      countBackgroundColor: "#FBFBFB",
      image: zelloImage,
      detailPageVideo:
        "https://res.cloudinary.com/du6wh3et2/video/upload/v1697802880/video/zello.mp4",
      linkForWhitepaperDownload: "https://zello.live",
      link: "zello",
      website: "https://zello.live",
      linkTitle: "Zello",
      timeline: "March 2022 - July 2022",
      detailsPageData: zelloData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "600px",
        fitObject: "fill",
        align: "center",
      },
    },
    {
      title: "Calpad.co",
      buttonTitle: "View Product",
      description: "A calendar booking platform for the professionals",
      backgroundColor: "#D0B160",
      count: 4,
      countTextColor: "#D0B160",
      countBackgroundColor: "",
      image: calpadImage,
      detailPageVideo:
        "https://res.cloudinary.com/du6wh3et2/video/upload/v1697802949/video/calpad.mp4",
      linkForWhitepaperDownload: "https://calpad.vercel.app",
      link: "calpad",
      website: "https://calpad.vercel.app",
      linkTitle: "Calpad",
      timeline: "Oct 2022 - Dec 2022",
      detailsPageData: calpadData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "600px",
        fitObject: "fill",
        align: "center",
      },
    },
    {
      title: "Bluecom.central",
      buttonTitle: "View Product",
      description: "E-commerce SaaS - Lists of stores",
      backgroundColor: "#123578",
      count: 5,
      countTextColor: "#123578",
      countBackgroundColor: "#FBFBFB",
      image: bluecomCentralImage,
      detailPageVideo:
        "https://res.cloudinary.com/du6wh3et2/video/upload/v1697803043/video/bluecom%20central.mp4",
      linkForWhitepaperDownload: "https://bluecom.ai",
      link: "bluecom-central",
      website: "https://bluecom.ai",
      linkTitle: "Bluecom Central",
      timeline: "Dec 2022 - Present",
      detailsPageData: bluecomCentralData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "600px",
        fitObject: "fill",
        align: "center",
      },
    },
    {
      title: "Styler",
      buttonTitle: "View Product",
      description:
        "Transformer architecture has been a pivotal discovery in past five years of deep learning.",
      backgroundColor: "#591192",
      count: 6,
      countTextColor: "#591192",
      countBackgroundColor: "",
      image: stylerImage,
      detailPageVideo:
        "https://res.cloudinary.com/du6wh3et2/video/upload/v1698135915/video/styler.mp4",
      linkForWhitepaperDownload: "https://booking.hivepath.io/anoos",
      link: "styler",
      website: "https://booking.hivepath.io/anoos",
      linkTitle: "Styler",
      timeline: "Feb 2022 - July 2022",
      // timelineTextcolor:"#591192",
      detailsPageData: stylerData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "300px",
        fitObject: "fill",
        align: "center",
        marginLeft: "auto",
        margin: "auto",
      },
    },
  ],
};

export default productsPageData;
