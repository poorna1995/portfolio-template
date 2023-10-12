import productsPageData from "./pages/products";
import whitepapersPageData from "./pages/whitepapers";

export const navigationLinks = [
	{
		title: "About Me",
		href: "/about",
		key: "about",
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
		subMenu: [
			{
				title: "Best Employee Award",
				href: "/recognition/best-employee-award",
				key: "best-employee-award",
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
	},
	{
		title: "Hobbies",
		href: "/hobbies",
		key: "hobbies",
	},
];
