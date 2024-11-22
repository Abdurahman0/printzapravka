interface CardProps {
	title: string
	description: string
	duration: string
	durationLabel: string
	iconPath: string
	propsClass: string
}

export const InfoCard: React.FC<CardProps> = ({
	title,
	description,
	duration,
	durationLabel,
	iconPath,
	propsClass,
}) => {
	return (
		<div
			data-aos='fade-right'
			data-aos-duration='1000'
			data-aos-offset='50'
			className={`relative bg-white flex flex-col max-w-[450px] w-full px-8 py-2 border rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mx-auto transform hover:scale-105 ${propsClass}`}
		>
			<div className='absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-10 rounded-2xl pointer-events-none'></div>
			<div className='flex items-center space-x-5 relative z-10'>
				<div>
					<div className='flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-full w-16 h-16 shadow-md transition transform duration-300 ease-in-out hover:rotate-12 hover:scale-110'>
						<svg
							stroke='currentColor'
							fill='currentColor'
							strokeWidth='0'
							viewBox='0 0 512 512'
							height='30px'
							width='30px'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d={iconPath}></path>
						</svg>
					</div>
				</div>
				<div className='text-center md:text-start'>
					<h3 className='text-xl font-semibold text-gray-900 tracking-wide transition duration-300 ease-in-out hover:text-indigo-500'>
						{title}
					</h3>
					<p className='text-gray-700 mt-2 leading-relaxed'>{description}</p>
				</div>
			</div>
			<div className='md:absolute bottom-2 right-4 text-indigo-500 font-semibold text-lg flex justify-end space-x-1'>
				<span className='text-center'>{duration}</span>
				<span className='text-center'>{durationLabel}</span>
			</div>
		</div>
	)
}
