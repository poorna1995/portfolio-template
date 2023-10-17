import { ListProductCardProps } from "../products";
import bestEmployeeAward from "@/public/assets/recognitions/best-employee-award-image.png";
import worldQuantImage from "@/public/assets/recognitions/worldquant-challenge-image.png";

import bestEmployeeAwardData from "./bestEmployeeAwardData";
import worldquantData from "./worldquantData";
import { KeyLearningRecognitionProps } from "@/components/templates/RecognitionPageTemplate/KeyLearnings";

export interface RecognitionCardProps extends ListProductCardProps {
  keyLearningData?: KeyLearningRecognitionProps;
}

const recognitionData: {
  heroTitle: string;
  heroDescription: string;
  listData: Array<RecognitionCardProps>;
} = {
  heroTitle: "My Research Work",
  heroDescription:
    "Ventured into multiple areas of AI through a series of intriguing research projects.",
  listData: [
    {
      title: "Best Employee Award",
      description: "Emplyee Awards",
      buttonTitle: "Download Certificate",
      backgroundColor: "#6C60BA",
      count: 1,
      countTextColor: "#6C60BA",
      image: bestEmployeeAward,
      link: "best-employee-award",
      website: "",
      linkTitle: "",
      timeline: "",
      detailsPageData: bestEmployeeAwardData,
    },
    {
      title: "Worldquant",
      description: "Quantitative Research Summer Training Program",
      buttonTitle: "Download Certificate",
      backgroundColor: "#6C60BA",
      count: 1,
      countTextColor: "#6C60BA",
      image: worldQuantImage,
      link: "worldquant",
      website: "",
      linkTitle: "",
      timeline: "",
      detailsPageData: worldquantData,
    },
  ],
};

export default recognitionData;
