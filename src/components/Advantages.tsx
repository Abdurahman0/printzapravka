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
				{services.map((service, idx) => (
					<ServiceCard key={idx} service={service} />
				))}
			</div>

			<div className='grid grid-cols-[25%_50%_25%] gap-[20px] mt-10 w-full sm:max-w-[1200px] max-w-[800px]  mx-auto'>
				<div className='relative w-full  sm:w-[70%] md:w-full mx-auto h-[250px]'>
					<div className='relative h-full group'>
						<div className='rounded-3xl h-full overflow-hidden bg-[#EFEFEF] shadow-lg transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl hover:rotate-3'>
							<img
								src='https://www.printzapravka.uz/assets/remont-termoprint-CM0XruvH.png'
								alt='Remont komputerov'
								className='w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-40 transition-opacity duration-300'></div>
							<div className='absolute bottom-0 p-6 w-full bg-gradient-to-t from-black text-white bg-opacity-70 group-hover:bg-opacity-50 transition-all duration-300'>
								<h3 className='text-xl font-bold mb-2 transform group-hover:scale-110 transition-all duration-300'>
									С гарантией
								</h3>
								<h4 className='text-lg font-medium mb-4 transform group-hover:scale-105 transition-all duration-300'>
									РЕМОНТ Термопринт
								</h4>
								<button className='py-2 px-6 text-white font-semibold rounded-full border-2 border-gray-800 hover:bg-slate-300 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50'>
									Подробнее
								</button>
							</div>
						</div>
						<div className='absolute inset-0 p-4 bg-[#1B2838] bg-opacity-95 rounded-3xl shadow-lg transition-all duration-500 opacity-0 translate-y-full pointer-events-none'>
							<button className='absolute top-2 right-2 p-2 text-white text-xl font-semibold  rounded-full transition-all duration-200 focus:outline-none'>
								✕
							</button>
							<h3 className=' text-sm sm:text-xl md:text-2xl w-[50%] font-bold text-white mb-2'>
								РЕМОНТ Термопринт
							</h3>
							<p className='text-white  text-sm   sm:text-xl md:text-sm mb-4'>
								Качественный ремонт термопринтеров с гарантией. Замена
								термоэлемента, роликов, ремонт электроники, настройка и
								калибровка.
							</p>
						</div>
					</div>
				</div>

				<div className='relative w-full  sm:w-[70%] md:w-full mx-auto h-[250px]'>
					<div className='relative h-full group'>
						<div className='rounded-3xl h-full overflow-hidden bg-[#EFEFEF] shadow-lg transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl hover:rotate-3'>
							<img
								src='https://www.printzapravka.uz/assets/remont-plotter-DPXAMF5a.png'
								alt='Remont komputerov'
								className='w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-40 transition-opacity duration-300'></div>
							<div className='absolute bottom-0 p-6 w-full bg-gradient-to-t from-black text-white bg-opacity-70 group-hover:bg-opacity-50 transition-all duration-300'>
								<h3 className='text-xl font-bold mb-2 transform group-hover:scale-110 transition-all duration-300'>
									Любая сложность
								</h3>
								<h4 className='text-lg font-medium mb-4 transform group-hover:scale-105 transition-all duration-300'>
									РЕМОНТ Плоттеров
								</h4>
								<button className='py-2 px-6 text-white font-semibold rounded-full border-2 border-gray-800 hover:bg-slate-300 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50'>
									Подробнее
								</button>
							</div>
						</div>
						<div className='absolute inset-0 p-4 bg-[#1B2838] bg-opacity-95 rounded-3xl shadow-lg transition-all duration-500 opacity-0 translate-y-full pointer-events-none'>
							<button className='absolute top-2 right-2 p-2 text-white text-xl font-semibold  rounded-full transition-all duration-200 focus:outline-none'>
								✕
							</button>
							<h3 className=' text-sm sm:text-xl md:text-2xl w-[50%] font-bold text-white mb-2'>
								РЕМОНТ Плоттеров
							</h3>
							<p className='text-white  text-sm   sm:text-xl md:text-sm mb-4'>
								Ремонт плоттеров любой сложности. Замена чернильных голов,
								ремонт механизмов подачи бумаги, восстановление электронных
								плат.
							</p>
						</div>
					</div>
				</div>

				<div className='relative w-full  sm:w-[70%] md:w-full mx-auto h-[250px]'>
					<div className='relative h-full group'>
						<div className='rounded-3xl h-full overflow-hidden bg-[#EFEFEF] shadow-lg transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl hover:rotate-3'>
							<img
								src='https://www.printzapravka.uz/assets/remont-pk-BhH4St5V.png'
								alt='Remont komputerov'
								className='w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-40 transition-opacity duration-300'></div>
							<div className='absolute bottom-0 p-6 w-full bg-gradient-to-t from-black text-white bg-opacity-70 group-hover:bg-opacity-50 transition-all duration-300'>
								<h3 className='text-xl font-bold mb-2 transform group-hover:scale-110 transition-all duration-300'>
									Установка Windows программы.
								</h3>
								<h4 className='text-lg font-medium mb-4 transform group-hover:scale-105 transition-all duration-300'>
									РЕМОНТ КОМПЬЮТЕРОВ
								</h4>
								<button className='py-2 px-6 text-white font-semibold rounded-full border-2 border-gray-800 hover:bg-slate-300 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50'>
									Подробнее
								</button>
							</div>
						</div>
						<div className='absolute inset-0 p-4 bg-[#1B2838] bg-opacity-95 rounded-3xl shadow-lg transition-all duration-500 opacity-0 translate-y-full pointer-events-none'>
							<button className='absolute top-2 right-2 p-2 text-white text-xl font-semibold  rounded-full transition-all duration-200 focus:outline-none'>
								✕
							</button>
							<h3 className=' text-sm sm:text-xl md:text-2xl w-[50%] font-bold text-white mb-2'>
								РЕМОНТ КОМПЬЮТЕРОВ
							</h3>
							<p className='text-white  text-sm   sm:text-xl md:text-sm mb-4'>
								Опытные специалисты устранят любые неполадки вашего компьютера,
								от программных сбоев до аппаратных поломок. Гарантия на
								выполненные работы.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Advantages
