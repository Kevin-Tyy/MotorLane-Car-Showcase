import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'
import ThemeSwitcher from './ThemeSwitcher'
const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4'>
            <Link href="/d" className='flex justify-center items-center'>
                <Image src="/logo.svg" alt='logo' width={118} height={18} className='object-contain'/>
            </Link>
            <ThemeSwitcher/>
            <CustomButton title='Sign in' btnType='button' containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'/>
        </nav>  
    </header>
  )
}

export default Navbar