/* eslint-disable react/prop-types */
import { FaChevronDown } from "react-icons/fa6"
import OrderCard from "./OrderCard"
import SkeletonLoading from "../../fragments/SkeletonLoading"
import { RiShieldCheckFill } from "react-icons/ri"
import Rupiah from "../../../utils/Rupiah"
import { useEffect, useState } from "react"
import Loader from "../../fragments/Loader"

const OrderLayout = ({data, isLoading, newOrder, setNewOrder, setShowModal, onClick, loadingOrder}) => {
    const defWorkerSalary = data?.project_duration * ( 150000 * data?.worker )
    const workerSalary = data?.project_duration * ( 150000 * newOrder?.total_workers ) 
    const furniturePrice = data?.total_price - defWorkerSalary
    const totalPrice = workerSalary + furniturePrice + (newOrder.payment_method ? 2500 : 0)
    const [showDetails, setShowDetails] = useState(true)

    useEffect(() => {
        if(data){
            setNewOrder({...newOrder, worker_salary: workerSalary, furniture_cost: furniturePrice, total_price: totalPrice})
        }
    }, [data, workerSalary])

    return (
        <div className="rounded-lg bg-white shadow-soft px-6 py-6">
            <h1 className="xl:text-lg font-bold">Order Summary</h1>
            <OrderCard data={data} isLoading={isLoading}/>
            <div className="mt-2 text-sm xl:text-base">
                <div className="py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold">Details</h1>
                        <FaChevronDown onClick={() => setShowDetails(!showDetails)} className={`${showDetails ? 'rotate-0': 'rotate-180'} transition-all duration-300`}/>
                    </div>
                    <div className={`space-y-1 mt-2 text-neutral-500 ${showDetails ? '' : 'hidden'}`}>
                        <div className="flex justify-between items-center">
                            <p>5 Workers</p>
                            <p>{isLoading ? <SkeletonLoading width={'w-20'}/> : Rupiah(defWorkerSalary)}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>All Furniture</p>
                            <p>{isLoading ? <SkeletonLoading width={'w-20'}/> : Rupiah(furniturePrice)}</p>
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
                
                <div className="border-t-2 border-dotted py-4">
                    <h1 className="font-semibold">Additional Order</h1>
                    {
                        isLoading || !newOrder.project_duration ?
                        <div className="py-2 flex justify-center">
                            <Loader color={'bg-primary'}/>
                        </div>
                        :
                        <div>
                            <div className="space-y-1 mt-1 text-neutral-500">
                                <div className={`justify-between ${newOrder.total_workers == data.worker ? 'hidden' : 'flex'}`}>
                                    <p >+ {newOrder.total_workers - 5} Workers</p>
                                    <p className="text-green-600 font-semibold">{Rupiah(newOrder.worker_salary)}</p>
                                </div>
                                <div className={`flex justify-between ${newOrder.project_start ? '' : 'hidden'}`}>
                                    <p>Start Project</p>
                                    <p className="">{newOrder.project_start}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Project Duration</p>
                                    <p className="font-semibold text-primary"><span className={`${data.project_duration == newOrder.project_duration ? 'hidden' : ''} font-normal line-through text-neutral-500`}>{data.project_duration} Days</span> {newOrder?.project_duration} Days</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className="border-t-2 border-dotted py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold">Payment Method</h1>
                        <p onClick={() => setShowModal(true)} className="text-primary cursor-pointer font-semibold">{newOrder.payment_method ? "Change":"Add"}</p>
                    </div>
                    <div className={`${newOrder.payment_method ? "flex" : 'hidden'} justify-between text-neutral-500`}>
                        <p className="mt-1">{newOrder.payment_method}</p>
                        <p>+ Rp 2.500</p>
                    </div>
                </div>
                    
                <div className="bg-blue-50 rounded-lg px-4 flex justify-between py-2 font-semibold mt-4">
                    <h1>Total</h1>
                    {
                        isLoading || !data.total_price ?
                        <SkeletonLoading width={'w-20'}/>
                        :
                        <h1 className="text-primary">{Rupiah(totalPrice)}</h1>
                    }
                </div>
                
                {
                    loadingOrder ?
                    <button className="flex clicked bg-primary rounded-lg px-4 py-3 text-white font-semibold w-full justify-center items-center gap-4 mt-4">
                        <Loader/>
                    </button>
                    :
                    <button onClick={onClick} className="flex clicked bg-primary rounded-lg px-4 py-3 text-white font-semibold w-full justify-center items-center gap-4 mt-4">
                        <RiShieldCheckFill/>
                        Purchase Now
                    </button>
                }
            </div>
        </div>
    )
}

export default OrderLayout;