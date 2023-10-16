import React from "react";

export default function Interests() {
	return (
		<div>
			<h3 className="text-3xl font-display">Areas of Intrest</h3>
			<ul className="list-disc list-inside">
				{data.map((item) => (
					<li key={item} className="list-item">
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
const data = [
	"Human-AI",
	"Augmented and Virtual Reality (AR/VR)",
	"Machine Learning",
];
