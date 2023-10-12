import React from "react";
import Link from "next/link";
import { AppNavigation } from "./AppNavigation";
import { Button } from "../ui/button";
import { navigationLinks } from "@/constants/navigation";

export default function Header() {
	return (
		<header className="bg-white">
			<div className="flex justify-items-center justify-between py-4  max-w-[1440px] mx-auto">
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
