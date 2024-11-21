import { useEffect } from 'react'
import AOS from 'aos'

function About() {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<div className='bg-gradient-to-b from-blue-50 to-blue-200 py-4 sm:py-16 px-2 sm:px-4'>
			<div className='container mx-auto max-w-5xl bg-white rounded-3xl shadow-2xl p-4 sm:p-12 md:px-20 lg:px-32 transform transition duration-300 hover:scale-105'>
				<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black'>
					О нас
				</h2>
				<div className='w-[80%] h-[2px] mx-auto bg-gradient-to-r from-teal-500 to-blue-600 my-4' />
				<p
					data-aos='fade-right'
					data-aos-duration='1000'
					data-aos-offset='50'
					className='sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-12 tracking-wide'
				>
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
				<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black'>
					Наши ценности и подход
				</h2>
				<div className='w-[80%] h-[2px] mx-auto bg-gradient-to-r from-teal-500 to-blue-600 my-4' />
				<p
					data-aos='fade-right'
					data-aos-duration='1000'
					data-aos-offset='50'
					className='sm:text-lg text-gray-700 leading-relaxed tracking-wide'
				>
					Мы понимаем, что исправная работа офисной техники играет важную роль в
					успешной работе любой компании. Наша цель — обеспечить бесперебойную и
					качественную работу ваших принтеров и других устройств. Мы гордимся
					индивидуальным подходом к каждому клиенту и стремимся находить
					решения, которые полностью удовлетворяют потребности и требования
					наших партнеров. Придерживаясь высоких стандартов работы, мы
					используем только проверенные материалы и современные технологии,
					чтобы гарантировать долговечность и эффективность наших услуг.
				</p>
			</div>
		</div>
	)
}

export default About
