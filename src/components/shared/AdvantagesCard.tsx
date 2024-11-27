interface ServiceProps {
	title: string
	subtitle: string
	description: string
	image: string
}

interface ServiceCardProps {
	service: ServiceProps
}

export const AdvantagesCard = ({ service }: ServiceCardProps) => (
	<div className={`relative w-full h-[250px] mx-auto`}>
		<div className='relative h-full group'>
			<div className='rounded-3xl w-80 md:w-auto mx-auto h-full overflow-hidden bg-[#EFEFEF] shadow-lg transition-transform duration-500 transform group-hover:scale-105 group-hover:shadow-2xl hover:rotate-3'>
				<img
					src={service.image}
					alt={service.subtitle}
					className='w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-40 transition-opacity duration-300'></div>
				<div className='absolute bottom-0 p-6 w-full bg-gradient-to-t from-black text-white bg-opacity-70 group-hover:bg-opacity-50 transition-all duration-300'>
					<h3 className='text-xl font-bold mb-2 transform group-hover:scale-110 transition-transform duration-300'>
						{service.title}
					</h3>
					<h4 className='text-lg font-medium mb-4 transform group-hover:scale-105 transition-transform duration-300'>
						{service.subtitle}
					</h4>
					<button className='py-2 px-6 text-white font-semibold rounded-full border-2 border-gray-800 hover:bg-slate-300 hover:text-blue-700 transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50'>
						Подробнее
					</button>
				</div>
			</div>
			<div className='absolute inset-0 p-4 bg-[#1B2838] bg-opacity-95 rounded-3xl shadow-lg transition-transform duration-500 opacity-0 translate-y-full pointer-events-none group-hover:translate-y-0'>
				<button className='absolute top-2 right-2 p-2 text-white text-xl font-semibold rounded-full transition-transform duration-200 focus:outline-none'>
					✕
				</button>
				<h3 className='text-sm sm:text-xl md:text-2xl font-bold text-white mb-2'>
					{service.subtitle}
				</h3>
				<p className='text-white text-sm sm:text-lg mb-4'>
					{service.description}
				</p>
			</div>
		</div>
	</div>
)
