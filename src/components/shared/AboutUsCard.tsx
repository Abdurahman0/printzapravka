interface IAboutUsData {
	title: string
	description: string
	classN: string
}

function AboutUsCard({ title, description, classN }: IAboutUsData) {
	return (
		<div className='text-center bg-gray-100 p-6 cursor-pointer rounded-lg shadow-md hover:bg-gray-200 transition duration-300 w-full sm:w-1/3 lg:w-1/4'>
			<h3 className={`text-xl font-semibold ${classN}`}>{title}</h3>
			<p className='text-gray-600'>{description}</p>
		</div>
	)
}

export default AboutUsCard
