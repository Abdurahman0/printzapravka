import { Swiper as SwiperType } from 'swiper'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CommentCardsData } from '../data'
import CommentCard from './shared/CommentCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useRef } from 'react'

function Comments() {
	const swiperRef = useRef<SwiperType>()

	return (
		<div className='bg-gradient-to-r px-2 from-[#1B2838] to-[#2A3F54] mt-[-10px] py-[50px]'>
			<div
				className='container relative'
				data-aos='fade-right'
				data-aos-duration='2000'
				data-aos-offset='50'
			>
				<h2 className='text-white text-center text-[40px] my-2'>
					Отзыв клиентов
				</h2>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					onBeforeInit={swiper => {
						swiperRef.current = swiper
					}}
					spaceBetween={50}
					slidesPerView={3}
				>
					{CommentCardsData.map((item, id) => (
						<SwiperSlide key={id}>
							<CommentCard {...item} />
						</SwiperSlide>
					))}
				</Swiper>
				<div className='flex justify-center gap-8 items-center mt-4'>
					<button
						onClick={() => swiperRef.current?.slidePrev()}
						className='custom-prev bg-[#FF2A68] text-white p-4 rounded-full hover:bg-[#6a11cb] transition-all'
					>
						<FaArrowLeft />
					</button>
					<button
						className='custom-next bg-[#FF2A68] text-white p-4 rounded-full hover:bg-[#6a11cb] transition-all'
						onClick={() => swiperRef.current?.slideNext()}
					>
						<FaArrowRight />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Comments
