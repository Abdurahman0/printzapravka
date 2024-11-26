import Advantages from './Advantages'
import Footer from './Footer'
import Navbar from './Navbar'
import CallBtn from './shared/CallBtn'

function Uslug() {
	return (
		<div>
			<CallBtn />
			<Navbar />
			<div className='bg-gradient-to-r from-[#1B2838] to-[#2A3F54] py-24'>
				<Advantages classN='text-white' />
			</div>
			<Footer />
		</div>
	)
}

export default Uslug
