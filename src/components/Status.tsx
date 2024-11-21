import AOS from 'aos'
import { useEffect, useState } from 'react'

function Status(): JSX.Element {
	// Define the state type
	interface Counts {
		years: number
		printers: number
		reviews: number
	}

	const [counts, setCounts] = useState<Counts>({
		years: 0,
		printers: 0,
		reviews: 0,
	})

	/**
	 * Animates a counter from 0 to a specified end value.
	 *
	 * @param endValue - The final value to count to
	 * @param duration - Total duration of the animation in milliseconds
	 * @param callback - Function to update the state with the current count
	 */
	const animateCount = (
		endValue: number,
		duration: number,
		callback: (value: number) => void
	): void => {
		const startTime = performance.now()

		const updateCounter = (currentTime: number): void => {
			const elapsedTime = currentTime - startTime
			const progress = Math.min(elapsedTime / duration, 1) // Cap progress to 1
			const currentValue = Math.round(progress * endValue)

			callback(currentValue)

			if (progress < 1) {
				requestAnimationFrame(updateCounter)
			}
		}

		requestAnimationFrame(updateCounter)
	}

	useEffect(() => {
		AOS.init()

		// Total duration for all counters
		const totalDuration = 3000

		// Animate all counters
		animateCount(6, totalDuration, value =>
			setCounts(prev => ({ ...prev, years: value }))
		)
		animateCount(14000, totalDuration, value =>
			setCounts(prev => ({ ...prev, printers: value }))
		)
		animateCount(2500, totalDuration, value =>
			setCounts(prev => ({ ...prev, reviews: value }))
		)
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
							{counts.years}
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
							{counts.printers}
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
							{counts.reviews}
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
