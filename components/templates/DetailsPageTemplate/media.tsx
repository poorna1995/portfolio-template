import Image from "next/image";
import React from "react";

interface ProductMediaProps {
	data?: {
		image?: Array<{
			src: string;
			alt?: string;
		}>;
		video?: Array<{
			src: string;
			alt?: string;
		}>;
	};
}

export default function ProductMedia({ data }: ProductMediaProps) {
	return (
		<div className="max-w-[1440px] mx-auto ">
			<h1 className="text-4xl my-4">Product Media</h1>
			<div className="grid grid-cols-3 gap-8">
				{data?.image?.map((item) => {
					return (
						<Image
							src={item.src}
							alt={"product image "}
							key={item.src}
							width={600}
							height={600}
							className="w-full object-cover"
						/>
					);
				})}
			</div>
		</div>
	);
}
