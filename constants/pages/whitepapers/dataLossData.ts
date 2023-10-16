import dataLossMediaImage1 from "@/public/assets/whitepapers/data-loss-media-image-1.png";
import dataLossMediaImage2 from "@/public/assets/whitepapers/data-loss-media-image-2.png";
import dataLossMediaImage3 from "@/public/assets/whitepapers/data-loss-media-image-3.png";

const dataLossData = {
  introData: {
    title: "Introduction",
    buttonTitle: "Visit Website",
    content: [
      {
        paragraph: `This whitepaper is a comprehensive analysis of the Data Loss Prevention (DLP) landscape for Palo Alto Networks, 
        focusing on competitor analysis and feature comparison,  next-generation strategy
            
            It aims to provide insights into Palo Alto Netowrks’ approch to DLP, its buisness growth strategies, 
            current coustomer profiles, market trends, and more.`,

        list: {
          type: "ordered",
          data: [
            // {
            //   title: `Emphasizes automated metric extraction and business insights.`,
            // },
          ],
        },
      },
    ],
  },
  productMedia: {
    image: [
      {
        src: dataLossMediaImage1,
      },
      {
        src: dataLossMediaImage2,
      },
      {
        src: dataLossMediaImage3,
      },
    ],
  },
};

export default dataLossData;
