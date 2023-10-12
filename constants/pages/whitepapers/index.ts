import { ProductCardProps } from "@/components/templates/ListPageTemplate/card";

const whitepapersPageData: {
	heroTitle: string;
	heroDescription: string;
	listData: Array<ProductCardProps>;
} = {
	heroTitle: "",
	heroDescription: "",
	listData: [
		{
			title: "Product 1",
			description: "Product 1 description",
			backgroundColor: "blue",
			count: 1,
			countTextColor: "white",
			image: "",
			link: "",
			website: "",
		},
	],
};

export default whitepapersPageData;
