"use client";
// import { useState, useEffect, Fragment } from "react";
import { ThemeProvider } from "next-themes";
const Providers = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
