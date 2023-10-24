import { ListProductCardProps } from "../products";
import aiCompute from "@/public/assets/whitepapers/ai-and-compute.png";
import dataLoss from "@/public/assets/whitepapers/data-loss.png";
import dataTech from "@/public/assets/whitepapers/data-tech.png";
import messagingApp from "@/public/assets/whitepapers/messaging-app.png";
import multiChannel from "@/public/assets/whitepapers/multichannel-ecom.png";
import transformation from "@/public/assets/whitepapers/transformation.png";

import aiWhitepaperData from "../whitepapers/aiWhitepaperData";
import dataLossData from "../whitepapers/dataLossData";
import multiChannelData from "../whitepapers/multiChannelData";
import messagingAppData from "../whitepapers/messagingAppData";
import transformerData from "../whitepapers/transformerData";
import techStackData from "../whitepapers/techStackData";

const whitepapersPageData: {
  heroTitle: string;
  heroDescription: string;
  listData: Array<ListProductCardProps>;
} = {
  heroTitle: "Whitpapers",
  heroDescription:
    "My Comprehensive list of whitepapers across multiple areas of work.",
  listData: [
    {
      title: "AI Compute-Technical Deep Drive",
      description: "Explore AI computing hardware and accelerators",
      backgroundColor: "#3F69FE",
      count: 1,
      countTextColor: "#3F69FE",
      image: aiCompute,
      detailPageVideo:
        "https://res.cloudinary.com/du6wh3et2/video/upload/v1697803298/video/whitepaper%20videos/nhti3thqwtcz4hatgibw.mp4",
      linkForWhitepaperDownload:
        "https://drive.google.com/file/d/1OM1XxhV3-zTVwinmmDhhyHyU12VF0Dx6",
      link: "ai-compute",
      website: "",
      linkTitle: "AI White Paper",
      timeline: "",
      detailsPageData: aiWhitepaperData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "600px",
        fitObject: "fill",
        align: "center",
      },
    },
    {
      title: "Data Loss Protection",
      description:
        "Application Level Securty whitepaper Front End and Back End",
      backgroundColor: "#6C60BA",
      count: 2,
      countTextColor: "#CC4B44",
      image: dataLoss,
      detailPageVideo:
        "https://res.cloudinary.com/du6wh3et2/video/upload/v1697803508/video/whitepaper%20videos/ow9vbob5b5xbthirl0pz.mp4",
      linkForWhitepaperDownload:
        "https://drive.google.com/file/d/1hzlgqrYlQE7M2LGsuZNjGsVObZIE638c",
      link: "data-loss-protection",
      website: "https://hivepath.io",
      linkTitle: "Data Loss Protection",
      timeline: "",
      detailsPageData: dataLossData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "600px",
        fitObject: "fill",
        align: "center",
      },
    },
    {
      title: "MultiChannel E-Commerce",
      description: "Centralize and Streamline Your Multi-Channel Business",
      backgroundColor: "#945980",
      count: 3,
      countTextColor: "#945980",
      image: multiChannel,
      detailPageVideo:
        "https://res.cloudinary.com/du6wh3et2/video/upload/v1697803541/video/whitepaper%20videos/mfulvfqemmcbjfcj2ndu.mp4",
      linkForWhitepaperDownload:
        "https://drive.google.com/file/d/1Q2SYr6OOyJUjY-5hJQ79xBYA8ST5FiZw",
      link: "multichannel-ecommerce",
      website: "",
      linkTitle: "MultiChannel E-Commerce",
      timeline: "",
      detailsPageData: multiChannelData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "600px",
        fitObject: "fill",
        align: "center",
      },
    },
    {
      title: "Messaging App",
      description: "End-to-end messaging app development and api documentation",
      backgroundColor: "#591192",
      count: 4,
      countTextColor: "#591192",
      image: messagingApp,
      detailPageVideo:
        "https://res.cloudinary.com/du6wh3et2/video/upload/v1697803724/video/whitepaper%20videos/aw1yliosekvyfxpwrpxq.mov",
      linkForWhitepaperDownload:
        "https://drive.google.com/file/d/1w5ba_tiCHoRpe8uzxbDWCJwRN_Q2QYUL",
      link: "message-app",
      website: "",
      linkTitle: "Messaging App",
      timeline: "",
      detailsPageData: messagingAppData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "600px",
        fitObject: "fill",
        align: "center",
      },
    },
    // {
    //   title: "Transformers Architecture",
    //   description:
    //     "Detailed product research on Pre-qualifying a subcontractor and assessing risk",
    //   backgroundColor: "#0856B2",
    //   count: 5,
    //   countTextColor: "#123578",
    //   image: transformation,
    //   // detailPageVideo:
    //   //   "https://drive.google.com/file/d/1EI940qBOJIIBnYF-xe21fRTU9MoaTSYT/preview",      video not available
    //   linkForWhitepaperDownload:
    //     "https://drive.google.com/file/d/1EEeuxqvCbAIR2UpQhXWoCFbVNLVQLWH3",
    //   link: "transformers-architecture",
    //   website: "",
    //   linkTitle: "Transformers Architecture",
    //   timeline: "",
    //   detailsPageData: transformerData,
    //   imageStyles: {
    //     maxHeight: "600px",
    //     maxWidth: "600px",
    //     fitObject: "fill",
    //     align: "center",
    //   },
    // },
    {
      title: "Data Tech Stack ",
      description: "Data infrastructure architecture designs",
      backgroundColor: "#CD9047",
      count: 5,
      countTextColor: "#CD9047",
      image: dataTech,
      detailPageVideo:
        "https://res.cloudinary.com/du6wh3et2/video/upload/v1697803900/video/whitepaper%20videos/zvaourh3gv76ve1tzwf0.mov",
      linkForWhitepaperDownload:
        "https://drive.google.com/file/d/1lGjba5oaUbqrXeLSDjpbzk23FzmIDEh8",
      link: "data-tech-stack",
      website: "",
      linkTitle: "Data Tech Stack",
      timeline: "",
      detailsPageData: techStackData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "600px",
        fitObject: "fill",
        align: "center",
      },
    },
  ],
};

export default whitepapersPageData;
