"use client";

import React from "react";
import ProductCard, { ProductCardProps } from "./card";

export default function CardsList({ data }: { data: ProductCardProps[] }) {
	return (
		<div className="py-8">
			<div className="max-w-7xl mx-auto my-8">
				{Array.isArray(data) &&
					data.map((item) => {
						return (
							<span
								key={item.title}
								className="py-4 px-8 text-2xl rounded-md text-black border  border-[rgba(63, 105, 254, 0.20)] mr-4"
							>
								{item.title}{" "}
							</span>
						);
					})}
			</div>
			{Array.isArray(data) &&
				data.map((item) => {
					return <ProductCard key={item.title} data={item} />;
				})}
		</div>
	);
}
