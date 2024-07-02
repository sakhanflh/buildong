import { useEffect, useState } from "react";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/layouts/Footer";
import Layout from "../components/layouts/Layout";
import { ProjectCard } from "../components/layouts/project/ProjectCard";
import axios from "axios";
import Loader from "../components/fragments/Loader";

export default function ProjectPage() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://buildong-api.vercel.app/construction-orders/completed')
                setData(res.data.data)
                console.log(res.data.data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <Header />
            <Layout>
                <div className="px-[5%] xl:pt-5">
                    <div className="flex xl:flex-row flex-col w-full xl:justify-between">
                        <div className="w-full xl:w-1/2 flex flex-col gap-3 xl:gap-8">
                            <h1 className="text-3xl xl:text-6xl font-bold"><span className="text-primary">Master</span> Of Consistency and <span className="text-primary">Quality</span>.</h1>
                            <p>Blessing welcomed ladyship shet met humoured sir breeding her. Six curiosity day assurance bed necessary</p>
                            <aside className="w-full h-52 xl:h-auto xl:w-1/2 bg-cover bg-center rounded-tr-full" style={{ backgroundImage: `url('/img/r-architecture-2gDwlIim3Uw-unsplash.jpg')` }}>
                            </aside>
                            <div className="flex gap-3">
                                <button className="border font-medium bg-primary text-white py-3 px-5 rounded-tl-3xl">Explore</button>
                                <button className="border font-medium border-primary text-primary py-3 px-5 rounded-ee-3xl">Contact Us</button>
                            </div>
                            <div className="flex gap-5 pt-5 justify-center xl:justify-normal">
                                <div className="flex flex-col relative">
                                    <div className="bg-secondary absolute w-7 h-4 xl:w-8 xl:h-4 rounded-b-full -z-50 rotate-[120deg] -left-3"></div>
                                    <h1 className="xl:text-2xl font-medium">242</h1>
                                    <p className="text-sm xl:text-base">Projects Done</p>
                                </div>
                                <div className="flex flex-col relative">
                                    <div className="bg-primary absolute w-7 h-4 xl:w-8 xl:h-4 rounded-b-full -z-50 rotate-[120deg] -left-3"></div>
                                    <h1 className="xl:text-2xl font-medium">152</h1>
                                    <p className="text-sm xl:text-base">Buildings Done</p>
                                </div>
                                <div className="flex flex-col relative">
                                    <div className="bg-font-gray absolute w-7 h-4 xl:w-8 xl:h-4 rounded-b-full -z-50 rotate-[120deg] -left-3"></div>
                                    <h1 className="xl:text-2xl font-medium">250+</h1>
                                    <p className="text-sm xl:text-base">Total Employees</p>
                                </div>
                            </div>
                        </div>

                        <aside className="w-full hidden xl:block xl:w-1/2 bg-cover bg-center xl:rounded-l-full" style={{ backgroundImage: `url('/img/r-architecture-2gDwlIim3Uw-unsplash.jpg')` }}>
                        </aside>
                    </div>

                    <div className="w-full mt-20 xl:mt-28">
                        <div className="w-full justify-center flex">
                            <h1 className="text-2xl xl:text-3xl font-semibold">The <span className="text-primary">Last</span> Project we <span className="text-primary">Made</span></h1>
                        </div>
                        
                        <div className="mt-4 xl:mt-8">
                            {
                                isLoading 
                                ? 
                                <Loader/>
                                :
                                data.map(dt => (
                                    <ProjectCard 
                                    key={dt._id}
                                    img={dt.image[0]}
                                    length={dt.reviews[0].rating}
                                    location={dt.location}
                                    project_name={dt.design_name}
                                    username={dt.reviews[0].username}
                                    review={dt.reviews[0].desc}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Layout>
            <Footer />
        </>
    )
}