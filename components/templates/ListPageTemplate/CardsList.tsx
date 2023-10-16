"use client";

import React from "react";
import ProductCard, { ProductCardProps } from "./card";
import { ListProductCardProps } from "@/constants/pages/products";

export default function CardsList({
	data,
	pageType,
}: {
	data: ListProductCardProps[];
	pageType: string;
}) {
	return (
		<div className="py-8">
			<div className="max-w-[1200px] mx-auto my-8 flex justify-between items-center">
				{Array.isArray(data) &&
					data.map((item) => {
						return (
							<span
								key={item.title}
								className="py-3 px-8 text-[18px] rounded-lg text-black border border-[rgba(63, 105, 254, 0.80) ] mr-4 font-default"
							>
								{item.linkTitle}{" "}
							</span>
						);
					})}
			</div>
			{Array.isArray(data) &&
				data.map((item) => {
					return (
						<ProductCard
							key={item.title}
							data={item}
							pageType={pageType}
						/>
					);
				})}
		</div>
	);
}
