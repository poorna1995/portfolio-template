import { ListProductCardProps } from "../products";
import bluecomImage from "@/public/assets/products/bluecom.png";
import hivepathImage from "@/public/assets/products/hivepath.png";
import zelloImage from "@/public/assets/products/zello.png";
import bluecomCentralImage from "@/public/assets/products/bluecom-central.png";
import stylerImage from "@/public/assets/products/styler.png";
import calpadImage from "@/public/assets/products/calpad.png";
import bluecomData from "../products/bluecomData";
import hivepathData from "../products/hivepathData";
import zelloData from "../products/zelloData";
import calpadData from "../products/calpadData";
import bluecomCentralData from "../products/bluecomCentralData";
import stylerData from "../products/stylerData";

const researchData: {
	heroTitle: string;
	heroDescription: string;
	listData: Array<ListProductCardProps>;
} = {
	heroTitle: "My Research Work",
	heroDescription:
		"Ventured into multiple areas of AI through a series of intriguing research projects.",
	listData: [
		{
			title: "Bluecom.ai",
			description: "E-commerce SaaS for streamlined product life cycle",
			backgroundColor: "#3F69FE",
			count: 1,
			countTextColor: "white",
			image: bluecomImage,
			link: "bluecom",
			website: "https://bluecom.ai",
			linkTitle: "Bluecom",
			timeline: "Dec 2022 - Present",
			detailsPageData: bluecomData,
		},
		{
			title: "Hivepath.io",
			description: "Professional networking Platform.",
			backgroundColor: "#6C60BA",
			count: 2,
			countTextColor: "white",
			image: hivepathImage,
			link: "hivepath",
			website: "https://hivepath.io",
			linkTitle: "Hivepath",
			timeline: "July 2021 - March 2022",
			detailsPageData: hivepathData,
		},
		{
			title: "Zello.live",
			description: "Andriod photo widget sharing platform",
			backgroundColor: "#739459",
			count: 3,
			countTextColor: "white",
			image: zelloImage,
			link: "zello",
			website: "https://zello.live",
			linkTitle: "Zello",
			timeline: "March 2022 - July 2022",
			detailsPageData: zelloData,
		},
		{
			title: "Calpad.co",
			description: "A calendar booking platform for the professionals",
			backgroundColor: "#D0B160",
			count: 4,
			countTextColor: "white",
			image: calpadImage,
			link: "calpad",
			website: "https://calpad.vercel.app",
			linkTitle: "Calpad",
			timeline: "Oct 2022 - Dec 2022",
			detailsPageData: calpadData,
		},
		{
			title: "Bluecom.central",
			description: "E-commerce SaaS - Lists of stores",
			backgroundColor: "#123578",
			count: 5,
			countTextColor: "white",
			image: bluecomCentralImage,
			link: "bluecom-central",
			website: "https://bluecom.ai",
			linkTitle: "Bluecom Central",
			timeline: "Dec 2022 - Present",
			detailsPageData: bluecomCentralData,
		},
		{
			title: "Styler",
			description:
				"Transformer architecture has been a pivotal discovery in past five years of deep learning.",
			backgroundColor: "#591192",
			count: 6,
			countTextColor: "white",
			image: stylerImage,
			link: "styler",
			website: "https://booking.hivepath.io/anoos",
			linkTitle: "Styler",
			timeline: "Feb 2022 - July 2022",
			detailsPageData: stylerData,
			imageStyles: {
				maxHeight: "600px",
				maxWidth: "400px",
			},
		},
	],
};

export default researchData;
