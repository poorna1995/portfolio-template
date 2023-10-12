import { Button } from "@/components/ui/button";
import React from "react";

export default function OtherItemsCard({ data }: { data: { title: string } }) {
	return (
		<div>
			<h1 >{data.title}</h1>
			<Button >View Detail</Button>
		</div>
	);
}
