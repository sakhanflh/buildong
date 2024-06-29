import { FaPencil } from "react-icons/fa6";
import SkeletonLoading from "../../fragments/SkeletonLoading";
import { FmDateName } from "../../../utils/FmDateName";
import { Link } from "react-router-dom";
import LevelCard from "../../fragments/LevelCard";
import Rupiah from "../../../utils/Rupiah";

/* eslint-disable react/prop-types */
const DetailsLayout = ({user, loading, points, level}) => {
    const account = user?.user.account

    // if(!account){
    //     return (
    //         <div className="flex flex-col items-center">
    //             <h1 className="text-center xl:text-start font-medium text-neutral-600">Oops, you haven't completed your account yet. Complete your account <Link to={'/profile/edit'} className="text-primary font-bold">here</Link></h1>
    //             <div className="w-40 mt-6">
    //                 <img src="/svg/profile-details.svg" alt="" />
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <>
            <div className="flex gap-6">
                {
                    loading ?
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <SkeletonLoading height={'h-full'}/>
                    </div>
                    :
                    <div className="rounded-full w-20 h-20 xl:w-32 xl:h-32 ring-2 ring-primary relative">
                        <div className="rounded-full w-20 h-20 xl:w-32 relative xl:h-32 overflow-hidden">
                            <img src={account?.profile_picture} alt=""  className="w-full absolute h-full object-cover"/>
                        </div>
                        <Link to={'/profile/edit'} className="clicked absolute rounded-full bg-white w-10 h-10 z-10 flex justify-center items-center bottom-0 right-0 shadow-multiple border-primary border-2 cursor-pointer">
                            <FaPencil/>
                        </Link>
                    </div>
                }
                {
                    loading ?
                    <div className="space-y-2">
                        <SkeletonLoading width={'w-32'} height={'h-2 xl:h-3'}/>
                        <SkeletonLoading width={'w-40'} height={'h-2 xl:h-2.5'}/>
                    </div>
                    :
                    <div className="flex items-start justify-between w-full">
                        <div>
                            <h1 className="font-semibold text-base xl:text-lg">{account?.username}</h1>
                            <h1 className="text-neutral-500 text-sm xl:text-base">{user.user.email}</h1>
                            <h2 className="text-neutral-500 text-sm xl:text-base mt-4">Registered since {FmDateName(user.user.registered_at)}</h2>
                        </div>
                    </div>
                }
            </div>
            <div className="mt-6">
                <div className="flex gap-1 mt-1 flex-wrap xl:flex-nowrap">
                <LevelCard points={points} level={level}/>
                    <div className="rounded-lg flex flex-col justify-center px-4 py-2 border-2 w-full xl:w-1/3 text-sm space-y-1 border-neutral-400">
                        <h1 className="text-sm">Product Orders</h1>
                        <p className="text-lg font-semibold xl:text-2xl">{Rupiah(0)}</p>
                    </div>
                    <div className="rounded-lg flex flex-col justify-center px-4 py-2 border-2 w-full xl:w-1/3 text-sm space-y-1 bg-primary text-white">
                        <h1 className="text-sm">Construction Orders</h1>
                        <p className="text-lg font-semibold xl:text-2xl">{Rupiah(0)}</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="font-semibold text-base xl:text-base">Address</h1>
                {
                    loading ?
                    <SkeletonLoading width={'w-52'} height={'h-2 xl:h-3'} margin={'mt-2'}/>
                    :
                    <p className="text-neutral-500 text-sm xl:text-base">{account?.address}</p>
                }
            </div>
            <div className="mt-4">
                <h1 className="font-semibold text-base xl:text-base">Phone Number</h1>
                {
                    loading ?
                    <SkeletonLoading width={'w-24'} height={'h-2 xl:h-3'} margin={'mt-2'}/>
                    :
                    <p className="text-neutral-500 text-sm xl:text-base">{account?.phone}</p>
                }
            </div>
            <div className="mt-4 flex justify-end">
            <Link to={'/profile/edit'}>
                <button className="px-6 text-sm xl:text-base clicked bg-secondary font-semibold flex items-center gap-4 py-2 rounded-lg shadow-soft">
                    <FaPencil/>
                    Edit my profile
                </button>
            </Link>
            </div>
        </>
    )
}

export default DetailsLayout;