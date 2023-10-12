import React from "react";
import OtherItemsCard from "./card";


interface CardGridProps {
    title?: string;
    data: { title: string }[];
}

export default function CardGrid({ title, data }: CardGridProps) {
    return (
        <div>
            <h1>{title || "Other Products"}</h1>
            {data.map((item) => {
                return <OtherItemsCard key={item.title} data={item} />;
            })}
        </div>
    );
}
