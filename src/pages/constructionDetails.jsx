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

const ConstructionDetailsPage = () => {
    const { constructionId } = useParams()
    const {data, isLoading, isError} = useFetch(`https://buildong-api.vercel.app/constructions/${constructionId}`)
    if(isError){
        return alert(isError.message)
    }


    console.log(data)

    return(
        <>
        <Header/>
        <Layout>
            <div className="px-[5%]">
                <div className="flex flex-col gap-4 w-full rounded-lg bg-white shadow-soft p-4 xl:p-6">
                    <div className="flex-col xl:flex-row flex gap-8">
                        <ImgWrapper
                        data={data}
                        isLoading={isLoading}
                        />

                        <DetailsLayout
                        constructId={constructionId}
                        data={data}
                        isLoading={isLoading}
                        />
                    </div>

                    <div className="border-t-2 mt-4 py-4 text-sm text-neutral-500 xl:text-base">
                        <div className="flex justify-between">
                            <h1 className="font-medium">PRODUCT ID :</h1>
                            {
                                isLoading ? <SkeletonLoading width={'w-32 xl:w-52'}/> : <p>{data._id}</p>
                            }
                        </div>
                        <div className="flex justify-between">
                            <h1 className="font-medium">TAGS :</h1>
                            {
                                isLoading ? <SkeletonLoading width={'w-24 xl:w-32'}/> : <p>{data.style}</p>
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
                                    {isLoading ? <SkeletonLoading width={'w-14'}/> : <p>{data.square_meters}</p>}
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="font-medium">Location :</h1>
                                    {isLoading ? <SkeletonLoading width={'w-7'}/> : <p>{data.location}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* REVIEWS */}
                    <ReviewLayout isLoading={isLoading} reviews={data?.reviews}/>
                    {/* REVIEWS */}
                </div>

                <CardSwiper 
                title={'The Right Project Categories for You'}
                subTitle={'Explore various product categories that fit your preferences and lifestyle.u'}
                />
                <CardSwiper
                title={'Best Prices for Your Selected Projects'}
                subTitle={'Find the perfect price offers that match your needs and budget.'}
                />
                <CardSwiper
                title={'Styles That Match Your Products'}
                subTitle={'Discover styles that perfectly complement your selected products.'}
                />
            </div>
        </Layout>
        <Footer/>
        </>
    )
}

export default ConstructionDetailsPage;