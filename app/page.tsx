import AboutMeComponent from "@/components/home/about";
import Education from "@/components/home/education";
import ExperienceComponent from "@/components/home/experience";
import HomePageHeroComponent from "@/components/home/hero";
import Interests from "@/components/home/interests";
import Skills from "@/components/home/skills";
import Image from "next/image";

export default function Home() {
	return (
		<main className="mx-auto max-w-[1600px]">
			<HomePageHeroComponent />
			<div className="grid grid-cols-12 gap-4 my-8">
				<div className="col-span-9">
					<AboutMeComponent />
					<Education />
				</div>
				<div className="col-span-3">
					<Interests />
					<Skills />
				</div>
			</div>
			<ExperienceComponent />
		</main>
	);
}
