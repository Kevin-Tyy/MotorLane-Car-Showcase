import CustomButton from "./CustomButton";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
const Navbar = () => {
	return (
		<header className="w-full absolute z-10">
			<nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4">
				<Logo/>
				<div className="flex items-center  gap-2 md:gap-6">
					<ThemeSwitcher />
					<CustomButton
						title="Sign in"
						btnType="button"
						containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] border md:border-none"
					/>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
