import { ListProductCardProps } from "../products";
import aiCompute from "@/public/assets/whitepapers/ai-and-compute.png";
import dataLoss from "@/public/assets/whitepapers/data-loss.png";
import dataTech from "@/public/assets/whitepapers/data-tech.png";
import messagingApp from "@/public/assets/whitepapers/messaging-app.png";
import multiChannel from "@/public/assets/whitepapers/multichannel-ecom.png";
import transformation from "@/public/assets/whitepapers/transformation.png";
import bluecomData from "../products/bluecomData";
import hivepathData from "../products/hivepathData";
import zelloData from "../products/zelloData";
import calpadData from "../products/calpadData";
import bluecomCentralData from "../products/bluecomCentralData";
import stylerData from "../products/stylerData";

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
      link: "bluecom",
      website: "https://bluecom.ai",
      linkTitle: "Bluecom",
      timeline: "Dec 2022 - Present",
      detailsPageData: bluecomData,
    },
    {
      title: "Data Loss Protection",
      description:
        "Application Level Securty whitepaper Front End and Back End",
      backgroundColor: "#6C60BA",
      count: 2,
      countTextColor: "#CC4B44",
      image: dataLoss,
      link: "hivepath",
      website: "https://hivepath.io",
      linkTitle: "Hivepath",
      timeline: "July 2021 - March 2022",
      detailsPageData: hivepathData,
    },
    {
      title: "MultiChannel E-Commerce",
      description: "Centralize and Streamline Your Multi-Channel Business",
      backgroundColor: "#945980",
      count: 3,
      countTextColor: "#945980",
      image: multiChannel,
      link: "zello",
      website: "https://zello.live",
      linkTitle: "Zello",
      timeline: "March 2022 - July 2022",
      detailsPageData: zelloData,
    },
    {
      title: "Messaging App",
      description: "End-to-end messaging app development and api documentation",
      backgroundColor: "#591192",
      count: 4,
      countTextColor: "#591192",
      image: messagingApp,
      link: "calpad",
      website: "https://calpad.vercel.app",
      linkTitle: "Calpad",
      timeline: "Oct 2022 - Dec 2022",
      detailsPageData: calpadData,
    },
    {
      title: "Transformers Architecture",
      description:
        "Detailed product research on Pre-qualifying a subcontractor and assessing risk",
      backgroundColor: "#0856B2",
      count: 5,
      countTextColor: "#123578",
      image: transformation,
      link: "bluecom-central",
      website: "https://bluecom.ai",
      linkTitle: "Bluecom Central",
      timeline: "Dec 2022 - Present",
      detailsPageData: bluecomCentralData,
    },
    {
      title: "Data Tech Stack ",
      description: "Data infrastructure architecture designs",
      backgroundColor: "#CD9047",
      count: 6,
      countTextColor: "#CD9047",
      image: dataTech,
      link: "styler",
      website: "https://booking.hivepath.io/anoos",
      linkTitle: "Styler",
      timeline: "Feb 2022 - July 2022",
      detailsPageData: stylerData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "400px",
      },
    },
  ],
};

export default whitepapersPageData;
