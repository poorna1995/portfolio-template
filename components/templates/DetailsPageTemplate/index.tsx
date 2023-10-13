import React from "react";
import DetailsPageHeroComponent from "./hero";
import IntroductionComponent from "./Introduction";
import { navigationLinks } from "@/constants/navigation";
import { StaticImageData } from "next/image";
import CardGrid from "./CardGrid";
import Contribution from "./Contribution";
import ProductMedia from "./media";

export default function DetailsPageTemplate({
	pageType,
	id,
}: {
	pageType: string;
	id: string;
}) {
	const page = navigationLinks.find((item) => item.key === pageType);
	const pageInfo = page?.pageData?.listData.find((item) => item.link === id);
	const otherCardsData = page?.pageData?.listData.filter(
		(item) => item.link !== id,
	);
	let hasContributionData = pageInfo?.detailsPageData.contributionData
		? true
		: false;

	return (
		<div>
			<DetailsPageHeroComponent
				title={pageInfo?.title}
				description={pageInfo?.description}
				image={pageInfo?.image as StaticImageData}
			/>
			<div
				className={
					hasContributionData
						? "max-w-[1440px] mx-auto grid grid-cols-2"
						: "max-w-[1440px] mx-auto "
				}
			>
				<IntroductionComponent
					title={pageInfo?.detailsPageData?.introData?.title}
					content={pageInfo?.detailsPageData?.introData?.content}
				/>
				{hasContributionData && (
					<Contribution
						title={
							pageInfo?.detailsPageData?.contributionData?.title
						}
						content={
							pageInfo?.detailsPageData.contributionData
								?.content || []
						}
					/>
				)}
			</div>
			{pageInfo?.detailsPageData.productMedia && (
				<ProductMedia data={pageInfo?.detailsPageData.productMedia} />
			)}
			<CardGrid
				data={otherCardsData || []}
				title={`Other ${page?.title}`}
				pageType={pageType}
			/>
		</div>
	);
}
