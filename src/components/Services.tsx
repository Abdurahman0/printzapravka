import { ServiceData } from '../data'
import ServiceCard from './shared/ServiceCard'

function Services() {
	return (
		<div className='md:px-4 py-4 md:py-16 bg-white'>
			<div className='container w-full md:p-4 grid grid-cols-1 md:flex md:flex-wrap justify-center gap-4'>
				{ServiceData.map((item, idx) => (
					<ServiceCard {...item} key={idx} />
				))}
			</div>
		</div>
	)
}

export default Services
