import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Layout from "../components/layouts/Layout";
import Rupiah from "../utils/Rupiah";
import { FaCartPlus, FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Loader from "../components/fragments/Loader";
import FormatDate from "../utils/FormatDate";
import { Header } from "../components/fragments/Header";
import Stars from "../components/elements/Stars";
import ReviewCard from "../components/fragments/ReviewCard";
import { Footer } from "../components/layouts/Footer";
import CardSwiper from "../components/layouts/CardSwiper";

const ConstructionDetailsPage = () => {
    const { constructionId } = useParams()
    const {data, isLoading, isError} = useFetch(`https://buildong-api.vercel.app/constructions/${constructionId}`)
    if(isError){
        return alert(isError.message)
    }

    if(isLoading){
        return <Loader/>
    }

    return(
        <>
        <Header/>
        <Layout>
            <div className="px-[5%]">
                <div className="flex flex-col gap-4 w-full rounded-lg bg-white shadow-soft p-4 xl:p-6">
                    <div className="flex-col xl:flex-row flex gap-8">
                        <div className="flex flex-col gap-2 xl:w-1/2">
                            <div className="relative rounded-lg w-full h-44 overflow-hidden xl:h-72">
                                <img src={data.image[0]} alt="" className="w-full h-full object-cover absolute"/>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden relative flex justify-center items-center text-3xl text-neutral-300 font-bold xl:h-32 xl:w-32">
                                    <img src={data.image[1]} alt="" className="w-full h-full object-cover absolute"/>
                                </div>
                                <div className="w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden relative flex justify-center items-center text-3xl text-neutral-300 font-bold xl:h-32 xl:w-32">
                                    <img src={data.image[2]} alt="" className="w-full h-full object-cover absolute"/>
                                </div>
                                <div className="w-20 h-20 bg-neutral-100 rounded-lg flex justify-center relative overflow-hidden items-center text-3xl text-neutral-300 font-bold xl:h-32 xl:w-32">
                                    {
                                        data.image[3] ? 
                                        <img src={data.image[3]} alt="" className="w-full h-full object-cover absolute"/>
                                        :
                                        <h1>+</h1>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="font-semibold text-lg ">
                                <p className="text-neutral-500 text-sm">{data.style}</p>
                                <h1 className=" xl:text-xl">{data.design_name}</h1>
                                <div className="flex text-sm flex-col gap-1 my-4 xl:text-base xl:items-center xl:mt-2 xl:flex-row xl:gap-4">
                                    <Stars length={5}/>
                                    <div>
                                        <div className="xl:flex xl:items-center xl:gap-2">
                                            <h1>4.9</h1>
                                            <p className="text-sm text-neutral-500">( 245 review )</p>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="xl:text-2xl xl:font-bold ">{Rupiah(data.total_price)}</h4>
                            </div>
                            <p className="text-sm xl:text-base">{data.descriptions} Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                            <div className="my-3">
                                <h1 className="font-medium xl:font-bold">Project Timeline</h1>
                                <div className="text-sm mt-2 xl:text-base">
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
                                <div className="flex items-center gap-2">
                                    <FaCheck className="text-primary"/>
                                    <p><b>8</b> in stock</p>
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <button className="bg-yellow-500 rounded-lg w-max text-white px-4 py-3">
                                        <FaCartPlus/>
                                    </button>
                                    <button className="bg-primary rounded-lg w-full text-white px-4 py-3 xl:font-semibold">
                                        Order this project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-2 mt-4 py-4 text-sm text-neutral-500 xl:text-base">
                        <div className="flex justify-between">
                            <h1 className="font-medium">PRODUCT ID :</h1>
                            <p>{data._id}</p>
                        </div>
                        <div className="flex justify-between">
                            <h1 className="font-medium">TAGS :</h1>
                            <p>{data.style}</p>
                        </div>
                    </div>

                    <div className="mt-4 xl:flex xl:items-start xl:gap-4">
                        <div className="xl:w-1/2">
                            <h1 className="font-bold xl:text-lg">Descriptions</h1>
                            <p className="text-sm text-neutral-500 mt-2 xl:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae velit laboriosam molestiae hic labore, assumenda, optio fugiat nisi perspiciatis magnam iure excepturi, omnis debitis possimus. Asperiores atque mollitia totam minima!</p>
                        </div>
                        <div className="mt-6 xl:w-1/2 xl:mt-0">
                            <h1 className="font-bold xl:text-lg">Additional Information</h1>
                            <div className="flex flex-col text-sm mt-2 text-neutral-500 gap-1 xl:text-base">
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

                    {/* REVIEWS */}
                    <div className="mt-6 xl:flex xl:gap-6">
                        <div className="xl:w-[30%]">
                            <h1 className="font-bold xl:text-lg">Customer Reviews</h1>
                            <p className="text-sm xl:text-base">1134 reviews</p>
                            <div className="flex flex-col gap-1 mt-4 text-sm xl:text-base">
                                <div className="flex justify-between">
                                    <Stars length={5}/>
                                    <p>1003</p>
                                </div>
                                <div className="flex justify-between">
                                    <Stars length={4}/>
                                    <p>92</p>
                                </div>
                                <div className="flex justify-between">
                                    <Stars length={3}/>
                                    <p>20</p>
                                </div>
                                <div className="flex justify-between">
                                    <Stars length={2}/>
                                    <p>8</p>
                                </div>
                                <div className="flex justify-between">
                                    <Stars length={1}/>
                                    <p>4</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-sm rounded-lg xl:w-[70%] xl:mt-0 xl:border-l-2 xl:px-6 py-2 ">
                            <ReviewCard
                            name={'John Doe'}
                            postAt={'June 24, 2024'}
                            star={3}
                            desc={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, incidunt maiores quidem sunt assumenda vitae recusandae, sed reprehenderit facere magni commodi laudantium? Explicabo, perferendis assumenda!'}
                            />
                            <ReviewCard
                            name={'John Doe'}
                            postAt={'June 24, 2024'}
                            star={3}
                            desc={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, incidunt maiores quidem sunt assumenda vitae recusandae, sed reprehenderit facere magni commodi laudantium? Explicabo, perferendis assumenda!'}
                            />
                            <ReviewCard
                            name={'John Doe'}
                            postAt={'June 24, 2024'}
                            star={3}
                            desc={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, incidunt maiores quidem sunt assumenda vitae recusandae, sed reprehenderit facere magni commodi laudantium? Explicabo, perferendis assumenda!'}
                            />
                            <div className="flex items-center gap-6 w-full justify-center mt-4 text-sm">
                                <FaChevronLeft/>
                                <div className="bg-primary text-white font-bold rounded-lg px-4 py-2">1</div>
                                <FaChevronRight/>
                            </div>
                        </div>
                    </div>
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