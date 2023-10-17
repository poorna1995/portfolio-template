import productsPageData from "./pages/products";
import recognitionData from "./pages/recognition";
import researchData from "./pages/research";
import whitepapersPageData from "./pages/whitepapers";

export const navigationLinks = [
	{
		title: "About Me",
		href: "/",
		key: "",
	},
	{
		title: "Products",
		href: "/products",
		key: "products",
		pageData: productsPageData,
	},
	{
		title: "Recognition",
		href: "/recognition",
		key: "recognition",
		pageData: recognitionData,
		subMenu: [
			{
				title: "Best Employee Award",
				href: "/recognition/best-employee-award",
				key: "best-employee-award",
			},
			{
				title: "Worldquant",
				href: "/recognition/worldquant",
				key: "worldquant",
			},
		],
	},
	{
		title: "Whitepapers",
		href: "/whitepapers",
		key: "whitepapers",
		pageData: whitepapersPageData,
	},
	{
		title: "Research",
		href: "/research",
		key: "research",
		pageData: researchData,
	},
	{
		title: "Hobbies",
		href: "/hobbies",
		key: "hobbies",
	},
];
