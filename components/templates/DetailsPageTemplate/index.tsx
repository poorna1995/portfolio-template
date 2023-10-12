import React from "react";
import DetailsPageHeroComponent from "./hero";
import IntroductionComponent from "./Introduction";
import { navigationLinks } from "@/constants/navigation";

export default function DetailsPageTemplate({
	pageType,
	id,
}: {
	pageType: string;
	id: string;
}) {
	const page = navigationLinks.find((item) => item.key === pageType);
	const pageInfo = page?.pageData?.listData.find((item) => item.link === id);
	return (
		<div>
			<DetailsPageHeroComponent
				title={pageInfo?.title}
				description={pageInfo?.description}
				image={pageInfo?.image}
			/>
			<IntroductionComponent />
		</div>
	);
}
