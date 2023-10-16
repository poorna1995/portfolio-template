import Image from "next/image";
import React from "react";
import image from "@/public/home-hero.png";

export default function HomePageHeroComponent() {
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-4">
				<Image src={image} alt="my image" width={600} height={600} />
			</div>
			<div className="col-span-8 p-24">
				<h1 className="text-6xl font-display ">
					I create unique solutions that improve people&apos;s lives.
				</h1>
				<p className="mt-4 text-xl">
					My name is Poorna Praneesha, I also go by “the most
					Inquisitive learner and Passionate in the room”
				</p>
				<p className="my-4 text-xl">
					A Lead Developer & Designer and a creative thinker with 6+
					years of industry experience in team building & leadership.
					Strongly driven towards creating value for business &
					technology stakeholders.
				</p>
			</div>
		</div>
	);
}
