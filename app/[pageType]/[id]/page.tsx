import React from "react";

import { Metadata, ResolvingMetadata } from "next";
import { navigationLinks } from "@/components/shared/header";

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
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{pageType},{id}, {page?.title}, {subPage?.title}
			<h1 className="text-2xl">{title}</h1>
		</main>
	);
}
