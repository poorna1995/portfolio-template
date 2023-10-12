import React from "react";
import DetailsPageHeroComponent from "./hero";
import IntroductionComponent from "./Introduction";

export default function DetailsPageTemplate({
	pageType,
	id,
}: {
	pageType: string;
	id: string;
}) {
	return (
		<div>
			<DetailsPageHeroComponent />
			<IntroductionComponent />
		</div>
	);
}
