import { Button } from "@/components/ui/button";
import React from "react";

interface IntroductionProps {
	title?: string;
	content?: Array<{
		paragraph: string;
		list: {
			type: string;
			data: Array<{ title: string }>;
		};
	}>;
}

export default function IntroductionComponent({
	title,
	content,
}: IntroductionProps) {
	return (
		<div className="max-w-[1440px] mx-auto">
			<h1 className="text-4xl mt-4 font-display">{title}</h1>

			{content?.map((item) => {
				return (
					<div key={item.paragraph}>
						{" "}
						<p
							key={item.paragraph}
							className="text-2xl mt-4 font-default"
						>
							{item.paragraph}
						</p>
						{item.list.type === "ordered" && (
							<ol className="list-decimal list-inside font-default">
								{item.list.data.map((listItem) => {
									return (
										<li
											className="list-item"
											key={listItem.title}
										>
											{listItem.title}
										</li>
									);
								})}
							</ol>
						)}
					</div>
				);
			})}
			<Button className="mt-4">Download Whitepaper</Button>
		</div>
	);
}
