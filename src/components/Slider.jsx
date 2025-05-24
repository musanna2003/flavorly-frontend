
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import TopRec from './TopRec';

export default function Slider({posts}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className=" md:w-full w-[80vw] h-[100vw] md:h-[63vw] lg:h-[38vw] sm:p-1"
      >
        {
            posts.slice(0, 5).map((post) => (
                <SwiperSlide><TopRec key={post._id} post={post} /></SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}
