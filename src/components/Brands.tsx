import { BrandItems } from '../data'
import BrandItem from './shared/BrandItem'

function Brands() {
	return (
		<div className='bg-white py-10'>
			<div className='container'>
				<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black'>
					Наши Бренды
				</h2>
				<div className='w-[80%] h-[2px] mx-auto bg-gradient-to-r from-teal-500 to-blue-600 my-4' />
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center mx-auto'>
					{BrandItems.map((item, idx) => (
						<BrandItem image={item.image} key={idx} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Brands
