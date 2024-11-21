function Navbar() {
	return (
		<div className='border-r-emerald-700 h-[80px] bg-[#1B2838] fixed w-full z-50'>
			<div className='container relative h-full flex justify-between items-center px-[25px]'>
				<a href='/'>
					<div className=' w-[140px] flex'>
						<img
							src='https://www.printzapravka.uz/assets/logo-print-BsJKyGnY.png'
							className='rounded-md'
							alt=''
						/>
					</div>
				</a>
				<ul className='text-zinc-300 hidden gap-5 min-[768px]:flex min-[768px]:items-center'>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<a href='/'>Главная</a>
					</li>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<a href='/about'>О нас</a>
					</li>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<a href='/uslug'>Услуги</a>
					</li>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<a href='/brand'>Продажа и Бренды</a>
					</li>
					<li className='border-2 rounded-md border-indigo-500 px-4 py-1 text-white transform transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#1B2838] to-[#2A3F54] hover:text-white hover:scale-105 hover:shadow-lg'>
						<a href='/mastercall'>Вызвать мастера</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
