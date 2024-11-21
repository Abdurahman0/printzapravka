import { useEffect } from 'react'
import AOS from 'aos'

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
							<div
								data-aos='fade-right'
								data-aos-duration='1000'
								data-aos-offset='50'
								className='relative bg-white flex flex-col md:flex max-w-[450px] w-full px-8 py-2 border rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mx-auto transform hover:scale-105 md:!ml-auto xl:!ml-[10%] aos-init aos-animate'
							>
								<div className='absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-10 rounded-2xl pointer-events-none'></div>
								<div className='flex items-center space-x-5 relative z-10'>
									<div>
										<div className='flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-full w-20 h-20 md:w-16 md:h-16 shadow-md transition transform duration-300 ease-in-out hover:rotate-12 hover:scale-110'>
											<div className='text-[20px] md:text-[30px]'>
												<svg
													stroke='currentColor'
													fill='currentColor'
													stroke-width='0'
													viewBox='0 0 640 512'
													height='1em'
													width='1em'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path d='M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z'></path>
												</svg>
											</div>
										</div>
									</div>
									<div className='text-center md:text-start'>
										<h3 className='text-xl font-semibold text-gray-900 tracking-wide transition duration-300 ease-in-out hover:text-indigo-500'>
											Быстрый выезд
										</h3>
										<p className='text-gray-700 mt-2 leading-relaxed'>
											Можете доверять мы Приедем к вам в течение
										</p>
									</div>
								</div>
								<div className='md:absolute bottom-2 right-4 text-indigo-500 font-semibold text-lg flex justify-end space-x-1'>
									<span className='text-center'>3</span>
									<span className='text-center'>часов</span>
								</div>
							</div>
							<div
								data-aos='fade-right'
								data-aos-duration='1000'
								data-aos-offset='50'
								className='relative bg-white flex flex-col md:flex max-w-[450px] w-full px-8 py-2 border rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mx-auto transform hover:scale-105 md:!ml-[0%] xl:!ml-[20%] aos-init aos-animate'
							>
								<div className='absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-10 rounded-2xl pointer-events-none'></div>
								<div className='flex items-center space-x-5 relative z-10'>
									<div>
										<div className='flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-full  w-8 h-8 md:w-16 md:h-16 shadow-md transition transform duration-300 ease-in-out hover:rotate-12 hover:scale-110'>
											<div className=' text-[20px] md:text-[30px]'>
												<svg
													stroke='currentColor'
													fill='currentColor'
													stroke-width='0'
													viewBox='0 0 512 512'
													height='1em'
													width='1em'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path d='M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z'></path>
												</svg>
											</div>
										</div>
									</div>
									<div className='text-center md:text-start'>
										<h3 className='text-xl font-semibold text-gray-900 tracking-wide transition duration-300 ease-in-out hover:text-indigo-500'>
											Заправка картриджей
										</h3>
										<p className='text-gray-700 mt-2 leading-relaxed'>
											Максимально быстрая заправка картриджа
										</p>
									</div>
								</div>
								<div className='md:absolute bottom-2 right-4 text-indigo-500 font-semibold text-lg flex justify-end  space-x-1'>
									<span className='text-center'>15</span>
									<span className='text-center'>минут</span>
								</div>
							</div>
							<div
								data-aos='fade-right'
								data-aos-duration='1000'
								data-aos-offset='50'
								className='relative bg-white flex flex-col md:flex max-w-[450px] w-full px-8 py-2 border rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mx-auto transform hover:scale-105 md:!ml-auto xl:!ml-[30%] aos-init aos-animate'
							>
								<div className='absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-10 rounded-2xl pointer-events-none'></div>
								<div className='flex items-center space-x-5 relative z-10'>
									<div>
										<div className='flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-full w-20 h-20 md:w-16 md:h-16 shadow-md transition transform duration-300 ease-in-out hover:rotate-12 hover:scale-110'>
											<div className='text-[20px] md:text-[30px]'>
												<svg
													stroke='currentColor'
													fill='currentColor'
													stroke-width='0'
													viewBox='0 0 512 512'
													height='1em'
													width='1em'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'></path>
												</svg>
											</div>
										</div>
									</div>
									<div className='text-center md:text-start'>
										<h3 className='text-xl font-semibold text-gray-900 tracking-wide transition duration-300 ease-in-out hover:text-indigo-500'>
											Гарантия на товар
										</h3>
										<p className='text-gray-700 mt-2 leading-relaxed'>
											Используем только оригинальные картриджи и тонеры
										</p>
									</div>
								</div>
								<div className='md:absolute bottom-2 right-4 text-indigo-500 font-semibold text-lg flex justify-end space-x-1'>
									<span className='text-center'>1</span>
									<span className='text-center'>месяцев</span>
								</div>
							</div>
							<div
								data-aos='fade-right'
								data-aos-duration='1000'
								data-aos-offset='50'
								className='relative bg-white flex flex-col md:flex max-w-[450px] w-full px-8 py-2 border rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mx-auto transform hover:scale-105 md:!ml-[0%] xl:!ml-[40%] aos-init aos-animate'
							>
								<div className='absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-10 rounded-2xl pointer-events-none'></div>
								<div className='flex items-center space-x-5 relative z-10'>
									<div>
										<div className='flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-full  w-8 h-8 md:w-16 md:h-16 shadow-md transition transform duration-300 ease-in-out hover:rotate-12 hover:scale-110'>
											<div className=' text-[20px] md:text-[30px]'>
												<svg
													stroke='currentColor'
													fill='currentColor'
													stroke-width='0'
													viewBox='0 0 512 512'
													height='1em'
													width='1em'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path d='M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z'></path>
												</svg>
											</div>
										</div>
									</div>
									<div className='text-center md:text-start'>
										<h3 className='text-xl font-semibold text-gray-900 tracking-wide transition duration-300 ease-in-out hover:text-indigo-500'>
											Оперативная поддержка
										</h3>
										<p className='text-gray-700 mt-2 leading-relaxed'>
											Быстро решаем вопросы и устраняем неполадки
										</p>
									</div>
								</div>
								<div className='md:absolute bottom-2 right-4 text-indigo-500 font-semibold text-lg flex justify-end  space-x-1'>
									<span className='text-center'>24</span>
									<span className='text-center'>часа</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Advantages
