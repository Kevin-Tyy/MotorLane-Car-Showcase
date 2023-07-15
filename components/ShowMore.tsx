"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
const Showmore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
	const router = useRouter();
	const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10
		setLimit(newLimit)
	};
	return (
		<div className="w-full flex-center mt-10 gap-5">
			{!isNext && (
				<CustomButton
					title="Show more"
					btnType="button"
					containerStyles="bg-primary-blue rounded-full text-white"
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
};

export default Showmore;
