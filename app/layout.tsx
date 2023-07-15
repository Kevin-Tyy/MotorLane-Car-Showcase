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
		<html lang="en" suppressHydrationWarning>
			<Providers>
				<body className="relative dark:bg-neutral-900 transition duration-500">
					<Navbar />
					<main>{children}</main>
					<Footer />
				</body>
			</Providers>
		</html>
	);
}
