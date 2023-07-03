"use client";
import { ManufucturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";
import Image from "next/image";
import { Fragment, useState } from "react";
const SearchManufucturer = ({
	manufacturer,
	setManufacturer,
}: ManufucturerProps) => {
	const [query, setQuery] = useState("");
	const filteredManufuctures =
		query === ""
			? manufacturers
			: manufacturers.filter((item) =>
					item
						.toLocaleLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  );
	return (
		<div className="search-manufacturer">
			<Combobox value={manufacturer} onChange={setManufacturer}>
				<div className="relative w-full">
					<Combobox.Button className="absolute top-[14px]">
						<Image
							src="/car-logo.svg"
							alt="car-logo"
							width={20}
							height={20}
							className="ml-4"
						/>
					</Combobox.Button>
					<Combobox.Input
						className="search-manufacturer__input"
						placeholder="Volkswagen"
						displayValue={(manufucturer: string) => manufucturer}
						onChange={(e: any) => setQuery(e.target.value)}
					/>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => {}}>
						<Combobox.Options>
							{filteredManufuctures.length == 0 && query !== "" ? (
								<Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create "{query}"
                </Combobox.Option>
							): 
                (
                  filteredManufuctures.map((item , index)=> (
                    <Combobox.Option key={index} className={({active}) => `relative  search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`} value={item}>
                      {item}
                    </Combobox.Option>
                  ))
                )
              }
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

export default SearchManufucturer;