"use client";
import Image from "next/image";
import { SearchManufucturer } from "./";
import { useState } from "react";
// import { Router } from "next/router";
import { useRouter } from "next/navigation";
const SearchButton = ({ customClasses }: { customClasses: string }) => (
	<button type="submit" className={`-ml-3 z-10 ${customClasses}`}>
		<Image
			src="/magnifying-glass.svg"
			alt="magnifying glass"
			width={40}
			height={40}
			className="object-contain"
		/>
	</button>
);
const SearchBar = ({setManufacturer, setModel } : any) => {
	const [searchManufacturer , setSearchManufacturer] = useState("");
	const [searchModel , setSearchModel] = useState("");
	const router = useRouter();
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchManufacturer === "" && searchModel === "") {
			return alert("Please  fill in the search bar");
		}

		setModel(searchModel)
		setManufacturer(searchManufacturer)
	};
	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);
		if (model) {
			searchParams.set("model", model);
		} else {
			searchParams.delete("model");
		}
		if (manufacturer) {
			searchParams.set("manufacturer", manufacturer);
		} else {
			searchParams.delete("manufacturer");
		}
		const newPathname = `${
			window.location.pathname
		}?${searchParams.toString()}`;
		router.push(newPathname);
	};

	return (
		<form action="" className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl" onSubmit={handleSearch}>
			<div className="flex-1 max-sm:w-full flex justify-start items-center relative">
				<SearchManufucturer
					selected={searchManufacturer}
					setSelected={setSearchManufacturer}
				/>
				<SearchButton customClasses="sm:hidden" />
				<div className="flex-1 max-sm:w-full flex justify-start items-center relative">
					<Image
						src="/model-icon.png"
						alt="model icon"
						width={25}
						height={25}
						className="absolute w-[20px] h-[20px] ml-4 "
					/>
					<input
						type="text"
						name="model"
						value={searchModel}
						onChange={(e) => setSearchModel(e.target.value)}
						placeholder="Tiguan"
						className="w-full h-[48px] pl-12 p-4 bg-light-white dark:bg-neutral-800 rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
					/>
				</div>
				<SearchButton customClasses="sm:hidden" />
			</div>
			<SearchButton customClasses="max-sm:hidden" />
		</form>
	);
};

export default SearchBar;
