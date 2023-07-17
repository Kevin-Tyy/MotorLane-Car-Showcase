"use client";
import { ManufucturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";
import Image from "next/image";
import { Fragment, useState } from "react";
const SearchManufucturer = ({
	selected,
	setSelected,
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
		<div className="flex-1 max-sm:w-full flex justify-start items-center">
			<Combobox value={selected} onChange={setSelected}>
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
						className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white dark:bg-neutral-800 outline-none cursor-pointer text-sm"
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
									className="cursor-default select-none py-2 pl-10 pr-4">
									Create &ldquot;{query}&rdquot;
								</Combobox.Option>
							) : (
								filteredManufuctures.map((item, index) => (
									<Combobox.Option
										key={index}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active ? "bg-primary-blue text-white" : "text-gray-900 dark:text-slate-400 dark:bg-neutral-900"
											}`
										}
										value={item}>
										{item}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

export default SearchManufucturer;
