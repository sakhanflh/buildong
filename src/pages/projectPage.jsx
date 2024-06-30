import { Header } from "../components/fragments/Header";
import Layout from "../components/layouts/Layout";
import { ProjectCard } from "../components/layouts/project/ProjectCard";

export default function ProjectPage() {
    return (
        <>
            <Header />
            <Layout>
                <div className="px-[5%] pt-5">
                    <div className="flex w-full justify-between">
                        <div className="w-1/2 flex flex-col gap-8">
                            <h1 className="text-6xl font-bold"><span className="text-primary">Master</span> Of Consistency and <span className="text-primary">Quality</span>.</h1>
                            <p>Blessing welcomed ladyship shet met humoured sir breeding her. Six curiosity day assurance bed necessary</p>
                            <div className="flex gap-3">
                                <button className="border font-medium bg-primary text-white py-3 px-5 rounded-tl-3xl">Explore</button>
                                <button className="border font-medium border-primary text-primary py-3 px-5 rounded-ee-3xl">Contact Us</button>
                            </div>
                            <div className="flex gap-5 pt-5">
                                <div className="flex flex-col relative">
                                    <div className="bg-secondary absolute w-8 h-4 rounded-b-full -z-50 rotate-[120deg] -left-3"></div>
                                    <h1 className="text-2xl font-medium">242</h1>
                                    <p>Projects Done</p>
                                </div>
                                <div className="flex flex-col relative">
                                    <div className="bg-primary absolute w-8 h-4 rounded-b-full -z-50 rotate-[120deg] -left-3"></div>
                                    <h1 className="text-2xl font-medium">152</h1>
                                    <p>Buildings Done</p>
                                </div>
                                <div className="flex flex-col relative">
                                    <div className="bg-font-gray absolute w-8 h-4 rounded-b-full -z-50 rotate-[120deg] -left-3"></div>
                                    <h1 className="text-2xl font-medium">250+</h1>
                                    <p>Total Employees</p>
                                </div>
                            </div>
                        </div>

                        <aside className="w-1/2 bg-cover bg-center rounded-l-full" style={{ backgroundImage: `url('/img/r-architecture-2gDwlIim3Uw-unsplash.jpg')` }}>

                        </aside>
                    </div>

                    <div className="w-full mt-28">
                        <div className="w-full justify-center flex">
                            <h1 className="text-3xl font-semibold">The <span className="text-primary">Last</span> Project we <span className="text-primary">Made</span></h1>
                        </div>
                        <div className="mt-8">
                            <ProjectCard/>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}