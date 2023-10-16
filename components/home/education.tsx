import Image from "next/image";
import React from "react";

export default function Education() {
	return (
		<div className="mt-8 border-t border-black">
			<h2 className="my-4 text-3xl font-display">Education</h2>
			{data.map((item, index) => (
				<EducationItem key={index} data={item} />
			))}
		</div>
	);
}
const EducationItem = ({
	data,
}: {
	data: {
		institution: string;
		institutionLogo: string;
		degree: string;
		timePeriod: string;
		description: string;
	};
}) => {
	const { institution, institutionLogo, degree, timePeriod, description } =
		data;
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-1">
				<Image
					src={institutionLogo}
					alt="logo"
					width={40}
					height={40}
				/>
			</div>
			<div className="col-span-11">
				<div className="flex items-center justify-between">
					<h3 className="text-2xl font-display">{institution}</h3>{" "}
					<span>{timePeriod}</span>
				</div>
				<h4 className="text-xl">{degree}</h4>
				<p className="text-lg">{description}</p>
			</div>
		</div>
	);
};

const data = [
	{
		institution: "Sri Venkateswara University",
		institutionLogo: "",
		degree: "B.tech Major in Chemical Engineering ",
		timePeriod: "2013-2017",
		description:
			"Courses: Data Structures, C, C++, Algorithm, Calculus, Python Programming, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision",
	},
];
