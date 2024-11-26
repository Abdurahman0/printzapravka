import { useState } from 'react'
import { SaleCardItems } from '../data'
import Footer from './Footer'
import Navbar from './Navbar'
import SaleCard from './shared/SaleCard'
import CallBtn from './shared/CallBtn'

function Sale() {
	const [visible, setVisible] = useState(true)
	let a

	const showAllItems = () => {
		if (visible) {
			a = 9
			return a
		} else {
			a = 4
			return a
		}
	}

	return (
		<>
			<CallBtn />
			<Navbar />
			<div className='container bg-gradient-to-r from-[#1B2838] to-[#2A3F54] px-4 py-24 flex flex-col justify-center items-center'>
				<h2 className='text-lg sm:text-xl md:text-2xl font-bold text-center text-zinc-300'>
					Продажа и Бренды
				</h2>
				<div className='w-[80%] h-[2px] mx-auto bg-zinc-300 my-4 opacity-10' />
				{SaleCardItems.slice(0, showAllItems()).map((item, idx) => (
					<SaleCard {...item} key={idx} />
				))}

				<button
					className='bg-indigo-500 my-2 text-[12px] sm:text-[16px] bg-opacity-20 text-indigo-300 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-40 transition duration-300 transform hover:scale-105'
					onClick={() => setVisible(visible => !visible)}
				>
					{visible ? 'Скрыть' : 'Показать все'}
				</button>
			</div>
			<Footer />
		</>
	)
}

export default Sale
