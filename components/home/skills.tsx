import React from "react";

export default function Skills() {
	return (
		<div>
			<h3 className="my-4 text-3xl font-display">Core Skills</h3>
			<ul className="list-disc list-inside">
				{data.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
}

const data = [
	"Project Building",
	"Cross-Functional Collaboration, Market and Competitors Analysis",
	"User -Centred Design",
	"Leadership Communication",
	"Technical Acumen",
	"Agile Methodologies",
	"Decision Making",
];
