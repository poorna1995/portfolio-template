import React from "react";
import Link from "next/link";
import { AppNavigation } from "./AppNavigation";
import { Button } from "../ui/button";

export default function Header() {
	return (
		<header className="bg-white">
			<div className="flex justify-items-center justify-between my-4 max-w-6xl mx-auto">
				<Link href="/" className="text-2xl font-bold">
					P.
				</Link>
				<div className="flex items-center">
					<AppNavigation links={navigationLinks} />
					<Button className="ml-10 menu-item download-button">
						Download CV
					</Button>
				</div>
			</div>
		</header>
	);
}

const navigationLinks = [
	{
		title: "About Me",
		href: "/about",
	},
	{
		title: "Products",
		href: "/products",
	},
	{
		title: "Recognition",
		href: "/recognition",
		subMenu: [
			{
				title: "Best Employee Award",
				href: "/recognition/best-employee-award",
			},
		],
	},
	{
		title: "Whitepapers",
		href: "/whitepapers",
	},
	{
		title: "Research",
		href: "/research",
	},
	{
		title: "Hobbies",
		href: "/hobbies",
	},
];
