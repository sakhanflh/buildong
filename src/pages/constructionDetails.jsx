import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Navbar } from "../components/layouts/Navbar";
import Layout from "../components/layouts/Layout";
import Rupiah from "../utils/Rupiah";
import { FaCartPlus, FaStar } from "react-icons/fa6";
import Loader from "../components/fragments/Loader";
import FormatDate from "../utils/FormatDate";

const ConstructionDetailsPage = () => {
    const { constructionId } = useParams()
    const {data, isLoading, isError} = useFetch(`https://buildong-api.vercel.app/constructions/${constructionId}`)
    if(isError){
        return <h1>{data.message}</h1>
    }

    if(isLoading){
        return <Loader/>
    }

    return(
        <>
        <Navbar/>
        <Layout>
            <div className="pt-20 px-[5%]">
                <div className="flex flex-col gap-4 w-full rounded-lg bg-white shadow-soft p-4">
                    <div className="flex flex-col gap-2">
                        <div className="relative rounded-lg w-full h-44 overflow-hidden">
                            <img src={data.image} alt="" className="w-full h-full object-cover absolute"/>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-20 h-20 bg-neutral-100 rounded-lg flex justify-center items-center text-3xl text-neutral-300 font-bold">
                                <h1>+</h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="font-semibold text-lg">
                            <p className="text-neutral-500 text-sm">{data.style}</p>
                            <h1 className=" xl:text-xl">{data.design_name}</h1>
                            <div className="flex text-sm flex-col gap-1 my-4 xl:text-base xl:items-center">
                                <div className="text-yellow-400 flex gap-1 items-center">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div>
                                <h1>4.9</h1>
                                <p className="text-sm text-neutral-500">( 245 review )</p>
                                </div>
                            </div>
                            <h4>{Rupiah(data.total_price)}</h4>
                        </div>
                        <p className="text-sm">{data.descriptions} Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <div className="my-3">
                            <h1 className="font-medium">Project Timeline</h1>
                            <div className="text-sm mt-2">
                                <div className="flex justify-between">
                                    <h1>Start :</h1>
                                    <p>{FormatDate(data.project_timeline.start)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <h1>Finish :</h1>
                                    <p>{FormatDate(data.project_timeline.finish)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <h1>Duration :</h1>
                                    <p>{data.project_timeline.duration}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-sm mt-4">
                            <div className="flex border-2 w-full rounded-lg divide-x-2 font-medium text-base">
                                <button className="w-1/3 py-2 text-center">-</button>
                                <div className="w-1/3 py-2 text-center">0</div>
                                <button className="w-1/3 py-2 text-center">+</button>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <button className="bg-yellow-500 rounded-lg w-max text-white px-4 py-3">
                                    <FaCartPlus/>
                                </button>
                                <button className="bg-primary rounded-lg w-full text-white px-4 py-3">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-2 mt-4 py-4 text-sm text-neutral-500">
                        <div className="flex justify-between">
                            <h1 className="font-medium">PRODUCT ID :</h1>
                            <p>{data._id}</p>
                        </div>
                        <div className="flex justify-between">
                            <h1 className="font-medium">TAGS :</h1>
                            <p>{data.style}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div>
                            <h1 className="font-semibold">DESCRIPTIONS</h1>
                            <p className="text-sm text-neutral-600 mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae velit laboriosam molestiae hic labore, assumenda, optio fugiat nisi perspiciatis magnam iure excepturi, omnis debitis possimus. Asperiores atque mollitia totam minima!</p>
                        </div>
                        <div className="mt-6">
                            <h1 className="font-semibold">Additional Information</h1>
                            <div className="flex flex-col text-sm mt-2 text-neutral-500 gap-1">
                                <div className="flex justify-between">
                                    <h1 className="font-medium">Material :</h1>
                                    <p>Wood</p>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="font-medium">Square Meters :</h1>
                                    <p>{data.square_meters}</p>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="font-medium">Location :</h1>
                                    <p>{data.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default ConstructionDetailsPage;