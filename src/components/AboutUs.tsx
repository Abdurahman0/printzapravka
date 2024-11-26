import { AboutUsData } from '../data'
import Footer from './Footer'
import Navbar from './Navbar'
import AboutUsCard from './shared/AboutUsCard'
import CallBtn from './shared/CallBtn'

function AboutUs() {
	return (
		<div>
			<CallBtn />
			<Navbar />
			<div className='pt-24 bg-gradient-to-r from-[#1B2838] to-[#2A3F54] px-4 py-6'>
				<h2 className='text-lg sm:text-xl md:text-2xl font-bold text-center text-zinc-300'>
					О наша компания
				</h2>
				<div className='w-[80%] h-[2px] mx-auto bg-zinc-300 my-4 opacity-10' />
				<div className='container mx-auto max-w-6xl bg-gray-100 rounded-2xl shadow-lg p-8 sm:p-12 md:p-8 lg:px-16 transform transition duration-300 hover:shadow-2xl'>
					<div className='w-[80%] h-[2px] mx-auto bg-gradient-to-r from-teal-500 to-blue-600 my-4' />
					<p className='sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-12 tracking-wide'>
						<strong className='text-blue-900'>
							"TAFAKKUR XIZMAT SAMARASI" MChJ
						</strong>
						— это динамично развивающаяся компания, которая уже несколько лет
						успешно работает в сфере обслуживания офисной техники, обеспечивая
						клиентов надежными и качественными услугами. Мы специализируемся на
						заправке и восстановлении картриджей, ремонте и техническом
						обслуживании принтеров и другой оргтехники. Наша команда состоит из
						опытных специалистов, готовых решать самые сложные задачи и помогать
						нашим клиентам оптимизировать свои затраты на печать и обслуживание
						оборудования.
					</p>
					<div className='w-[80%] h-[2px] mx-auto bg-gradient-to-r from-teal-500 to-blue-600 my-4' />
				</div>
				<div className='mt-12 flex flex-wrap justify-center gap-2 md:gap-8'>
					{AboutUsData.map((item, idx) => (
						<AboutUsCard {...item} key={idx} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default AboutUs
