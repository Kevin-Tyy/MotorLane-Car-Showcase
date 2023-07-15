import { Footer, Navbar } from "@/components";
import "../styles/globals.css";
import Providers from "./Providers";

export const metadata = {
	title: "Car Hub",
	description: "Discover the best cars in the world",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="relative transition duration-1000">
				<Providers>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
