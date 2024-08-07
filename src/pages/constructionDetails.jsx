import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Layout from "../components/layouts/Layout";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/layouts/Footer";
import CardSwiper from "../components/layouts/CardSwiper";
import SkeletonLoading from "../components/fragments/SkeletonLoading";
import ImgWrapper from "../components/layouts/constructionDetail/ImgWrapper";
import ReviewLayout from "../components/layouts/constructionDetail/ReviewLayout";
import DetailsLayout from "../components/layouts/constructionDetail/DetailsLayout";
import { useEffect, useState } from "react";
import axios from "axios";

const ConstructionDetailsPage = () => {
    const { constructionId } = useParams()
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [styleData, setStyleData] = useState(null)
    const [categoryData, setCategoryData] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true)
        const fetchData = async() => {
            try {
                const res = await axios.get(`https://buildong-api.vercel.app/constructions/${constructionId}`)
                setData(res.data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }

        fetchData()
    }, [constructionId])

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await axios.get(`https://buildong-api.vercel.app/constructions/category/${data.construction.category}`)
                setCategoryData(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [data])

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await axios.get(`https://buildong-api.vercel.app/constructions/style/${data.construction.style}`)
                setStyleData(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [data])


    return(
        <>
        <Header/>
        <Layout>
            <div className="px-[5%]">
                <div className="flex flex-col gap-4 w-full rounded-lg bg-white shadow-soft p-4 xl:p-6">
                    <div className="flex-col xl:flex-row flex gap-8">
                        <ImgWrapper
                        data={data?.construction}
                        isLoading={isLoading}
                        />

                        <DetailsLayout
                        constructId={constructionId}
                        data={data?.construction}
                        isLoading={isLoading}
                        />
                    </div>

                    <div className="border-t-2 mt-4 py-4 text-sm text-neutral-500 xl:text-base">
                        <div className="flex justify-between">
                            <h1 className="font-medium">PRODUCT ID :</h1>
                            {
                                isLoading ? <SkeletonLoading width={'w-32 xl:w-52'}/> : <p>{data.construction._id}</p>
                            }
                        </div>
                        <div className="flex justify-between">
                            <h1 className="font-medium">TAGS :</h1>
                            {
                                isLoading ? <SkeletonLoading width={'w-24 xl:w-32'}/> : <p>{data.construction.style}</p>
                            }
                        </div>
                    </div>
                        
                    <div className="mt-4 xl:flex xl:items-start xl:gap-4">
                        <div className="xl:w-1/2">
                            <h1 className="font-bold xl:text-lg">Descriptions</h1>
                            {
                                isLoading ? 
                            <div className="mt-3 space-y-2">
                                <SkeletonLoading width={'w-[90%]'}/>
                                <SkeletonLoading width={'w-[65%]'}/>
                                <SkeletonLoading width={'w-[45%]'}/>
                                <SkeletonLoading width={'w-[80%]'}/>
                                <SkeletonLoading width={'w-[88%]'}/>
                            </div>
                                :
                            <p className="text-sm text-neutral-500 mt-2 xl:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae velit laboriosam molestiae hic labore, assumenda, optio fugiat nisi perspiciatis magnam iure excepturi, omnis debitis possimus. Asperiores atque mollitia totam minima!</p>
                            }
                        </div>
                        <div className="mt-6 xl:w-1/2 xl:mt-0">
                            <h1 className="font-bold xl:text-lg">Additional Information</h1>
                            <div className="flex flex-col text-sm mt-2 text-neutral-500 gap-1 xl:text-base">
                                <div className="flex justify-between">
                                    <h1 className="font-medium">Material :</h1>
                                    {isLoading ? <SkeletonLoading width={'w-10'}/> : <p>Wood</p>}
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="font-medium">Square Meters :</h1>
                                    {isLoading ? <SkeletonLoading width={'w-14'}/> : <p>{data.construction.square_meters}</p>}
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="font-medium">Location :</h1>
                                    {isLoading ? <SkeletonLoading width={'w-7'}/> : <p>{data.construction.location}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* REVIEWS */}
                    <ReviewLayout 
                    endpoint={`https://buildong-api.vercel.app/${constructionId}/reviews`}
                    />
                    {/* REVIEWS */}
                </div>

                <CardSwiper 
                data={categoryData}
                dataId={data?.construction._id}
                title={`Related ${data?.construction.category} Categories for You`}
                subTitle={'Explore various product categories that fit your preferences and lifestyle.'}
                />
                <CardSwiper
                data={styleData}
                dataId={data?.construction._id}
                title={`${data?.construction.style} Styles That Match Your Products`}
                subTitle={'Discover styles that perfectly complement your selected products.'}
                />
            </div>
        </Layout>
        <Footer/>
        </>
    )
}

export default ConstructionDetailsPage;