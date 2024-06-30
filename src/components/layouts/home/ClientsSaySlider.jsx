import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ClientsSayData } from "../../data/ClientsSayData";
import { ClientsSayCard } from './ClientsSayCard';

export function ClientsSaySlider({ nextRef, prevRef, setSwiperInstance }) {
    const handleSwiperInit = (swiper) => {
        setSwiperInstance(swiper);

        if (nextRef.current && prevRef.current) {
            swiper.navigation.update();
        }
    };
    return (
        <>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={200}
                    slidesPerView={3}
                    onSwiper={handleSwiperInit}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    navigation={{
                        nextEl: nextRef.current,
                        prevEl: prevRef.current,
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 250,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 250,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {ClientsSayData.map(client => (
                        <SwiperSlide key={client.id}>
                            <ClientsSayCard
                                say={client.say}
                                image={client.image}
                                name={client.name}
                                job={client.job}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}