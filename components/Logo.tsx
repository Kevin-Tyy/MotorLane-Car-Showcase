import React from "react";
import Link from 'next/link'
import Image from "next/image";

const Logo = () => {
	return (
		<Link href="/" className="flex justify-center gap-2 items-center">
			<Image
				src="/steering-wheel.svg"
				alt="logo"
				width={30}
				height={30}
				className="object-contain"
			/>
			<p className="font-black font-mono text-xl text-slate-700 dark:text-slate-200">Motor Lane</p>
		</Link>
	);
};

export default Logo;
