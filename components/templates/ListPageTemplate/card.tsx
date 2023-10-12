import { Button } from "@/components/ui/button";
import React from "react";

export interface ProductCardProps {
	count: number;
	title: string;
	description: string;
	link: string;
	website: string;
	image: string;
	backgroundColor: string;
	countTextColor: string;
}

export default function ProductCard({ data }: { data: ProductCardProps }) {
	const {
		count,
		title,
		description,
		link,
		website,
		image,
		backgroundColor,
		countTextColor,
	} = data;
	return (
		<div className="grid col-span-2">
			{/* text column */}
			<div className="">
				<h3>MultiChannel E-Commerce</h3>
				<p>Centralize and Streamline Your Multi-Channel Business</p>
				<Button>View Detail</Button>
			</div>
			{/* image column */}
			<div className="" style={{ background: "#945980" }}></div>
		</div>
	);
}
