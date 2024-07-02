import { FiChevronDown, FiFilter } from "react-icons/fi";
import { useEffect, useState } from "react";
import Card from "../../fragments/Card";
import Rupiah from "../../../utils/Rupiah"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import SideFilter from "../../fragments/SideFilter";
import axios from "axios";
import SkeletonLoading from "../../fragments/SkeletonLoading";
import ActiveFilter from "../construction/ActiveFilter";

export default function Index() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [filterData, setFilterData] = useState({
        category: "",
        style: "",
        material: "",
        price_from: "",
        price_to: ""
    });
    const [showFilter, setShowFilter] = useState(false);
    const [dataLen, setDataLen] = useState(0)
    const arrLength = new Array(6).fill(0);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 5;


    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://buildong-api.vercel.app/products`, {
                    params: { ...filterData, page, limit: itemsPerPage }
                })
                setData(response.data.data)
                setIsLoading(false)
                console.log(response.data)
                setTotalPages(Math.ceil(response.data.total / itemsPerPage));
            } catch (error) {
                console.log(error.message)
                setIsLoading(false)
            }
        }

        fetchData();
    }, [filterData, page])

    function handleDeleteFilter(filterKey) {
        setFilterData(prev => ({
            ...prev,
            [filterKey]: ""
        }));
    }


    return (
        <>
            <div className="px-[5%] mt-5 ">
                <div className="flex justify-end xl:hidden">
                    <button onClick={() => setShowFilter(true)} className="py-1 px-6 bg-primary flex items-center gap-2 rounded-lg text-white font-medium">
                        <FiFilter />
                        Filter
                    </button>
                </div>
                <div className="flex mb-20 gap-4 mt-5 xl:mt-6">
                    <SideFilter
                        setCategory={value => setFilterData(prev => ({ ...prev, category: value }))}
                        setStyle={value => setFilterData(prev => ({ ...prev, style: value }))}
                        setMaterial={value => setFilterData(prev => ({ ...prev, material: value }))}
                        setPriceFrom={value => setTimeout(() => { setFilterData(prev => ({ ...prev, price_from: value })) })}
                        setPriceTo={value => setFilterData(prev => ({ ...prev, price_to: value }))}
                        showFilter={showFilter}
                        setShowFilter={setShowFilter}
                    />
                    <div className="bg-white rounded-lg w-full py-4 h-max px-[5%] shadow-soft xl:py-6 xl:px-10">
                        <div className="flex justify-between items-center">
                            <h1 className="text-sm font-medium xl:text-lg xl:font-semibold">Showing {data ? data.length : ""} of 300 result</h1>
                            <div className="text-sm text-primary flex items-end gap-2">
                                <h1>Sort by</h1>
                                <FiChevronDown />
                            </div>
                        </div>

                        <div className="mt-5">
                            <ActiveFilter
                                onClick={handleDeleteFilter}
                                filterData={filterData}
                            />
                        </div>

                        <div className="flex flex-col justify-between xl:h-full">
                            <div className={`mt-8 flex flex-wrap ${data?.length == 2 ? 'xl:gap-x-4' : 'xl:justify-between'} gap-y-8`}>
                                {
                                    isLoading ?
                                        arrLength.map((_, i) => (
                                            <div key={i} className="w-full xl:w-[31%]">
                                                <SkeletonLoading height={'h-32'} />
                                                <div className="flex justify-between items-center my-2">
                                                    <SkeletonLoading width={'w-7'} />
                                                    <SkeletonLoading width={'w-4'} />
                                                </div>
                                                <div className="space-y-1">
                                                    <SkeletonLoading width={'w-32'} />
                                                    <SkeletonLoading width={'w-24'} />
                                                </div>
                                            </div>
                                        ))
                                        :
                                        data == null ?
                                            <div className="pt-14 pb-10 text-center text-neutral-500 w-full xl:text-lg xl:font-semibold">No Data Found</div>
                                            :
                                            data?.map(dt => (
                                                <Card
                                                    key={dt._id}
                                                    img={dt.image[0]}
                                                    category={dt.category}
                                                    title={dt.desc}
                                                    price={Rupiah(dt.unit_price)}
                                                    rate={'4.9'}
                                                    linkTo={`/shop/${dt._id}`}
                                                    brand={dt.brand}
                                                />
                                            ))
                                }
                            </div>

                            <div className={`flex w-full justify-center gap-8 mt-16 items-center text-sm`}>
                                <div
                                    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                                    className="bg-white border-2 border-primary text-primary hover:shadow-soft hover:bg-primary hover:text-white hover:scale-[.98] active:bg-primary active:text-white active:shadow-multiple active:brightness-75 active:scale-95 rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer"
                                >
                                    <FaChevronLeft />
                                </div>
                                <div className="flex gap-3 items-center text-neutral-400">
                                    {[...Array(totalPages ? totalPages : 1)].map((_, i) => (
                                        <div key={i} onClick={() => setPage(i + 1)} className={`w-7 h-7 flex justify-center items-center rounded-full cursor-pointer ${page === i + 1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                                            {i + 1}
                                        </div>
                                    ))}
                                </div>
                                <div
                                    onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                                    className="bg-white border-2 border-primary text-primary hover:shadow-soft hover:bg-primary hover:text-white hover:scale-[.98] active:bg-primary active:text-white active:shadow-multiple active:brightness-75 active:scale-95 rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer"
                                >
                                    <FaChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}