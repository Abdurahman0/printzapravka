import { services } from '../data'
import { ServiceCard } from './shared/ServiceCard'

function Advantages() {
	return (
		<div className='bg-white'>
			<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black'>
				Наши Услуги
			</h2>
			<div className='w-[70%] h-[2px] mx-auto bg-gradient-to-r from-teal-500 to-blue-600 my-4' />
			<div className='grid grid-cols-[45%_20%_35%] gap-[20px] mt-10 w-full sm:max-w-[1200px] max-w-[800px]  mx-auto'>
				{services.slice(0, 3).map((service, idx) => (
					<ServiceCard key={idx} service={service} />
				))}
			</div>

			<div className='grid grid-cols-[25%_50%_25%] gap-[20px] mt-10 w-full sm:max-w-[1200px] max-w-[800px]  mx-auto'>
				{services.slice(3, 6).map((service, idx) => (
					<ServiceCard key={idx} service={service} />
				))}
			</div>
		</div>
	)
}

export default Advantages
