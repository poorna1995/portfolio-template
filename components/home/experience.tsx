import Image from "next/image";
import React from "react";

export default function ExperienceComponent() {
	return (
		<div className="my-8 border-t border-black">
			<h2 className="my-4 text-4xl font-display">Experience</h2>
			{data.map((item, index) => {
				return <ExperienceCard data={item} key={index} />;
			})}
		</div>
	);
}

const ExperienceCard = ({ data }: { data: ExperienceCardProps }) => {
	const {
		companyLogo,
		companyName,
		jobRole,
		location,
		timePeriod,
		description,
		areaOfContributions,
		products,
		responsibilities,
	} = data;
	return (
		<div className="grid grid-cols-12 my-8">
			<div className="col-span-1">
				<Image src={companyLogo} alt={"logo"} width={40} height={40} />
			</div>
			<div className="col-span-11">
				<div className="flex items-center justify-between">
					<h3 className="text-2xl font-display">{companyName}</h3>
					<span className="text-lg">{timePeriod}</span>
				</div>
				<div className="flex items-center justify-between">
					<p className="text-lg">{jobRole}</p>
					<p className="text-lg">{location}</p>
				</div>
				{areaOfContributions && areaOfContributions?.length > 0 && (
					<div className="my-4">
						<h4 className="text-2xl ">Area of contribution</h4>
						<div className="grid grid-cols-2 my-4">
							{areaOfContributions.map((item, index) => {
								return (
									<span key={index} className="text-lg">
										{item}
									</span>
								);
							})}
						</div>
					</div>
				)}{" "}
				{products && products.length > 0 && (
					<div>
						<h4 className="text-2xl">
							Key Contributions to Live Products:
						</h4>
						{products.map((item, index) => {
							return (
								<div key={index}>
									<div>
										<Image
											src={item.logo}
											alt="logo"
											width={40}
											height={40}
										/>
									</div>
									<div>
										<h5>{item.title}</h5>
										<p>{item.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				)}
				{responsibilities && responsibilities.length > 0 && (
					<div className="my-4">
						{responsibilities.map((item, index) => {
							return (
								<div key={index} className="flex my-2">
									<svg
										width="21"
										height="22"
										viewBox="0 0 21 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="my-1 mr-3"
									>
										<ellipse
											cx="10.4032"
											cy="11"
											rx="10.4032"
											ry="11"
											fill="#3F69FE"
										/>
										<path
											d="M6.15527 11.9766L8.74121 14.7109L13.9131 8.85172"
											stroke="white"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="text-lg ">{item}</p>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

interface ExperienceCardProps {
	companyLogo: string;
	companyName: string;
	jobRole: string;
	location: string;
	timePeriod: string;
	description?: string;
	areaOfContributions?: string[];
	products?: {
		logo: string;
		title: string;
		description: string;
	}[];
	responsibilities?: string[];
}

const data: ExperienceCardProps[] = [
	{
		companyLogo: "",
		companyName: "Hivepath",
		jobRole:
			"Lead Developer & Designer - ReactJs, GitHub,NextJS, Figma, Adobe suite ",
		location: "Bangalore, India",
		timePeriod: "2021-Present",
		description:
			"Spearheading the development of diverse end-to-end product portfolios across B2C and B2B domains.",
		areaOfContributions: [
			"Product Development Achievements",
			"Design Collaboration For a Product",
			"Innovation in Product Development",
			"Leadership Activities",
		],
		products: [
			{
				logo: "",
				title: "Bluecom",
				description:
					"E-commerce SaaS for streamlined product life cycle",
			},
		],
	},
	{
		companyLogo: "",
		companyName: "nvipani Technology ",
		jobRole: "Software Developer & Designer  ",
		location: "Bangalore, India",
		timePeriod: "Sep 2020 - Sep 2021",
		description:
			"Spearheading the development of diverse end-to-end product portfolios across B2C and B2B domains.",
		responsibilities: [
			"Conducted user research to understand the needs, behaviours, and pain points of 100+ online store retailers.",
			"Built user interfaces to provide the live shopping experience in virtual stores for both desktop and mobile customers.",
			"Conducted usability testing and gathered feedback from retailers and customers to iterate and improve design solutions.",
		],
	},
	{
		companyLogo: "",
		companyName: "Crafter",
		jobRole: "Front-End Intern",
		location: "Bangalore, India",
		timePeriod: "May 2019 - June 2019",
		description:
			"Spearheading the development of diverse end-to-end product portfolios across B2C and B2B domains.",
		responsibilities: [
			"As the sole developer on the project, assumed full responsibility for leading the engineering strategy and making technology decisions independently, ensuring efficient and effective project execution",
			"Proactively seeking feedback and input from the executive team and reflecting in the in the product Frontend",
			"Understanding the design needs and goals for the product and proactively meeting the deadlines.",
			"Collaborated closely with the design team to understand design needs and project goals, facilitating seamless integration of design elements into the product.",
		],
	},
];
