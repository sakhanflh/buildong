import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { OurProjectCard } from './OurProjectCard';
import { OurProjectData } from '../../data/OurProjectData';

export function OurProjectSlider({ nextRef, prevRef, setSwiperInstance }) {
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
                    spaceBetween={50}
                    slidesPerView={2}
                    onSwiper={handleSwiperInit}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    navigation={{
                        nextEl: nextRef.current,
                        prevEl: prevRef.current,
                    }}
                    breakpoints={{
                        0: { 
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {OurProjectData.map(project => (
                        <SwiperSlide key={project.id}>
                            <OurProjectCard
                                location={project.location}
                                image={project.image}
                                date={project.date}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}