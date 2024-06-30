import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SkeletonLoading from "../../fragments/SkeletonLoading";

export function ProjectCard() {
    return (
        <>
            <div className="w-full bg-white rounded-lg text-black overflow-hidden gap-5 flex flex-col xl:w-80 xl:rounded-xl shadow-xl">
                <div className="w-full h-52">
                    <img src="/img/r-architecture-2gDwlIim3Uw-unsplash.jpg" alt="" className="object-cover w-full h-full"/>
                </div>

                <div className="flex flex-col gap-2 px-5">
                    <div className="gap-1 flex flex-col">
                        <p className="font-semibold text-sm">Mingkheems</p>
                        <span className="flex text-secondary">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </span>
                    </div>
                    <div className="text-sm">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nobis nesciunt laborum saepe maxime ratione qui, voluptatibus autem architecto dignissimos.</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 border-t-2 px-5 py-3">
                    <div>
                        <h1 className="text-xl font-medium text-primary">Depok</h1>
                    </div>
                    <div className="text-sm">
                        <p className="font-semibold">tes</p>
                        <Link to={'/constructions'} className="flex items-center gap-1 opacity-80">Similiar Project <FaArrowRightLong/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}