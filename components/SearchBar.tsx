"use client";

import { SearchManufucturer } from "./";
import { useState } from "react";
const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState("");
	const handleSearch = () => {};
	return (
		<form action="" className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufucturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
			</div>
		</form>
	);
};

export default SearchBar;
