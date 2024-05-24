import { TestiCard } from "../components/elements/TestiCard";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/layouts/Footer";
import { OfferCard } from "../components/layouts/home/OfferCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { OurProjectSlider } from "../components/layouts/home/OurProjectSlider";
import { useRef, useState } from "react";
import { ChooseUsSection } from "../components/layouts/home/ChooseUsSection";
import { ClientsSaySlider } from "../components/layouts/home/ClientsSaySlider";


export default function HomePage() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    
    const [swiperInstance2, setSwiperInstance2] = useState(null)
    const nextButtonRef2 = useRef(null);
    const prevButtonRef2 = useRef(null);

    return (
        <>
            <Header />
            <div className="p-[5%] bg-background-color font-jost">
                <div className="flex flex-col w-full gap-10">
                    <div className="w-full flex flex-col font-bold">
                        <h1 className="text-font-gray text-xl xl:text-[44px]">BUILDING DREAMS WITH <span className="text-font-black">PRECISION</span></h1>
                        <p className="text-font-gray text-sm xl:text-xl font-normal">Innovating and Sustaining the Future of Construction.</p>
                    </div>

                    <div className="bg-cover bg-center w-full h-[26rem] rounded-2xl relative flex flex-col justify-between" style={{ backgroundImage: `url('/img/home.jpg')` }}>
                        <div className="w-full flex justify-end">
                            <OfferCard />
                        </div>

                        <div className="w-full xl:h-[9rem] flex ">
                            <TestiCard />
                        </div>
                    </div>

                    <div className="w-full items-end flex justify-end">
                        <p className="text-sm xl:text-lg flex items-center text-blue font-semibold">Choose your future home <IoIosArrowForward /></p>
                    </div>
                </div>
                {/* Section 1 End */}

                {/* Section 2 */}
                <div className="w-full pt-20 font-jost flex flex-col gap-10">
                    <div className="w-full flex flex-wrap justify-between">
                        <div className="w-[40%] flex flex-col gap-2">
                            <h1 className="text-font-gray text-xl">About Us</h1>
                            <p className="text-font-black text-5xl font-bold">Building a Better <span className="text-blue">Future Together</span></p>
                        </div>

                        <div className="w-[50%]">
                            <p className="text-font-gray text-xl">At <span className="text-font-black font-semibold">BUILDONG</span>, we believe in the power of construction to shape a sustainable and innovative future. Estabilished with a vision to provide top-notch construction services, high-quality materials, and reliable equipment rentals, we are committed to transforming your ideas into reality.</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap justify-between">
                        <div className="w-[72%] h-[22rem] bg-emerald-500 overflow-hidden rounded-3xl">
                            <img src="/img/home2.jpg" alt="" className="w-full object-cover" />
                        </div>

                        <div className="w-[25%] h-[22rem] overflow-hidden rounded-3xl bg-slate-900">
                            <img src="/img/home2.jpg" alt="" className="w-full h-full object-cover " />
                        </div>
                    </div>

                    <div className="w-full h-[28rem] rounded-3xl bg-blue p-[5%] text-background-color">
                        <div className="w-full flex justify-between">
                            <div className="w-[47%] flex items-center">
                                <h1 className="text-4xl font-bold">Build Your Future House with Expert Precision</h1>
                            </div>
                            <div className="w-[45%]">
                                <p className="text-xl">Each home we build is a testament to our commitment to quality, sustainabillity, and the future residential living. Join us in building a brighter, greener, and more innovative future, one home at a time.</p>
                            </div>
                        </div>

                        <div className="w-full justify-between flex items-center pt-10">
                            <p className="text-xl">Our Projects</p>

                            <div className="flex gap-5 ">
                                <div className="px-10 py-3 border-2 border-white items-center flex rounded-3xl hover:scale-90" ref={prevButtonRef}>
                                    <button><IoIosArrowBack /></button>
                                </div>
                                <div className="px-10 py-3 border-2 border-white bg-background-color items-center flex rounded-3xl hover:scale-90 text-black" ref={nextButtonRef}>
                                    <button className="flex items-center">Next <IoIosArrowForward /></button>
                                </div>
                            </div>
                        </div>

                        <div className="translate-y-10">
                            <OurProjectSlider
                                nextRef={nextButtonRef}
                                prevRef={prevButtonRef}
                                setSwiperInstance={setSwiperInstance}
                            />
                        </div>
                    </div>
                </div>
                {/* Section 2 End */}

                {/* Section 3 */}
                <div className="w-full pt-52">
                    <ChooseUsSection />
                </div>
                {/* Section 3 End */}

                {/* Section 4 */}
                <div className="w-full flex flex-col gap-10 justify-center items-center pt-32">
                    <div className="w-[35rem] flex flex-col gap-2 items-center">
                        <h1 className="text-4xl font-bold text-font-black">Unclock Exclusive Offers!</h1>
                        <p className="text-lg text-font-gray text-center">As a registered member, you gain exclusive access to special deals and discounts on our top-quality construction materials and services, Don't miss out on these limited-time offers available only to our members.</p>
                    </div>

                    <div
                        className="w-[80%] h-96 bg-cover rounded-3xl project-card-shadow"
                        style={{
                            backgroundImage: `linear-gradient(to top, rgba(10, 10, 10, 0.9), rgba(0, 0, 0, 0)), url('/img/home3.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <button className="items-center px-14 text-white py-2 bg-blue rounded-3xl">Login Now</button>
                        </div>
                    </div>
                </div>
                {/* Section 4 End */}

                {/* Section 5 */}
                <div className="w-full flex flex-col pt-32 gap-20">
                    <div className="flex  justify-between items-center">
                        <div className="w-[30%] flex flex-col gap-3">
                            <h1 className="text-font-black font-semibold text-5xl pr-20">What Our Clients Say</h1>
                            <p className="text-font-gray text-xl">Trusted by Many, Loved by All: Discover Why Our Clients Choose BUILDONG for Their Construction Needs</p>
                        </div>

                        <div className="w-[67%] ">
                            <ClientsSaySlider
                            nextRef={nextButtonRef2}
                            prevRef={prevButtonRef2}
                            setSwiperInstance={setSwiperInstance2}
                            />
                        </div>
                    </div>

                    <div className="flex gap-5 w-full justify-end">
                        <div className="px-10 py-3 border-2 border-blue items-center flex rounded-3xl hover:scale-90" ref={prevButtonRef2}>
                            <button><IoIosArrowBack /></button>
                        </div>
                        <div className="px-10 py-3 border-2 border-blue bg-blue items-center flex rounded-3xl hover:scale-90 text-white" ref={nextButtonRef2}>
                            <button className="flex items-center">Next <IoIosArrowForward /></button>
                        </div>
                    </div>
                </div>
                {/* Section 5 End */}

            </div>
                {/* Footer */}
                <Footer/>
                {/* Footer End */}
        </>
    )
}