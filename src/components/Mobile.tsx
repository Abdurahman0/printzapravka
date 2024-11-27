import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function MobileModal() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	useEffect(() => {
		// Prevent scrolling when the modal is open
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden' // Prevent body scroll
		} else {
			document.body.style.overflow = '' // Restore scroll when closed
		}

		return () => {
			document.body.style.overflow = '' // Cleanup when component is unmounted
		}
	}, [isMobileMenuOpen])

	// Handle navigation and closing modal
	const handleLinkClick = (href: string, e: React.MouseEvent) => {
		e.preventDefault() // Prevent default anchor link behavior
		setIsMobileMenuOpen(false) // Close modal

		// Navigate after a slight delay to allow the modal to close
		setTimeout(() => {
			window.location.href = href // Navigate to the link
		}, 200) // Adjust delay time if necessary
	}

	return (
		<>
			{/* Menu Toggle Button */}
			<button
				onClick={toggleMobileMenu}
				className='md:hidden text-2xl p-2 focus:outline-none'
				aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
			>
				{isMobileMenuOpen ? (
					<FaTimes color='white' />
				) : (
					<FaBars color='white' />
				)}
			</button>

			{/* Overlay */}
			{isMobileMenuOpen && (
				<div
					className='overlay'
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
						<a href='/' onClick={e => handleLinkClick('/', e)}>
							Главная
						</a>
					</li>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<a href='/about' onClick={e => handleLinkClick('/about', e)}>
							О нас
						</a>
					</li>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<a href='/uslug' onClick={e => handleLinkClick('/uslug', e)}>
							Услуги
						</a>
					</li>
					<li className='hover:scale-105 hover:font-bold font-medium transition-all duration-300'>
						<a href='/brand' onClick={e => handleLinkClick('/brand', e)}>
							Продажа и Бренды
						</a>
					</li>
					<li className='border-2 rounded-md border-indigo-500 px-4 py-1 text-white transform transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#1B2838] to-[#2A3F54] hover:scale-105 hover:shadow-lg'>
						<a
							href='/mastercall'
							onClick={e => handleLinkClick('/mastercall', e)}
						>
							Вызвать мастера
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default MobileModal
