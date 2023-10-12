import { Button } from "@/components/ui/button";
import React from "react";

interface IntroductionProps {
	title?: string;
	content?: string[];
}

export default function IntroductionComponent({
	title,
	content,
}: IntroductionProps) {
	return (
		<div>
			<h1>{title}</h1>

			{content?.map((item) => (
				<p key={item} className="text-2xl mt-4 ">
					{item}
				</p>
			))}
			<Button className="mt-4">Download Whitepaper</Button>
		</div>
	);
}
