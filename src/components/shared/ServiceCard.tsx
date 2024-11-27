import { useEffect } from 'react'
import AOS from 'aos'
interface IServiceData {
	image: string
	title: string
}

function ServiceCard({ image, title }: IServiceData) {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<>
			<a
				href='/mastercall'
				data-aos='fade-right'
				data-aos-duration='1500'
				data-aos-offset='50'
				data-aos-delay='500'
			>
				<div className='w-[90%] h-[200px] sm:h-[220px] md:w-[220px] cursor-pointer md:h-[120px] overflow-hidden relative group rounded-lg shadow-lg transition-all duration-500'>
					<div className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-purple-500 border-4 border-transparent rounded-lg transition-all duration-1000'></div>
					<div className='w-full h-full transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3'>
						<img
							src={image}
							alt='Image'
							className='w-full h-full object-cover transition-transform duration-500'
						/>
					</div>
					<h3 className='title absolute z-10 text-white text-[12px] text-center w-[95%] font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 uppercase px-4 py-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-0 group-hover:scale-110 transition-all duration-500 rounded-xl shadow-lg'>
						{title}
					</h3>
					<div
						className='absolute w-full h-full flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold bg-gradient-to-b from-black via-transparent to-black bg-opacity-50 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out
						'
					>
						<span className='relative text-2xl font-bold bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent group-hover:stroke-[2px] group-hover:stroke-black transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6'>
							Связаться с нами
						</span>
					</div>
				</div>
			</a>
		</>
	)
}

export default ServiceCard
