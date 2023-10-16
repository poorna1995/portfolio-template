import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { sentient, supreme } from "@/styles/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Portfolio project",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cn(supreme.variable, sentient.variable)}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
