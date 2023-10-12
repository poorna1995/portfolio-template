import { ProductCardProps } from "@/components/templates/ListPageTemplate/card";
import aiWhitepaperData from "./aiWhitepaperData";
import { ListProductCardProps } from "../products";

interface CustomProductCardProps extends ProductCardProps {
	detailsPageData: {};
}

const whitepapersPageData: {
	heroTitle: string;
	heroDescription: string;
	listData: Array<ListProductCardProps>;
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
			link: "products/product-1",
			website: "",
			detailsPageData: aiWhitepaperData,
			linkTitle:"",
			timeline:""
		},
	],
};

export default whitepapersPageData;
