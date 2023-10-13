import { ListProductCardProps } from "../products";
import bluecomImage from "@/public/assets/products/bluecom.png";
import hivepathImage from "@/public/assets/products/hivepath.png";
import zelloImage from "@/public/assets/products/zello.png";
import bluecomCentralImage from "@/public/assets/products/bluecom-central.png";
import stylerImage from "@/public/assets/products/styler.png";
import calpadImage from "@/public/assets/products/calpad.png";

import computerVisionData from "../research/computerVisionData";
import aiInerenceData from "../research/aiInerenceData";
import transformersData from "../research/transformersData";
import chatBotData from "../research/chatBotData";
import topicModelingData from "../research/topicModelingData";
import deepReinforcementData from "../research/deepReinforcementData";

const researchData: {
  heroTitle: string;
  heroDescription: string;
  listData: Array<ListProductCardProps>;
} = {
  heroTitle: "My Research Work",
  heroDescription:
    "Ventured into multiple areas of AI through a series of intriguing research projects.",
  listData: [
    {
      title: "Computer Vision Application - Solution Design",
      description:
        "Architecture for real-world computer vision solutions, offering automated metric extraction and insights for businesses, particularly in industries like Retail, Quick Service Retail (QSR), and OEMs.",
      backgroundColor: "#6C60BA",
      count: 1,
      countTextColor: "#6C60BA",
      image: bluecomImage,
      link: "bluecom",
      website: "https://bluecom.ai",
      linkTitle: "Bluecom",
      timeline: "Dec 2022 - Present",
      detailsPageData: computerVisionData,
    },
    {
      title: "AI Inference",
      description:
        "AI Inference is a crucial step for building produc4 on ready AI models.",
      backgroundColor: "#945980",
      count: 2,
      countTextColor: "#945980",
      image: hivepathImage,
      link: "hivepath",
      website: "https://hivepath.io",
      linkTitle: "Hivepath",
      timeline: "July 2021 - March 2022",
      detailsPageData: aiInerenceData,
    },
    {
      title: "Transformers Variants – Technical Overview",
      description:
        "Transformer architecture has been a pivotal discovery in past five years of deep learning.",
      backgroundColor: "#BAD060",
      count: 3,
      countTextColor: "#BAD060",
      image: zelloImage,
      link: "zello",
      website: "https://zello.live",
      linkTitle: "Zello",
      timeline: "March 2022 - July 2022",
      detailsPageData: transformersData,
    },
    {
      title: "Chat Bot Using Deep Learning - LSTM, RNN",
      description: "Tackling Question Answering using LSTM architecture",
      backgroundColor: "#79C7FF",
      count: 4,
      countTextColor: "#79C7FF",
      image: calpadImage,
      link: "calpad",
      website: "https://calpad.vercel.app",
      linkTitle: "Calpad",
      timeline: "Oct 2022 - Dec 2022",
      detailsPageData: chatBotData,
    },
    {
      title: "Topic Modelling using NLP",
      description:
        "Transformer architecture has been a pivotal discovery in past five years of deep learning.",
      backgroundColor: "#123578",
      count: 5,
      countTextColor: "#123578",
      image: bluecomCentralImage,
      link: "bluecom-central",
      website: "https://bluecom.ai",
      linkTitle: "Bluecom Central",
      timeline: "Dec 2022 - Present",
      detailsPageData: topicModelingData,
    },
    {
      title: "Deep Reinforcement Learning",
      description: "ackling Question Answering using LSTM architecture",
      backgroundColor: "#3DAAA4",
      count: 6,
      countTextColor: "#3DAAA4",
      image: stylerImage,
      link: "styler",
      website: "https://booking.hivepath.io/anoos",
      linkTitle: "Styler",
      timeline: "Feb 2022 - July 2022",
      detailsPageData: deepReinforcementData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "400px",
      },
    },
  ],
};

export default researchData;
