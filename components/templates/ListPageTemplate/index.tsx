import React from "react";
import ListPageHeroComponent from "./hero";
import { navigationLinks } from "@/constants/navigation";
import CardsList from "./CardsList";

export default function ListPageTemplate({ pageType }: { pageType: string }) {
	const page = navigationLinks.find((item) => item.key === pageType);

	return (
		<div>
			<ListPageHeroComponent
				title={page?.pageData?.heroTitle}
				description={page?.pageData?.heroDescription}
			/>
			<CardsList data={page?.pageData?.listData || []} />
		</div>
	);
}
