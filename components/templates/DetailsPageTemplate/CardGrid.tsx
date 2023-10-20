import React from "react";
import OtherItemsCard from "./card";
import { ListProductCardProps } from "@/constants/pages/products";

interface CardGridProps {
	title?: string;
	data: ListProductCardProps[];
	pageType: string;
}

export default function CardGrid({ title, data, pageType }: CardGridProps) {
	return (
		<div className="max-w-[1600px] mx-auto">
			<h1 className="mt-4 text-4xl font-display">{title || "Other Products"}</h1>
			<div className="grid grid-cols-3 gap-10 py-8">
				{data.map((item) => {
					return (
						<OtherItemsCard
							key={item.title}
							data={item}
							pageType={pageType}
							
						/>
					);
				})}
			</div>
		</div>
	);
}
