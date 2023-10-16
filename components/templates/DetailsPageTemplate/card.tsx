"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function OtherItemsCard({
	data,
	pageType,
}: {
	data: { title: string; link: string };
	pageType: string;
}) {
	const router = useRouter();
	const handleViewDetail = () => {
		router.push(`/${pageType}/${data.link}`);
	};
	return (
		<div className="py-4 px-8 border border-[rgba(0, 0, 0, 0.20)] rounded-md">
			<h1 className="mb-12 text-3xl font-display">{data.title}</h1>
			<Button onClick={() => handleViewDetail()}>View Detail</Button>
		</div>
	);
}
