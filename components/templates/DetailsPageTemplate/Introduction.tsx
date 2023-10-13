import { Button } from "@/components/ui/button";
import React from "react";

interface IntroductionProps {
	title?: string;
	content?: Array<{
		paragraph: string;
		list: {
			type: "ordered" | "unordered";
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
			<h1 className="text-4xl mt-4">{title}</h1>

			{content?.map((item) => {
				return (
					<div key={item.paragraph}>
						{" "}
						<p key={item.paragraph} className="text-2xl mt-4 ">
							{item.paragraph}
						</p>
						{item.list.type === "ordered" && (
							<ol className="list-decimal list-inside">
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
