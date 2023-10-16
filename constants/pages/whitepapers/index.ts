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
      title: "AI Compute-Technical Deep Dive",
      description: "Explore AI computing hardware and accelerators",
      backgroundColor: "#3F69FE",
      count: 1,
      countTextColor: "#3F69FE",
      image: aiCompute,
      link: "ai-compute",
      website: "",
      linkTitle: "AI White Paper",
      timeline: "",
      detailsPageData: aiWhitepaperData,
    },
    {
      title: "Data Loss Protection",
      description:
        "Application Level Securty whitepaper Front End and Back End",
      backgroundColor: "#6C60BA",
      count: 2,
      countTextColor: "#CC4B44",
      image: dataLoss,
      link: "data-loss-protection",
      website: "https://hivepath.io",
      linkTitle: "Data Loss Protection",
      timeline: "",
      detailsPageData: dataLossData,
    },
    {
      title: "MultiChannel E-Commerce",
      description: "Centralize and Streamline Your Multi-Channel Business",
      backgroundColor: "#945980",
      count: 3,
      countTextColor: "#945980",
      image: multiChannel,
      link: "multichannel-ecommerce",
      website: "",
      linkTitle: "MultiChannel E-Commerce",
      timeline: "",
      detailsPageData: multiChannelData,
    },
    {
      title: "Messaging App",
      description: "End-to-end messaging app development and api documentation",
      backgroundColor: "#591192",
      count: 4,
      countTextColor: "#591192",
      image: messagingApp,
      link: "message-app",
      website: "",
      linkTitle: "Messaging App",
      timeline: "",
      detailsPageData: messagingAppData,
    },
    {
      title: "Transformers Architecture",
      description:
        "Detailed product research on Pre-qualifying a subcontractor and assessing risk",
      backgroundColor: "#0856B2",
      count: 5,
      countTextColor: "#123578",
      image: transformation,
      link: "transformers-architecture",
      website: "",
      linkTitle: "Transformers Architecture",
      timeline: "",
      detailsPageData: transformerData,
    },
    {
      title: "Data Tech Stack ",
      description: "Data infrastructure architecture designs",
      backgroundColor: "#CD9047",
      count: 6,
      countTextColor: "#CD9047",
      image: dataTech,
      link: "data-tech-stack",
      website: "",
      linkTitle: "Data Tech Stack",
      timeline: "",
      detailsPageData: techStackData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "400px",
      },
    },
  ],
};

export default whitepapersPageData;
