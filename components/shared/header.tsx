import React from "react";
import Link from "next/link";
import { AppNavigation } from "./AppNavigation";
import { Button } from "../ui/button";

export default function Header() {
	return (
		<header className="bg-white">
			<div className="flex justify-items-center justify-between py-4  max-w-6xl mx-auto">
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

export const navigationLinks = [
	{
		title: "About Me",
		href: "/about",
		key: "about",
	},
	{
		title: "Products",
		href: "/products",
		key: "products",
	},
	{
		title: "Recognition",
		href: "/recognition",
		key: "recognition",
		subMenu: [
			{
				title: "Best Employee Award",
				href: "/recognition/best-employee-award",
				key: "best-employee-award",
			},
		],
	},
	{
		title: "Whitepapers",
		href: "/whitepapers",
		key: "whitepapers",
	},
	{
		title: "Research",
		href: "/research",
		key: "research",
	},
	{
		title: "Hobbies",
		href: "/hobbies",
		key: "hobbies",
	},
];
