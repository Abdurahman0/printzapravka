import AOS from 'aos'
import { useEffect } from 'react'

interface ISaleCard {
	image: string
	name: string
	description1: string
	description2: string
	description3: string
}

function SaleCard({ image }: ISaleCard) {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div className='mx-auto flex flex-row items-center justify-center'>
			<div
				data-AOS='fade-right'
				data-aos-duration='1000'
				data-aos-offset='50'
				className='w-[70%] p-2 bg-gradient-to-r from-[#2A3F54] to-[#1B2838] rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row my-2 aos-init aos-animate'
			>
				<div className='md:w-1/2 flex justify-center items-center bg-gradient-to-r from-[#0F1923] to-[#5e6369] p-4 rounded-lg shadow-lg'>
					<img
						className='w-[180px]  p-2  object-contain rounded-xl shadow-xl transform transition-all hover:scale-105'
						src={image}
						alt='Canon'
					/>
				</div>
				<div className='md:w-1/2 px-4 py-1 flex flex-col justify-center'>
					<h3 className='text-lg font-bold text-white mb-2'>
						Партнерство с <span className='text-red-600'>Canon</span>
					</h3>
					<p className='text-white text-md leading-relaxed'>
						<span>
							Мы уже более 10 лет предоставляем услуги по ремонту принтеров и
							заправке картриджей{' '}
						</span>
						<span>
							<span className='font-semibold text-red-600'>Canon</span>.
							Работаем с оригинальными комплектующими и знаем все нюансы
							продукции{' '}
						</span>
						<span>
							<span className='font-semibold text-red-600'>Canon</span>, что
							позволяет нам обеспечивать надежность и высокое качество ремонта.
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default SaleCard
