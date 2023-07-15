"use client"
import CustomButton from "./CustomButton";
import Logo from "./Logo";
import SignIn from "./SignIn";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState} from 'react'
const Navbar = () => {
	const [isOpen , setIsOpen] = useState(false)

	return (
		<header className="w-full absolute z-10">
			<nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4">
				<Logo/>
				<div className="flex items-center  gap-2 md:gap-6">
					<ThemeSwitcher />
					<CustomButton
						title="Sign in"
						btnType="button"
						handleClick={() => setIsOpen(true)}
						containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] border md:border-none"
					/>
				</div>
			</nav>
			<SignIn isOpen={isOpen} closeModal={() => setIsOpen(false)}/>
		</header>
	);
};

export default Navbar;
