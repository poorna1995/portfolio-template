import { ListProductCardProps } from "../products";
import computerVisionImage from "@/public/assets/research/computer-vision.png";
import aiInerenceImage from "@/public/assets/research/ai-inference.png";
import transformersImage from "@/public/assets/research/transformers-variants.png";
import chatBotImage from "@/public/assets/research/chat-bot.png";
import topicModelingImage from "@/public/assets/research/topic-modeling.png";
import deepReinforcementImage from "@/public/assets/research/deep-learning.png";

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
      image: computerVisionImage,
      link: "computer-vision",
      website: "",
      linkTitle: "Computer Vision",
      timeline: "",
      detailsPageData: computerVisionData,
    },
    {
      title: "AI Inference",
      description:
        "AI Inference is a crucial step for building produc4 on ready AI models.",
      backgroundColor: "#945980",
      count: 2,
      countTextColor: "#945980",
      image: aiInerenceImage,
      link: "ai-inference",
      website: "",
      linkTitle: "AI Inference",
      timeline: "",
      detailsPageData: aiInerenceData,
    },
    {
      title: "Transformers Variants – Technical Overview",
      description:
        "Transformer architecture has been a pivotal discovery in past five years of deep learning.",
      backgroundColor: "#BAD060",
      count: 3,
      countTextColor: "#BAD060",
      image: transformersImage,
      link: "transformers",
      website: "",
      linkTitle: "Transformers",
      timeline: "",
      detailsPageData: transformersData,
    },
    {
      title: "Chat Bot Using Deep Learning - LSTM, RNN",
      description: "Tackling Question Answering using LSTM architecture",
      backgroundColor: "#79C7FF",
      count: 4,
      countTextColor: "#79C7FF",
      image: chatBotImage,
      link: "chat-bot",
      website: "",
      linkTitle: "Chat Bot",
      timeline: "",
      detailsPageData: chatBotData,
    },
    {
      title: "Topic Modelling using NLP",
      description:
        "Transformer architecture has been a pivotal discovery in past five years of deep learning.",
      backgroundColor: "#123578",
      count: 5,
      countTextColor: "#123578",
      image: topicModelingImage,
      link: "bluecom-central",
      website: "https://bluecom.ai",
      linkTitle: "Bluecom Central",
      timeline: "",
      detailsPageData: topicModelingData,
    },
    {
      title: "Deep Reinforcement Learning",
      description: "ackling Question Answering using LSTM architecture",
      backgroundColor: "#3DAAA4",
      count: 6,
      countTextColor: "#3DAAA4",
      image: deepReinforcementImage,
      link: "deep-reinforcement-learning",
      website: "",
      linkTitle: "Deep Learning",
      timeline: "",
      detailsPageData: deepReinforcementData,
      imageStyles: {
        maxHeight: "600px",
        maxWidth: "400px",
      },
    },
  ],
};

export default researchData;
