/* eslint-disable react/prop-types */
import { FaChevronDown } from "react-icons/fa6"
import OrderCard from "./OrderCard"
import SkeletonLoading from "../../fragments/SkeletonLoading"
import { RiShieldCheckFill } from "react-icons/ri"
import Rupiah from "../../../utils/Rupiah"

const OrderLayout = ({data, isLoading, orderId}) => {
    const workerSalary = data?.project_duration * ( 150000 * data?.worker )

    return (
        <div className="rounded-lg bg-white shadow-soft px-6 py-6">
                            <div className="flex justify-between">
                                <h1 className="text-lg font-bold">Order Summary</h1>
                                <h1 className="font-bold text-neutral-500">{orderId}</h1>
                            </div>

                            <OrderCard data={data} isLoading={isLoading}/>

                            <div className="mt-4">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h1 className="font-semibold">Details</h1>
                                        <FaChevronDown/>
                                    </div>
                                    <div className="space-y-1 mt-1 text-neutral-500">
                                        <div className="flex justify-between items-center">
                                            <p>5 Workers</p>
                                            <p>{Rupiah(workerSalary)}</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p>Square Meters</p>
                                            <p>{isLoading ? <SkeletonLoading width={'w-10'}/> :data.square_meters}</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p>Style</p>
                                            <p>{isLoading ? <SkeletonLoading width={'w-14'}/> : data.style}</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p>Location</p>
                                            <p>{isLoading ? <SkeletonLoading width={'w-10'}/> : data.location}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t-2 mt-4 border-dotted pt-2">
                                    <h1 className="font-semibold">Additional Order</h1>
                                    <div className="space-y-1 mt-1 text-neutral-500">
                                        <div className="flex justify-between">
                                            <p>+ 5 Workers</p>
                                            <p>Rp 2.400.000</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p>Transport</p>
                                            <p>Rp 200.000</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p>Project Duration</p>
                                            <p><span className="line-through">7 Days</span> 3-5 Days</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg px-4 flex justify-between py-2 font-semibold mt-6">
                                    <h1>Total</h1>
                                    <h1 className="text-primary">Rp 7.400.000</h1>
                                </div>
                                <button className="flex bg-primary rounded-lg px-4 py-3 text-white font-semibold w-full justify-center items-center gap-4 mt-4">
                                    <RiShieldCheckFill/>
                                    Purchase Now
                                </button>
                            </div>
                        </div>
    )
}

export default OrderLayout;