function Guarantee() {
	return (
		<div className='relative flex items-center justify-center bg-gradient-to-r from-[#1B2838] to-[#2A3F54] py-10 sm:py-[0px] sm:h-screen'>
			<div className='absolute left-0 top-0 w-full h-full overflow-hidden blur-md'>
				<img
					className='sm:w-[60%] mt-[5vh] sm:mt-[20vh] mb-[20vh] opacity-80 mix-blend-multiply'
					src='https://www.printzapravka.uz/assets/fourthbanner-nAd0r_eJ.png'
					alt='Abstract Banner'
				/>
			</div>
			<div className='relative z-10 text-center px-6 py-8 md:py-16 md:px-12'>
				<h1 className='text-2xl sm:text-3xl md:text-6xl font-bold text-white mb-4 text-shadow-custom'>
					Ремонт Plotter принтеров
					<br />с гарантией качества!
				</h1>
				<p className='text-xl px-2 sm:text-lg md:text-2xl text-white leading-relaxed text-shadow-custom'>
					Мы обеспечим надежный ремонт и обслуживание вашего Plotter принтера,
					чтобы он снова работал как новый.
				</p>
			</div>
			<div className='absolute right-0 top-0 md:w-1/2 h-full flex items-center md:justify-end'>
				<img
					className='object-contain h-3/4 lg:h-full pr-8 lg:pr-12 hidden sm:flex shadow-xl rounded-md'
					src='https://www.printzapravka.uz/assets/fourthbannerprint-MywiEDUR.png'
					alt='Printer'
				/>
			</div>
		</div>
	)
}

export default Guarantee
