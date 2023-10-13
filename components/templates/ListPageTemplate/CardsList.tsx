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
			<div className="max-w-[1440px] mx-auto my-8 flex justify-between items-center">
				{Array.isArray(data) &&
					data.map((item) => {
						return (
							<span
								key={item.title}
								className="py-4 px-8 text-2xl rounded-md text-black border  border-[rgba(63, 105, 254, 0.20)] mr-4"
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
