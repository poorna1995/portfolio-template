import React from "react";

export default function ListPageHeroComponent({
	title,
	description,
}: {
	title?: string;
	description?: string;
}) {
	return (
		<div className="bg-black w-full">
			<div className="max-w-6xl mx-auto text-center py-32">
				<h1 className="text-6xl font-display text-blue-500 py-12">
					{title || "Product Portfolio"}
				</h1>
				<h2 className="text-6xl font-default text-white">
					{description ||
						"Spearheading the development of diverse end-to-end product portfolios across B2C and B2B domains."}
				</h2>
			</div>
		</div>
	);
}
