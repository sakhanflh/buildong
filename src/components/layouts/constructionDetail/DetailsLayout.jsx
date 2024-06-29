/* eslint-disable react/prop-types */
import { FaCartPlus, FaCheck } from "react-icons/fa6"
import FormatDate from "../../../utils/FormatDate"
import Stars from "../../elements/Stars"
import Rupiah from "../../../utils/Rupiah"
import SkeletonLoading from "../../fragments/SkeletonLoading"
import { Link } from "react-router-dom"

const DetailsLayout = ({isLoading, data, constructId}) => {
    const role = localStorage.getItem('role')
    
    return (
        <div className="flex flex-col gap-2 xl:w-[60%]">
            {
                isLoading ?
                <div>
                    <SkeletonLoading width={'w-12'}/>
                    <SkeletonLoading width={'w-40'} height={'h-3'} margin={'mt-2'}/>
                    <div className="flex gap-2 mt-3">
                        <SkeletonLoading width={'w-24'}/>
                        <SkeletonLoading width={'w-20'}/>
                    </div>
                    <SkeletonLoading width={'w-40'} height={'h-3'} margin={'mt-6'}/>
                    <div className="mt-3 space-y-2">
                        <SkeletonLoading width={'w-full'}/>
                        <SkeletonLoading width={'w-[90%]'}/>
                        <SkeletonLoading width={'w-[65%]'}/>
                        <SkeletonLoading width={'w-[45%]'}/>
                        <SkeletonLoading width={'w-[80%]'}/>
                        <SkeletonLoading width={'w-[88%]'}/>
                    </div>
                </div>
                :
                <div className="font-semibold text-lg ">
                    <p className="text-neutral-500 text-sm">{data?.style}</p>
                    <h1 className=" xl:text-xl">{data?.design_name}</h1>
                    <div className="flex text-sm flex-col gap-1 my-4 xl:text-base xl:items-center xl:mt-2 xl:flex-row xl:gap-4">
                        <Stars length={4}/>
                        <div>
                            <div className="xl:flex xl:items-center xl:gap-2">
                                <h1>4.9</h1>
                                <p className="text-sm text-neutral-500">( 245 review )</p>
                            </div>
                        </div>
                    </div>
                    <h4 className="xl:text-2xl xl:font-bold ">{Rupiah(data?.total_price)}</h4>
                </div>
            }
                            <p className="text-sm text-neutral-600 xl:text-base">{data?.descriptions}</p>
                            <div className="my-3">
                                <h1 className="font-medium xl:font-bold xl:text-lg">Project Timeline</h1>
                                <div className="text-sm mt-2 xl:text-base">
                                    <div className="flex justify-between">
                                        <h1>Duration :</h1>
                                        {
                                            isLoading  ?
                                            <SkeletonLoading width={'w-44'}/>
                                            :
                                            <p>{data?.project_duration} days</p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 text-sm mt-4">
                                <div className="flex items-center gap-2">
                                    <FaCheck className="text-primary"/>
                                    <p><b>8</b> in stock</p>
                                </div>
                                <div className={`${role == 'admin' ? 'hidden' : 'flex'} flex-col xl:flex-row gap-2 mt-2 xl:font-semibold`}>
                                    <button className="bg-yellow-500 rounded-lg w-full text-white px-4 py-3 xl:w-1/2 flex items-center justify-center gap-4">
                                        <FaCartPlus/>
                                        <p>Add to cart</p>
                                    </button>
                                    <Link to={`/constructions/${constructId}/checkout`} className="w-full xl:w-1/2">
                                        <button className="bg-primary rounded-lg w-full text-white px-4 py-3">
                                            Order this project
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
    )
}

export default DetailsLayout;