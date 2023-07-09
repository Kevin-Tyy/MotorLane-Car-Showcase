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
const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState("");
	const router = useRouter();
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (manufacturer === "" && model === "") {
			return alert("Please  fill in the search bar");
		}
		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
	};
	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);
		if (model) {
			searchParams.set("model", model);
		} else {
			searchParams.delete("model");
		}
		if (manufacturer) {
			searchParams.set("manufacturer", model);
		} else {
			searchParams.delete("manufacturer");
		}
		const newPathname = `${
			window.location.pathname
		}?${searchParams.toString()}`;
		router.push(newPathname);
	};
	const [model, setModel] = useState("");

	return (
		<form action="" className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufucturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton customClasses="sm:hidden" />
				<div className="searchbar__item">
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
						value={model}
						onChange={(e) => setModel(e.target.value)}
						placeholder="Tiguan"
						className="searchbar__input"
					/>
				</div>
				<SearchButton customClasses="sm:hidden" />
			</div>
			<SearchButton customClasses="max-sm:hidden" />
		</form>
	);
};

export default SearchBar;
