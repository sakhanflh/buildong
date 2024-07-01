import { useParams } from "react-router-dom";
import { Header } from "../components/fragments/Header";
import SkeletonLoading from "../components/fragments/SkeletonLoading";
import CardSwiper from "../components/layouts/CardSwiper";
import { Footer } from "../components/layouts/Footer";
import Layout from "../components/layouts/Layout";
import DetailsLayout from "../components/layouts/constructionDetail/DetailsLayout";
import ImgWrapper from "../components/layouts/constructionDetail/ImgWrapper";
import ReviewLayout from "../components/layouts/constructionDetail/ReviewLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { FmDateName } from "../utils/FmDateName";

export function ShopDetailsPage() {
    const { shopId } = useParams()
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await axios.get(`https://buildong-api.vercel.app/products/${shopId}`)
                console.log(res)
                setData(res.data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        } 
        fetchData()
    }, [shopId])
    return (
        <>
            <Header />
            <Layout>
                <div className="px-[5%]">
                    <div className="flex flex-col gap-4 w-full rounded-lg bg-white shadow-soft p-4 xl:p-6">
                        <div className="flex-col xl:flex-row flex gap-8">
                            <ImgWrapper
                                data={data}
                                isLoading={isLoading}
                            />

                            <DetailsLayout
                                constructId={shopId}
                                data={data}
                                isLoading={isLoading}
                            />
                        </div>

                        <div className="border-t-2 mt-4 py-4 text-sm text-neutral-500 xl:text-base">
                            <div className="flex justify-between">
                                <h1 className="font-medium">PRODUCT ID :</h1>
                                {
                                    isLoading ? <SkeletonLoading width={'w-32 xl:w-52'} /> 
                                    : 
                                    <p>{shopId}</p>
                                }
                            </div>
                            <div className="flex justify-between">
                                <h1 className="font-medium">TAGS :</h1>
                                {
                                    isLoading ? <SkeletonLoading width={'w-24 xl:w-32'} /> 
                                    :
                                    <p>{data.brand}</p>
                                }
                            </div>
                        </div>

                        <div className="mt-4 xl:flex xl:items-start xl:gap-4">
                            <div className="xl:w-1/2">
                                <h1 className="font-bold xl:text-lg">Descriptions</h1>
                                {
                                    isLoading ?
                                        <div className="mt-3 space-y-2">
                                            <SkeletonLoading width={'w-[90%]'} />
                                            <SkeletonLoading width={'w-[65%]'} />
                                            <SkeletonLoading width={'w-[45%]'} />
                                            <SkeletonLoading width={'w-[80%]'} />
                                            <SkeletonLoading width={'w-[88%]'} />
                                        </div>
                                        :
                                        <p className="text-sm text-neutral-500 mt-2 xl:text-base">{data.desc}</p>
                                }
                            </div>
                            <div className="mt-6 xl:w-1/2 xl:mt-0">
                                <h1 className="font-bold xl:text-lg">Additional Information</h1>
                                <div className="flex flex-col text-sm mt-2 text-neutral-500 gap-1 xl:text-base">
                                    <div className="flex justify-between">
                                        <h1 className="font-medium">Material :</h1>
                                        {isLoading ? <SkeletonLoading width={'w-10'} /> : <p>{data.material}</p>}
                                    </div>
                                    <div className="flex justify-between">
                                        <h1 className="font-medium">Published At :</h1>
                                        {isLoading ? <SkeletonLoading width={'w-7'} /> : <p>{FmDateName(data.published_at)}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* REVIEWS */}
                        {/* <ReviewLayout
                            isLoading={isLoading}
                            reviews={data?.reviews}
                            setPage={setPage}
                            page={page}
                            totalPages={totalPages}
                        />  */}
                        {/* REVIEWS */}
                    </div>

                    {/* <CardSwiper
                        // data={categoryData}
                        // dataId={data?.construction._id}
                        // title={`Related ${data?.construction.category} Categories for You`}
                        // subTitle={'Explore various product categories that fit your preferences and lifestyle.'}
                    />
                    <CardSwiper
                        // data={styleData}
                        // dataId={data?.construction._id}
                        // title={`${data?.construction.style} Styles That Match Your Products`}
                        // subTitle={'Discover styles that perfectly complement your selected products.'}
                    /> */}
                </div>
            </Layout>
            <Footer />
        </>
    )
}