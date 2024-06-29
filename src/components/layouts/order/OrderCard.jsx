import Rupiah from "../../../utils/Rupiah";
import SkeletonLoading from "../../fragments/SkeletonLoading";

/* eslint-disable react/prop-types */
const OrderCard = ({data, isLoading}) => {

    if(isLoading){
        return (
            <div className="mt-4 flex gap-4">
                <SkeletonLoading width={'w-16'} height={'h-16'}/>
                <div className="space-y-2">
                    <SkeletonLoading width={'w-24'}/>
                    <SkeletonLoading width={'w-16'}/>
                </div>
            </div>
        )
    }

    return (
    <div className="mt-4 flex gap-4">
        <div className="rounded-lg bg-neutral-300 w-16 h-16 overflow-hidden relative">
            <img src={data.image ? data.image[0] : ''} alt="" className="w-full h-full absolute object-cover"/>
        </div>
        <div>   
            <h1 className="font-semibold xl:text-base">{data?.design_name}</h1>
            <p className=" text-sm xl:text-base">{Rupiah(data?.total_price)}</p>
        </div>
    </div>
    )
}

export default OrderCard;