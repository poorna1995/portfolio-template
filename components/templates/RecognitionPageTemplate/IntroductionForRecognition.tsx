import { Button } from "@/components/ui/button";
import React from "react";

interface IntroductionForRecognitionProps {
	title?: string;
	content?: Array<{
		
		paragraph?: string;
		list: {
			type: string;
			data: Array<{ title: string; description?: string }>;
		};
	}>;
}

export default function IntroductionForRecognition({
	title,
	content,
}: IntroductionForRecognitionProps) {
	return (
		<div className="max-w-[1600px] mx-auto">
			<h1 className="mt-28 mb-12 text-4xl font-medium font-display">
				{title}
			</h1>

			{content?.map((item) => {
				return (
					<div key={item.paragraph}>
						{" "}
						<p
							key={item.paragraph}
							className="text-[18px] leading-8 mt-4 font-default"
						>
							{item.paragraph}
						</p>
						<div className="grid grid-cols-2 gap-2 my-12">
							{item.list.data.map((listItem, index) => {
								return (
									<div key={index} className="my-2">
										<div className="flex items-start gap-4 p-2">
											<div className="mt-1">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="36"
													height="36"
													viewBox="0 0 36 36"
													fill="none"
												>
													<path
														d="M17.9999 33.3756C16.7699 33.3756 15.5399 32.9856 14.5199 32.2206L6.70486 26.3706C5.24986 25.2756 4.37988 23.5356 4.37988 21.7206V2.64062H31.6198V21.7206C31.6198 23.5356 30.7499 25.2756 29.2949 26.3706L21.4799 32.2206C20.4599 32.9856 19.2299 33.3756 17.9999 33.3756ZM6.62988 4.87563V21.7056C6.62988 22.8156 7.16986 23.8806 8.05486 24.5556L15.8698 30.4056C17.1298 31.3506 18.8849 31.3506 20.1449 30.4056L27.9599 24.5556C28.8449 23.8806 29.3849 22.8156 29.3849 21.7056V4.87563H6.62988Z"
														fill="#547AFE"
													/>
													<path
														d="M17.9999 33.3756C16.7699 33.3756 15.5399 32.9856 14.5199 32.2206L6.70486 26.3706C5.24986 25.2756 4.37988 23.5356 4.37988 21.7206V2.64062H31.6198V21.7206C31.6198 23.5356 30.7499 25.2756 29.2949 26.3706L21.4799 32.2206C20.4599 32.9856 19.2299 33.3756 17.9999 33.3756ZM6.62988 4.87563V21.7056C6.62988 22.8156 7.16986 23.8806 8.05486 24.5556L15.8698 30.4056C17.1298 31.3506 18.8849 31.3506 20.1449 30.4056L27.9599 24.5556C28.8449 23.8806 29.3849 22.8156 29.3849 21.7056V4.87563H6.62988Z"
														stroke="#547AFE"
													/>
													<path
														d="M33 4.875H3C2.385 4.875 1.875 4.365 1.875 3.75C1.875 3.135 2.385 2.625 3 2.625H33C33.615 2.625 34.125 3.135 34.125 3.75C34.125 4.365 33.615 4.875 33 4.875Z"
														fill="#547AFE"
													/>
													<path
														d="M33 4.875H3C2.385 4.875 1.875 4.365 1.875 3.75C1.875 3.135 2.385 2.625 3 2.625H33C33.615 2.625 34.125 3.135 34.125 3.75C34.125 4.365 33.615 4.875 33 4.875Z"
														stroke="#547AFE"
													/>
													<path
														d="M24 13.125H12C11.385 13.125 10.875 12.615 10.875 12C10.875 11.385 11.385 10.875 12 10.875H24C24.615 10.875 25.125 11.385 25.125 12C25.125 12.615 24.615 13.125 24 13.125Z"
														fill="#547AFE"
													/>
													<path
														d="M24 13.125H12C11.385 13.125 10.875 12.615 10.875 12C10.875 11.385 11.385 10.875 12 10.875H24C24.615 10.875 25.125 11.385 25.125 12C25.125 12.615 24.615 13.125 24 13.125Z"
														stroke="#547AFE"
													/>
													<path
														d="M24 20.625H12C11.385 20.625 10.875 20.115 10.875 19.5C10.875 18.885 11.385 18.375 12 18.375H24C24.615 18.375 25.125 18.885 25.125 19.5C25.125 20.115 24.615 20.625 24 20.625Z"
														fill="#547AFE"
													/>
													<path
														d="M24 20.625H12C11.385 20.625 10.875 20.115 10.875 19.5C10.875 18.885 11.385 18.375 12 18.375H24C24.615 18.375 25.125 18.885 25.125 19.5C25.125 20.115 24.615 20.625 24 20.625Z"
														stroke="#547AFE"
													/>
												</svg>
											</div>
											<div>
												<h5 className="mb-3 text-2xl font-medium">
													{listItem.title}
												</h5>
												<p className="text-lg font-normal">
													{listItem.description}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}
