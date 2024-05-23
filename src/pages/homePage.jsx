import { TestiCard } from "../components/elements/TestiCard";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/layouts/Footer";
import { OfferCard } from "../components/layouts/home/OfferCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { OurProjectCard } from "../components/layouts/home/OurProjectCard";


export default function HomePage() {
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

                            <div className="flex gap-5">
                                <div className="px-10 py-3 border-2 border-white items-center flex rounded-2xl">
                                    <button><IoIosArrowBack /></button>
                                </div>
                                <div className="px-10 py-3 border-2 border-white bg-background-color items-center flex rounded-2xl">
                                    <button className="flex items-center text-font-black">Next <IoIosArrowForward /></button>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5 translate-y-10">
                            <OurProjectCard />
                            <OurProjectCard />
                        </div>
                    </div>
                </div>
                {/* Section 2 End */}

                {/* Section 3 */}
                <div className="w-full pt-52">
                    <div className="w-full flex flex-col items-center gap-3">
                        <h1 className="text-font-black text-5xl font-bold">Why Choose Us?</h1>
                        <p className="text-font-gray text-xl">Discover Buildong difference</p>
                    </div>

                    <div className="w-full flex justify-between">
                        <div className="w-[40%] flex">
                            <div className="border-b">
                                <p>Expertise and Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section 3 End */}
            </div>
        </>
    )
}