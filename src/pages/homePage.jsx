import { TestiCard } from "../components/elements/TestiCard";
import { Footer } from "../components/layouts/Footer";
import { Navbar } from "../components/layouts/Navbar";
import { OfferCard } from "../components/layouts/home/OfferCard";

export default function HomePage(){
    return(
        <>
        <Navbar/>
        <div className="p-[5%]">
            <div className="flex flex-col w-full gap-10">
                <div className="w-full flex flex-col font-bold">
                    <h1 className="text-slate-500  text-5xl">BULDING DREAMS WITH <span className="text-black">PRECISION</span></h1>
                    <p className="text-slate-500 text-2xl">Innovating and Sustaining the Future of Construction.</p>
                </div>

                <div className="bg-cover bg-center w-full h-[26rem] rounded-2xl relative flex flex-col justify-between" style={{backgroundImage: `url('/img/home.jpg')`}}>
                    <div className=" w-full flex justify-end">
                        <OfferCard/>
                    </div>

                    <div className="w-full h-[9rem] flex ">
                        <TestiCard/>
                    </div>
                </div>
            </div>
            {/* Section 1 End */}
        </div>
        </>
    )
}