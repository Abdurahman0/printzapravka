import { useEffect } from 'react'
import Navbar from './components/Navbar'
import AOS from 'aos'
import Hero from './components/Hero'
import 'aos/dist/aos.css'
import Services from './components/Services'
import About from './components/About'
import Guarantee from './components/Guarantee'
import Status from './components/Status'
import Features from './components/Features'
import Advantages from './components/Advantages'
import Brands from './components/Brands'
import Form from './components/Form'
import Comments from './components/Comments'
import Footer from './components/Footer'

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1200,
		})
	}, [])

	return (
		<div className=''>
			<Navbar />
			<Hero />
			<Services />
			<About />
			<Guarantee />
			<Status />
			<Features />
			<Advantages />
			<Brands />
			<Form />
			<Comments />
			<Footer />
		</div>
	)
}

export default App
