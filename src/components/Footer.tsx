import { NavLink } from 'react-router-dom'

function Footer() {
	return (
		<footer className='bg-gray-900 text-white pt-10 pb-6'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-wrap justify-between'>
					<div className='w-full md:w-1/4 mb-6 md:mb-0'>
						<img
							src='https://www.printzapravka.uz/assets/logo-print-BsJKyGnY.png'
							alt='logo'
							className='w-[150px] h-auto mb-4'
						/>
					</div>
					<div className='w-full md:w-1/4 mb-6 md:mb-0'>
						<h4 className='text-lg font-bold mb-4'>Компания</h4>
						<ul className='flex flex-col gap-2'>
							<li>
								<NavLink to='/about' className='hover:underline'>
									О нас
								</NavLink>
							</li>
							<li>
								<NavLink to='/brand' className='hover:underline'>
									Наши Перемущество
								</NavLink>
							</li>
							<li>
								<NavLink to='/uslug' className='hover:underline'>
									Наши Услуги
								</NavLink>
							</li>
						</ul>
					</div>
					<div className='w-full md:w-1/4 mb-6 md:mb-0'>
						<h4 className='text-lg font-bold mb-4'>Контакты</h4>
						<ul className='flex flex-col gap-2'>
							<li className='text-sm'>
								<NavLink
									className='hover:underline'
									to='mailto:tafakkurxizmatsamarasimchj@gmail.com'
								>
									tafakkurxizmatsamarasimchj@gmail.com
								</NavLink>
							</li>
							<li>
								<NavLink to='tel:+998940511494' className='hover:underline'>
									+998940511494
								</NavLink>
							</li>
							<li>
								<NavLink
									to='https://www.google.com/maps/place//@41.2423931,69.2797347,41m/data=!3m1!1e3!4m6!1m5!3m4!2zNDHCsDE0JzMyLjYiTiA2OcKwMTYnNDcuNCJF!8m2!3d41.2423889!4d69.2798333?entry=ttu&amp;g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D'
									className='hover:underline flex flex-col'
									target='_blank'
									rel='noopener noreferrer'
								>
									Адрес
									<span className='mt-2'>
										Сиргалийский район, махалля Номданак, улица Файзли, дом 11.
									</span>
								</NavLink>
							</li>
						</ul>
					</div>
					<div className='w-full md:w-1/4 mb-6 md:mb-0'>
						<h4 className='text-lg font-bold mb-4'>Вызов мастера</h4>
						<p className='mb-4'>
							Сломался ли ваш принтер или другая техника? Если у вас нет
							возможности привезти оборудование в мастерскую, наши специалисты
							готовы помочь! Все, что вам нужно сделать — это позвонить, и мы
							приедем к вам для диагностики и ремонта.
						</p>
						<NavLink
							to='/mastercall'
							className='bg-indigo-500 text-[12px] p480:text-[16px] bg-opacity-20 text-indigo-300 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-40 transition duration-300 transform hover:scale-105'
						>
							На Выезд
						</NavLink>
					</div>
				</div>
				<div className='footer-bottom-container'>
					<div className='w-full h-[1px] bg-slate-400 mt-6 opacity-35'></div>
					<div className='flex  w-full justify-between mt-6'>
						<h3>© 2022 "TAFAKKUR XIZMAT SAMARASI" MChJ</h3>
						<p className='text-[14px] font-extralight'>
							Created By{' '}
							<span className='text-[#a357ff] font-semibold'>LIMSA</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
