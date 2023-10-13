import React from "react";

import { Metadata, ResolvingMetadata } from "next";
import { navigationLinks } from "@/constants/navigation";
import DetailsPageTemplate from "@/components/templates/DetailsPageTemplate";
import RecognitionPageTemplate from "@/components/templates/RecognitionPageTemplate";
type Props = {
	params: { pageType: string; id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

function getTitle(pageType: string, id: string) {
	const page = navigationLinks.find((item) => item.key === pageType);
	const subPage =
		Array.isArray(page?.subMenu) &&
		page?.subMenu.find((item) => item.key === id);

	if (subPage && "title" in subPage) {
		return subPage.title;
	}

	return "Page not found";
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	// read route params
	const pageType = params.pageType;

	let title = getTitle(pageType, params.id);
	// optionally access and extend (rather than replace) parent metadata

	return {
		title: title || "Page not found",
	};
}

export default function DetailsPage({
	params: { pageType, id },
}: {
	params: { pageType: string; id: string };
}) {
	const title = getTitle(pageType, id);

	const page = navigationLinks.find((item) => item.key === pageType);
	const subPage = (Array.isArray(page?.subMenu) &&
		page?.subMenu.find((item) => item.key === id)) || {
		title: "Page not found",
	};

	return (
		<main className="flex min-h-screen  flex-col ">
			{pageType === "recognition" ? (
				<RecognitionPageTemplate />
			) : (
				<DetailsPageTemplate pageType={pageType} id={id} />
			)}
		</main>
	);
}
