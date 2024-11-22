import { useEffect } from 'react'
import AOS from 'aos'
import { cardData } from '../data'
import { InfoCard } from './shared/InfoCard'

function Advantages() {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<div className='bg-white w-full relative p-2 md:p-9'>
			<img
				className='absolute hidden md:flex max-w-[500px] w-full left-[10%] md:top-[10%] xl:top-[15%] opacity-70'
				src='https://www.printzapravka.uz/assets/fon-viezd-BvJlsXsK.png'
				alt=''
			/>
			<div className='container md:p-5'>
				<div className='features'>
					<h2
						data-aos='fade-up'
						className='text-3xl p480:text-4xl md:text-5xl font-bold text-center text-black aos-init aos-animate'
					>
						Наши Перемущество
					</h2>
					<div className='w-[80%] h-[2px] mx-auto bg-gradient-to-r from-teal-500 to-blue-600 my-4'></div>

					<div className='cards my-10 w-full flex flex-col space-y-4'>
						<div className='card-items-container w-full md:w-[90%] xl:w-[80%] mx-auto gap-10 flex flex-col items-center'>
							{cardData.map((card, idx) => (
								<InfoCard {...card} key={idx} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Advantages
