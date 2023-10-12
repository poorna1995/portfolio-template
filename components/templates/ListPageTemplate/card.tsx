import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import importedImage from "@/public/assets/whitepapers/ai-and-compute.png";
import { useRouter } from "next/navigation";

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

	const router = useRouter();
	const handleViewDetail = () => {
		router.push(link);
	};

	return (
		<div className="flex flex-1 items-center">
			{/* text column */}
			<div className="flex-1 ">
				<div className="px-48">
					<h3 className="text-5xl">MultiChannel E-Commerce</h3>
					<p className="text-3xl mt-8">
						Centralize and Streamline Your Multi-Channel Business
					</p>
					<Button className="mt-8" onClick={() => handleViewDetail()}>
						View Detail
					</Button>
				</div>
			</div>
			{/* image column */}
			<div className="flex-1 py-24 " style={{ background: "#945980" }}>
				<Image
					src={image || importedImage}
					width={600}
					height={600}
					alt="placeholder"
					className="ml-24"
				/>
			</div>
		</div>
	);
}
