import AOS from 'aos'
import { useEffect } from 'react'
import CountUp from 'react-countup'

function Status(): JSX.Element {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<div className='relative overflow-hidden'>
			<img
				className='fixed w-full h-full top-0 left-0 z-[-1] object-cover'
				src='https://www.printzapravka.uz/assets/fixed-fon-CsSjUvgT.jpg'
				alt='Background'
			/>
			<div className='container relative z-10 py-6'>
				<div
					data-aos='fade-right'
					data-aos-duration='1000'
					data-aos-offset='50'
					className='flex flex-wrap justify-center items-center gap-2 text-gray-800'
				>
					{/* Years on the Market */}
					<div className='flex flex-col gap-4 items-center p-5 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md max-w-[320px] w-full'>
						<h2 className='font-[Furore] font-semibold text-[50px] text-white'>
							{
								<CountUp
									start={0}
									end={6}
									enableScrollSpy={true}
									duration={3}
								/>
							}
						</h2>
						<h3 className='font-[Furore] font-normal text-[24px] mb-3 text-white text-center'>
							ЛЕТ НА РЫНКЕ
						</h3>
						<p className='max-w-[280px] w-full text-center text-white mx-auto mb-3 text-sm'>
							Огромный опыт в ремонте и обслуживании принтеров
						</p>
						<div className='w-full h-[1px] bg-gray-300' />
					</div>

					{/* Printers Repaired */}
					<div className='flex flex-col gap-4 items-center p-5 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md max-w-[320px] w-full'>
						<h2 className='font-[Furore] font-semibold text-[50px] text-white'>
							{
								<CountUp
									start={0}
									end={14000}
									enableScrollSpy={true}
									duration={3}
								/>
							}
						</h2>
						<h3 className='font-[Furore] font-normal text-[24px] mb-3 text-white text-center'>
							ПРИНТЕРОВ ОТРЕМОНТИРОВАНО
						</h3>
						<p className='max-w-[280px] w-full text-center text-white mx-auto mb-3 text-sm'>
							Выполнено более 20 000 ремонтов принтеров
						</p>
						<div className='w-full h-[1px] bg-gray-300' />
					</div>

					{/* Reviews */}
					<div className='flex flex-col gap-4 items-center p-5 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md max-w-[320px] w-full'>
						<h2 className='font-[Furore] font-semibold text-[50px] text-white'>
							{
								<CountUp
									start={0}
									end={2500}
									enableScrollSpy={true}
									duration={3}
								/>
							}
						</h2>
						<h3 className='font-[Furore] font-normal text-[24px] mb-3 text-white text-center'>
							ОТЗЫВОВ
						</h3>
						<p className='max-w-[280px] w-full text-center text-white mx-auto mb-3 text-sm'>
							Наши клиенты довольны качеством работы
						</p>
						<div className='w-full h-[1px] bg-gray-300' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Status
