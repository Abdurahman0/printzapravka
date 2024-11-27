import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function MobileModal() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden' // Prevent scrolling
		} else {
			document.body.style.overflow = '' // Restore scrolling
		}

		return () => {
			document.body.style.overflow = '' // Cleanup on unmount
		}
	}, [isMobileMenuOpen])

	return (
		<>
			{/* Menu Toggle Button */}
			<button
				onClick={toggleMobileMenu}
				className='md:hidden text-2xl p-2 focus:outline-none'
				aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
			>
				{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
			</button>

			{/* Overlay */}
			{isMobileMenuOpen && (
				<div
					className={`overlay ${isMobileMenuOpen ? 'open' : ''}`}
					onClick={toggleMobileMenu} // Close menu when clicking outside
				></div>
			)}

			{/* Mobile Menu */}
			<nav
				className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
				aria-hidden={!isMobileMenuOpen}
			>
				<ul className='flex text-white flex-col gap-5 items-start p-4'>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<a href='/' onClick={toggleMobileMenu}>
							Главная
						</a>
					</li>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<a href='/about' onClick={toggleMobileMenu}>
							О нас
						</a>
					</li>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<a href='/uslug' onClick={toggleMobileMenu}>
							Услуги
						</a>
					</li>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<a href='/brand' onClick={toggleMobileMenu}>
							Продажа и Бренды
						</a>
					</li>
					<li className='border-2 rounded-md border-indigo-500 px-4 py-1 text-white transform transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#1B2838] to-[#2A3F54] hover:scale-105 hover:shadow-lg'>
						<a href='/mastercall' onClick={toggleMobileMenu}>
							Вызвать мастера
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default MobileModal
