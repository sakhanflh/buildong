/* eslint-disable react/prop-types */
import Card from "../fragments/Card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Rupiah from "../../utils/Rupiah";
import Loader from "../fragments/Loader";

const CardSwiper = ({title, subTitle, data, dataId}) => {
    const nextBtn = useRef(null)
    const prevBtn = useRef(null)
    const [filteredData, setFilteredData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const newData = data?.filter(dt => dt._id !== dataId)
      if(newData){
        setFilteredData(newData)
        setLoading(false)
      }
    }, [data])

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
          {
            loading ?
            <div className="flex items-center justify-center py-10">
              <Loader color={'bg-primary'}/>
            </div>
            :
            filteredData?.length == 0 ?
            <div className="text-center w-full py-10">
              <h1 className="xl:text-lg font-semibold text-neutral-400">No related product for you</h1>
            </div>
            :
            filteredData?.map(dt => (
          <SwiperSlide key={dt._id} className="cursor-none">
            <Card  
              key={dt._id}
              category={dt.category ? dt.category : dt.material}
              linkTo={`/constructions/${dt._id}`}
              img={dt.image[0]}
              price={Rupiah(dt.total_price ? dt.total_price : dt.unit_price)}
              rate={4}
              title={dt.design_name ? dt.design_name : dt.name}
            />
          </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      </div>
    )
}

export default CardSwiper;