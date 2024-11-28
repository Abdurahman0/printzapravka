import AOS from 'aos'
import { useEffect, useState } from 'react'

function Hero() {
	const [offset, setOffset] = useState({ x: 0, y: 0 })

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY, currentTarget } = e

		const rect = currentTarget.getBoundingClientRect()
		const x = ((clientX - rect.left) / rect.width - 0.5) * 100 // Adjst sensitivity
		const y = ((clientY - rect.top) / rect.height - 0.5) * 100

		setOffset({ x, y })
	}

	const handleMouseLeave = () => {
		setOffset({ x: 0, y: 0 }) // Reset position when the mouse leaves
	}

	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<>
			<div className='bg-gradient-to-r from-[#1B2838] to-[#2A3F54] pt-20 pb-20 relative overflow-hidden md:pb-36 md:pt-24'>
				<div className='container mx-auto px-2 sm:px-6 lg:px-20 relative z-10'>
					<div className='flex md:w-[1200px] flex-col md:flex-row lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-12 relative mt-16'>
						{/* Text Section */}
						<div className='lg:w-1/2 flex flex-col justify-center text-start text-white space-y-6 sm:px-4 relative z-10'>
							<h2
								data-aos='fade-right'
								data-aos-duration='1500'
								data-aos-offset='50'
								data-aos-delay='500'
								className='text-lg font-semibold text-indigo-400 tracking-widest uppercase'
							>
								Надежность и качество
							</h2>
							<h1
								data-aos='fade-right'
								data-aos-duration='1500'
								data-aos-offset='50'
								data-aos-delay='500'
								className='text-3xl md:text-5xl font-bold leading-tight text-shadow-lg text-white'
							>
								Ремонт и заправка картриджей. Оперативный выезд мастера на дом и
								в офис!
							</h1>
							<p
								data-aos='fade-up'
								data-aos-duration='1500'
								data-aos-offset='50'
								data-aos-delay='500'
								className='text-md text-gray-300 leading-relaxed max-w-md'
							>
								Предлагаем качественный ремонт принтеров, компьютеров,
								моноблоков и другой офисной техники, а также заправку картриджей
								с гарантией.
							</p>
							<div className='flex space-x-4 mt-4'>
								<a
									href='/mastercall'
									data-aos='fade-right'
									data-aos-duration='1500'
									data-aos-offset='50'
									data-aos-delay='500'
									className='bg-indigo-500 text-[12px] sm:text-[16px] bg-opacity-20 text-indigo-300 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-40 transition duration-300 transform hover:scale-105'
								>
									Заказать ремонт
								</a>
								<a
									href='/about'
									data-aos='fade-left'
									data-aos-duration='1500'
									data-aos-offset='50'
									data-aos-delay='500'
									className='border-2 text-[12px] sm:text-[16px] border-indigo-400 text-indigo-300 py-3 px-8 rounded-lg hover:bg-indigo-400 hover:text-white transition duration-300 transform hover:scale-105'
								>
									Узнать подробнее
								</a>
							</div>
						</div>
						{/* Image Section */}
						<div
							className='lg:w-1/2 flex justify-center items-center relative overflow-hidden rounded-2xl md:shadow-2xl w-[380px] h-[400px] md:w-[450px] md:h-[450px] cursor-pointer'
							onMouseMove={handleMouseMove}
							onMouseLeave={handleMouseLeave}
						>
							<img
								src='https://www.printzapravka.uz/assets/introimages-BtPiIBjT.png'
								alt='Ремонт принтеров и заправка картриджей'
								className='w-full rounded-2xl transition-transform duration-300 ease-out absolute'
								style={{
									transform: `translate(${offset.x}px, ${offset.y}px)`,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
