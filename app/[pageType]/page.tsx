import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { navigationLinks } from "@/constants/navigation";
import ListPageTemplate from "@/components/templates/ListPageTemplate";

type Props = {
	params: { pageType: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	// read route params
	const pageType = params.pageType;

	// fetch data
	const product = navigationLinks.find((item) => item.key === pageType);
	// optionally access and extend (rather than replace) parent metadata

	return {
		title: product?.title || "Page not found",
	};
}

export default function Page({
	params: { pageType },
}: {
	params: { pageType: string };
}) {
	const page = navigationLinks.find((item) => item.key === pageType);
	if (page)
		return (
			<main className="flex min-h-screen flex-col  justify-between ">
				<ListPageTemplate pageType={pageType} />
			</main>
		);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-2xl">Page Not found!</h1>
		</main>
	);
}
