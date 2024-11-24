import AOS from 'aos'
import { useEffect } from 'react'

interface BrandProps {
	image: string
}

function BrandItem({ image }: BrandProps) {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div
			data-aos='fade-right'
			data-aos-duration='1000'
			data-aos-offset='50'
			className='Card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out max-w-[300px] w-full p-4 m-4 flex justify-center items-center overflow-hidden transform hover:scale-105 aos-init aos-animate'
		>
			<img
				src={image}
				alt='Brand Logo'
				className='w-full h-auto object-contain transition-transform duration-300 ease-in-out transform hover:scale-110'
			/>
		</div>
	)
}

export default BrandItem
