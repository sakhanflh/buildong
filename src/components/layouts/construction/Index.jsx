import { FiChevronDown, FiFilter } from "react-icons/fi";
import ActiveFilter from "./ActiveFilter";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import Card from "../../fragments/Card";
import Rupiah from "../../../utils/Rupiah"
import Loader from "../../fragments/Loader"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import SideFilter from "../../fragments/SideFilter";
import {Footer} from "../../layouts/Footer"
import ImgCardUI from "./ImgCardUI";

const Index = () => {
    const { data, isLoading, isError } = useFetch('https://buildong-api.vercel.app/constructions') 
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
        <div className="px-[5%] mt-5 pt-16">
            <div className="flex gap-2 xl:gap-4">
                <div className="rounded-lg bg-white text-center py-8 w-1/2  xl:w-full px-4 shadow-soft xl:py-10">
                    <div>
                        <h1 className="font-semibold text-lg text-sky-800 xl:text-4xl">Flash Sale!</h1>
                        <p className="text-sky-900 text-sm xl:text-base">Get 25% off - Limited Time Offer!</p>
                    </div>
                    <button className="bg-blue py-2 w-full rounded-full text-sm text-white mt-8 xl:w-max xl:px-16 xl:py-2">
                        Shop Now
                    </button>
                </div>
                <div className="w-1/2 flex gap-1">
                    <ImgCardUI/>
                    <ImgCardUI/>
                </div>
            </div>
            <div className="flex justify-end mt-16 xl:hidden">
                <button onClick={() => setShowFilter(true)} className="py-1 px-6 bg-blue flex items-center gap-2 rounded-lg text-white font-medium">
                    <FiFilter/>
                    Filter
                </button>
            </div>
            <div className="flex mb-20 gap-4 mt-5 xl:mt-16">
                <SideFilter
                showFilter={showFilter}
                setShowFilter={setShowFilter}
                />
                <div className="bg-white rounded-lg w-full py-4 h-max px-[5%] shadow-soft xl:py-6 xl:px-10">
                    <div className="flex justify-between items-center">
                        <h1 className="text-sm font-medium xl:text-lg">Showing {data ? data.length : ""} of 300 result</h1>
                        <div className="text-sm text-blue flex items-end gap-2">
                            <h1>Sort by</h1>
                            <FiChevronDown/>
                        </div>
                    </div>

                    <div className="mt-5">
                        <ActiveFilter
                        />
                    </div>

                    <div className="flex flex-col justify-between xl:h-full"> 
                        <div className="mt-8 flex flex-wrap xl:justify-between gap-y-8">
                                {
                                    isLoading ?
                                    <div className="flex justify-center py-10 w-full">
                                        <Loader/>
                                    </div> 
                                    :
                                    data?.map(dt => (
                                        <Card
                                        key={dt._id}
                                        img={dt.image}
                                        category={dt.style}
                                        title={dt.design_name}
                                        price={Rupiah(dt.total_price)}
                                        rate={'4.9'}
                                        linkTo={`/constructions/${dt._id}`}
                                        />
                                    ))
                                }
                        </div>

                        <div className={`flex w-full justify-center gap-4 mt-16 items-center text-sm`}>
                            <FaChevronLeft/>
                            <div className="flex gap-3 items-center text-neutral-400">
                                <div className="bg-blue w-7 h-7 text-white text-center flex justify-center items-center rounded-full">
                                    <p>1</p>
                                </div>
                                <p>2</p>
                                <p>...</p>
                                <p>10</p>
                            </div>
                            <FaChevronRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Index;