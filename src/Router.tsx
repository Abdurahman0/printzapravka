import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import AboutUs from './components/AboutUs'
import Uslug from './components/Uslug'
import Sale from './components/Sale'
import Call from './components/Call'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/about',
		element: <AboutUs />,
	},
	{
		path: '/uslug',
		element: <Uslug />,
	},
	{
		path: '/brand',
		element: <Sale />,
	},
	{
		path: '/mastercall',
		element: <Call />,
	},
])

export default router
