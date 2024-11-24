function Form() {
	return (
		<div className='relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1B2838] to-[#2A3F54] p-6'>
			<div className='max-w-4xl w-full bg-gray-800 bg-opacity-80 shadow-lg rounded-xl p-8 md:p-12 transform transition duration-700 hover:scale-105 border border-gray-700'>
				<h2 className='text-4xl font-semibold text-center text-white mb-10 tracking-wider'>
					Связаться с нами
				</h2>
				<form className='grid md:grid-cols-2 gap-8'>
					<div className='left flex flex-col space-y-6'>
						<div className='relative'>
							<input
								type='text'
								name='firstName'
								placeholder='Имя'
								required
								className='w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition duration-300'
							/>
						</div>
						<div className='relative'>
							<input
								type='text'
								name='lastName'
								placeholder='Фамилия '
								required
								className='w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition duration-300'
							/>
						</div>
						<div className='relative'>
							<input
								type='tel'
								name='phone'
								placeholder='940511494'
								maxLength={9}
								required
								className='w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition duration-300'
							/>
						</div>
						<button
							type='submit'
							className='bg-indigo-500 text-[12px] sm:text-[16px] bg-opacity-20 text-indigo-300 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-40 transition duration-300 transform hover:scale-105'
						>
							Отправить
						</button>
					</div>
					<div className='right bg-gray-700 bg-opacity-60 rounded-lg shadow-lg flex items-center justify-center'>
						<iframe
							className='rounded-lg'
							width='100%'
							height='100%'
							src='https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5765.727072376834!2d69.279825!3d41.242401!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE0JzMyLjYiTiA2OcKwMTYnNDcuNCJF!5e1!3m2!1sru!2s!4v1731646140513!5m2!1sru!2s'
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Form
