/* eslint-disable react/prop-types */
import { FaCamera } from "react-icons/fa6"
import SkeletonLoading from "../../fragments/SkeletonLoading"

const ImgWrapper = ({isLoading, data}) => {
    return (
        <div className="flex flex-col gap-2 xl:w-[40%]">
            <div className="relative rounded-lg w-full h-44 overflow-hidden xl:h-72">
                {
                isLoading ?
                <SkeletonLoading height={'h-full'}/>
                    :
                <img src={data.image[0]} alt="" className="w-full h-full object-cover absolute"/>
                }
            </div>
            <div className="flex gap-2">
                <div className="w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden relative flex justify-center items-center text-3xl text-neutral-300 font-bold xl:h-32 xl:w-32">
                {
                isLoading ?
                    <SkeletonLoading height={'h-full'}/>
                :
                data.image[1] ? 
                <img src={data.image[1]} alt="" className="w-full h-full object-cover absolute"/>
                :
                <FaCamera/>
                }
                </div>
            <div className="w-20 h-20 bg-neutral-100 rounded-lg flex justify-center relative overflow-hidden items-center text-3xl text-neutral-300 font-bold xl:h-32 xl:w-32">
            {
                isLoading ? 
                <SkeletonLoading height={'h-full'}/>
                :
                data.image[2] ? 
                <img src={data.image[2]} alt="" className="w-full h-full object-cover absolute"/>
                :
                <FaCamera/>
            }
            </div>
        </div>
    </div>
    )
}

export default ImgWrapper