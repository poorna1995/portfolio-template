// how to define the type for productsPageData

import { ProductCardProps } from "@/components/templates/ListPageTemplate/card";
import bluecomData from "./bluecomData";
import hivepathData from "./hivepathData";
import zelloData from "./zelloData";
import calpadData from "./calpadData";
import bluecomCentralData from "./bluecomCentralData";
import stylerData from "./stylerData";

import bluecomImage from "@/public/assets/products/bluecom.png";

import hivepathImage from "@/public/assets/products/hivepath.png";
import zelloImage from "@/public/assets/products/zello.png";
import bluecomCentralImage from "@/public/assets/products/bluecom-central.png";
import stylerImage from "@/public/assets/products/styler.png";
import calpadImage from "@/public/assets/products/calpad.png";
import { StaticImageData } from "next/image";

export interface ListProductCardProps extends ProductCardProps {
	detailsPageData: {
		introData?: {
			title?: string;
			buttonTitle?: string;
			content?: Array<{
				paragraph?: string;
				list: {
					type: string;
					data: Array<{ title: string; description?: string }>;
				};
			}>;
		};
		contributionData?: {
			title?: string;
			content?: Array<{
				paragraph?: string;
				list?: {
					type?: string;
					data?: Array<{
						title?: string;
						list?: {
							type?: string;
							data?: Array<{ title: string }>;
						};
					}>;
				};
			}>;
		};
		productMedia?: {
			image?: Array<{
				src: string | StaticImageData | undefined;
				alt?: string;
			}>;
			video?: Array<{
				src: string;
				alt?: string;
			}>;
		};
	};
	linkTitle: string;
	timeline?: string;
}

const productsPageData: {
	heroTitle: string;
	heroDescription: string;
	listData: Array<ListProductCardProps>;
} = {
	heroTitle: "Product Portfolio",
	heroDescription:
		"Spearheading the development of diverse end-to-end product portfolios across B2C and B2B domains.",
	listData: [
		{
			title: "Bluecom.ai",
			description: "E-commerce SaaS for streamlined product life cycle",
			backgroundColor: "#3F69FE",
			count: 1,
			countTextColor: "#3F69FE",
			image: bluecomImage,
			link: "bluecom",
			website: "https://bluecom.ai",
			linkTitle: "Bluecom",
			timeline: "Dec 2022 - Present",
			detailsPageData: bluecomData,
			imageStyles: {
				maxHeight: "600px",
				maxWidth: "600px",
				fitObject: "fill",
				align: "center",
			},
		},
		{
			title: "Hivepath.io",
			description: "Professional networking Platform.",
			backgroundColor: "#6C60BA",
			count: 2,
			countTextColor: "#6C60BA",
			image: hivepathImage,
			link: "hivepath",
			website: "https://hivepath.io",
			linkTitle: "Hivepath",
			timeline: "July 2021 - March 2022",
			detailsPageData: hivepathData,
			imageStyles: {
				maxHeight: "600px",
				maxWidth: "600px",
				fitObject: "fill",
				align: "center",
			},
		},
		{
			title: "Zello.live",
			description: "Andriod photo widget sharing platform",
			backgroundColor: "#739459",
			count: 3,
			countTextColor: "#739459",
			image: zelloImage,
			link: "zello",
			website: "https://zello.live",
			linkTitle: "Zello",
			timeline: "March 2022 - July 2022",
			detailsPageData: zelloData,
			imageStyles: {
				maxHeight: "600px",
				maxWidth: "600px",
				fitObject: "fill",
				align: "center",
			},
		},
		{
			title: "Calpad.co",
			description: "A calendar booking platform for the professionals",
			backgroundColor: "#D0B160",
			count: 4,
			countTextColor: "#D0B160",
			image: calpadImage,
			link: "calpad",
			website: "https://calpad.vercel.app",
			linkTitle: "Calpad",
			timeline: "Oct 2022 - Dec 2022",
			detailsPageData: calpadData,
			imageStyles: {
				maxHeight: "600px",
				maxWidth: "600px",
				fitObject: "fill",
				align: "center",
			},
		},
		{
			title: "Bluecom.central",
			description: "E-commerce SaaS - Lists of stores",
			backgroundColor: "#123578",
			count: 5,
			countTextColor: "#123578",
			image: bluecomCentralImage,
			link: "bluecom-central",
			website: "https://bluecom.ai",
			linkTitle: "Bluecom Central",
			timeline: "Dec 2022 - Present",
			detailsPageData: bluecomCentralData,
			imageStyles: {
				maxHeight: "600px",
				maxWidth: "600px",
				fitObject: "fill",
				align: "center",
			},
		},
		{
			title: "Styler",
			description:
				"Transformer architecture has been a pivotal discovery in past five years of deep learning.",
			backgroundColor: "#591192",
			count: 6,
			countTextColor: "#591192",

			image: stylerImage,
			link: "styler",
			website: "https://booking.hivepath.io/anoos",
			linkTitle: "Styler",
			timeline: "Feb 2022 - July 2022",
			// timelineTextcolor:"#591192",
			detailsPageData: stylerData,
			imageStyles: {
				maxHeight: "600px",
				maxWidth: "300px",
				fitObject: "fill",
				align: "center",
			},
		},
	],
};

export default productsPageData;
