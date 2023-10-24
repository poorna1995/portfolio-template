import { ListProductCardProps } from "../products";
import bestEmployeeAward from "@/public/assets/recognitions/employee certficate.png";
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
      countBackgroundColor: "#FBFBFB",
      image: bestEmployeeAward,
      linkForWhitepaperDownload:
        "https://drive.google.com/drive/u/4/folders/1a3UCxoBMQVyIneotKqiZIf0D9uOBbu0H",
      // "https://drive.google.com/file/d/1goekxXnbvnYgwXan2g4oXhqju4eleipA",
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
      countBackgroundColor: "",
      image: worldQuantImage,
      linkForWhitepaperDownload:
        "https://drive.google.com/file/d/1cIcgq0y1v7wdjuQj6qf5l8vOWevLV8ML/view",
      link: "worldquant",
      website: "",
      linkTitle: "",
      timeline: "",
      detailsPageData: worldquantData,
    },
  ],
};

export default recognitionData;
