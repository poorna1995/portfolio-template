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
			<h1 className="text-4xl mt-4  font-display">{title || "Other Products"}</h1>
			<div className="grid grid-cols-3 py-8 gap-10">
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
