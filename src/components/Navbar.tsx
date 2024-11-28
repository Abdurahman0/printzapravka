import { NavLink } from 'react-router-dom'
import MobileModal from './Mobile'

function Navbar() {
	return (
		<div className='border-r-emerald-700 h-[80px] bg-[#1B2838] fixed w-full z-50'>
			<div className='container relative h-full flex justify-between items-center px-[25px]'>
				<NavLink to='/'>
					<div className=' w-[140px] flex'>
						<img
							src='https://www.printzapravka.uz/assets/logo-print-BsJKyGnY.png'
							className='rounded-md'
							alt=''
						/>
					</div>
				</NavLink>
				<ul className='text-zinc-300 hidden gap-5 md:flex md:items-center'>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<NavLink to='/'>Главная</NavLink>
					</li>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<NavLink to='/about'>О нас</NavLink>
					</li>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<NavLink to='/uslug'>Услуги</NavLink>
					</li>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<NavLink to='/brand'>Продажа и Бренды</NavLink>
					</li>
					<li className='border-2 rounded-md border-indigo-500 px-4 py-1 text-white transform transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#1B2838] to-[#2A3F54] hover:text-white hover:scale-105 hover:shadow-lg'>
						<NavLink to='/mastercall'>Вызвать мастера</NavLink>
					</li>
				</ul>
				<div className='absolute top-[20%] right-[2%] md:hidden'>
					<MobileModal />
				</div>
			</div>
		</div>
	)
}

export default Navbar
