import React from "react";
import DetailsPageHeroComponent from "../DetailsPageTemplate/hero";
import { navigationLinks } from "@/constants/navigation";
import { StaticImageData } from "next/image";
import IntroductionComponent from "../DetailsPageTemplate/Introduction";
import Contribution from "../DetailsPageTemplate/Contribution";
import ProductMedia from "../DetailsPageTemplate/media";
import CardGrid from "../DetailsPageTemplate/CardGrid";
import IntroductionForRecognition from "./IntroductionForRecognition";
import KeyLearnings from "./KeyLearnings";
import { RecognitionCardProps } from "@/constants/pages/recognition";

export default function RecognitionPageTemplate({
  pageType,
  id,
}: {
  pageType: string;
  id: string;
}) {
  const page = navigationLinks.find((item) => item.key === pageType);
  const pageInfo = page?.pageData?.listData.find((item) => item.link === id);
  const pageDetailedData = pageInfo?.detailsPageData as RecognitionCardProps;
  const otherCardsData = page?.pageData?.listData.filter(
    (item) => item.link !== id
  );
  let hasContributionData = pageInfo?.detailsPageData.contributionData
    ? true
    : false;

  console.log({ pageInfo, page });
  return (
    <div>
      <DetailsPageHeroComponent
        title={pageInfo?.title}
        description={pageInfo?.description}
        buttonTitle={pageInfo?.buttonTitle}
        image={pageInfo?.image as StaticImageData}
        linkForWhitepaperDownload={pageInfo?.linkForWhitepaperDownload}
      />
      <div
        className={
          hasContributionData
            ? "max-w-[1600px] mx-auto grid grid-cols-2"
            : "max-w-[1600px] mx-auto "
        }
      >
        <IntroductionForRecognition
          title={pageInfo?.detailsPageData?.introData?.title}
          content={pageInfo?.detailsPageData?.introData?.content || []}
        />
        {/* {hasContributionData && (
          <Contribution
            title={pageInfo?.detailsPageData?.contributionData?.title}
            content={pageInfo?.detailsPageData.contributionData?.content || []}
          />
        )} */}
      </div>
      <KeyLearnings
        title={pageDetailedData?.keyLearningData?.title}
        content={pageDetailedData?.keyLearningData?.content || []}
      />
      {/* {pageInfo?.detailsPageData.productMedia && (
        <ProductMedia data={pageInfo?.detailsPageData.productMedia} />
      )} */}
      {/* <CardGrid
        data={otherCardsData || []}
        title={`Other ${page?.title}`}
        pageType={pageType}
      /> */}
    </div>
  );
}
