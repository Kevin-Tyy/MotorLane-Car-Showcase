"use client";
import { useState, useEffect, Fragment } from "react";
import { ThemeProvider } from "next-themes";
const Providers = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState(false);
	if (!mounted) {
		<Fragment>{children}</Fragment>;
	}
	useEffect(() => {
		setMounted(true);
	}, []);

	return <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>;
};

export default Providers;
