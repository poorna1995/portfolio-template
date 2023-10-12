import React from "react";
import ProductCard, { ProductCardProps } from "./card";

export default function CardsList({ data }: { data: ProductCardProps[] }) {
	return (
		<div>
			{Array.isArray(data) &&
				data.map((item) => {
					return <ProductCard key={item.title} data={item} />;
				})}
		</div>
	);
}
