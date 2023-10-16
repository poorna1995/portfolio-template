import React from "react";

interface ContributionProps {
	title?: string;
	content: Array<{
		list?: {
			type?: string;
			data?: Array<{
				title?: string;
				list?: {
					type?: string;
					data?: Array<{ title: string }>;
				};
			}>;
		};
	}>;
}

export default function Contribution({ title, content }: ContributionProps) {
	return (
		<div className="px-8">
			<h1 className="text-4xl my-4 font-display">{title}</h1>
			{content.map((item, index) => {
				return (
					<div key={index}>
						{item.list?.type === "ordered" && (
							<ol className="list-decimal list-inside">
								{item.list?.data?.map((listItem, index) => {
									return (
										<li key={index}>
											{listItem.title}
											{listItem.list?.type ===
												"unordered" && (
												<ol className="list-disc list-inside ml-4">
													{listItem.list?.data?.map(
														(listItem, index) => {
															return (
																<li key={index}>
																	{
																		listItem.title
																	}
																</li>
															);
														},
													)}
												</ol>
											)}
										</li>
									);
								})}
							</ol>
						)}
						{item.list?.type === "unordered" && (
							<ul className="list-disc list-inside">
								{item.list?.data?.map((listItem, index) => {
									return (
										<li key={index}>{listItem.title}</li>
									);
								})}
							</ul>
						)}
					</div>
				);
			})}
		</div>
	);
}
