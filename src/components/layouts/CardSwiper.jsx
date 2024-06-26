/* eslint-disable react/prop-types */
import Card from "../fragments/Card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const CardSwiper = ({title, subTitle}) => {
    const nextBtn = useRef(null)
    const prevBtn = useRef(null)

    return (
        <div className="bg-white mt-6 shadow-soft rounded-lg w-full py-6 px-6">
            <div className="flex justify-between items-end flex-col w-full xl:flex-row xl:items-center">
                <div>
                    <h1 className="font-bold xl:text-lg">{title}</h1>
                    <p className="text-sm text-neutral-600 xl:text-base">{subTitle}</p>
                </div>
                <div className="flex gap-4 text-lg mt-6 xl:mt-0">
                    <div className="cursor-pointer p-2 rounded-lg hover:brightness-90 hover:scale-[.98] hover:shadow-soft active:scale-95 active:shadow-multiple bg-primary text-white" ref={prevBtn}>
                        <FaChevronLeft/>
                    </div>
                    <div className="cursor-pointer p-2 rounded-lg hover:brightness-90 hover:scale-[.98] hover:shadow-soft active:scale-95 active:shadow-multiple bg-primary text-white" ref={nextBtn}>
                        <FaChevronRight/>
                    </div>
                </div>
            </div>
        <div className="mt-2 xl:mt-8">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            navigation={{
                nextEl: nextBtn.current,
                prevEl: prevBtn.current
            }}
            slidesPerView={1}
            breakpoints={{
            // Breakpoints for different screen sizes
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <Card  
              category={'Home'}
              img={'/img/home.jpg'}
              price={'Rp 2.034.400'}
              rate={4}
              title={'Space House'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card 
              category={'Home'}
              img={'/img/home.jpg'}
              price={'Rp 2.034.400'}
              rate={4}
              title={'Space House'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card 
              category={'Home'}
              img={'/img/home.jpg'}
              price={'Rp 2.034.400'}
              rate={4}
              title={'Space House'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card 
              category={'Home'}
              img={'/img/home.jpg'}
              price={'Rp 2.034.400'}
              rate={4}
              title={'Space House'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card 
              category={'Home'}
              img={'/img/home.jpg'}
              price={'Rp 2.034.400'}
              rate={4}
              title={'Space House'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card 
              category={'Home'}
              img={'/img/home.jpg'}
              price={'Rp 2.034.400'}
              rate={4}
              title={'Space House'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card 
              category={'Home'}
              img={'/img/home.jpg'}
              price={'Rp 2.034.400'}
              rate={4}
              title={'Space House'}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
    )
}

export default CardSwiper;