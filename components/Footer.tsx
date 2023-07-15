import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
const Footer = () => {
	return (
		<footer className="flex flex-col text-black-100 mt-5  px-20">
			<div className="flex max-md:flex-col flex-wrap justify-between gap-5 border-t border-slate-600 sm:px-16 px-6 py-10">
				<div className="flex flex-col justify-start items-start gap-6">
					<Image
						src="/logo.svg"
						alt="logo"
						width={118}
						height={18}
						className="object-contain"
					/>
					<p className="text-base text-gray-700 dark:text-slate-400">
						Motor Lane 2024 all rights reserved &copy;
					</p>
				</div>
				<div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
					{footerLinks.map((link, index) => (
						<div key={index} className="flex flex-col gap-6 text-base min-w-[170px]">
							<h3 className="dark:text-slate-200">{link.title}</h3>
							{link.links.map((item, index) => (
								<Link key={index} href={item.url} className="text-gray-500">
									{item.title}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-between items-center flex-wrap mt-10 border-t border-slate-600 sm:px-16 px-6 py-10">
				<p className="dark:text-slate-200">@2023 Car Hub. All rights reserved</p>
				<div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
					<Link href={"/"} className="text-gray-500">
						Privacy policy
					</Link>
					<Link href={"/"} className="text-gray-500">
						Terms of use
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
