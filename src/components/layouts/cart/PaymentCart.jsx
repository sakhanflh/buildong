/* eslint-disable react/prop-types */
import { RiDiscountPercentFill, RiShieldCheckFill } from "react-icons/ri";
import SkeletonLoading from "../../fragments/SkeletonLoading";
import Loader from "../../fragments/Loader";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../../context/UserContext";
import Rupiah from "../../../utils/Rupiah";
import VoucherShop from "../shop/VoucherShop";

export function PaymentCart({newData, setNewData}) {
    const [totalPrice, setTotalPrice] = useState(0)
    const cartData = JSON.parse(localStorage.getItem('cart'))
    const [voucher, setVoucher] = useState(null)
    const { user, loading } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
    const account = user?.user.account
    const [loadingOrder, setLoadingOrder] = useState(false)
    const [msg, setMsg] = useState('') 

    useEffect(() => {
        if(newData){
            const sumPrice = newData?.reduce((acc, cur) => acc + cur.total_price, 0)
            setTotalPrice(sumPrice)
            setData(newData)
            setIsLoading(false)
        }
    }, [newData, newData.quantity])

    async function handleUploadOrder() {
        setLoadingOrder(true)
        try {
            const response = await axios.post(`https://buildong-api.vercel.app/${account._id}/product-orders`, {
                products: [...newData]
            });
            setLoadingOrder(false);
            setMsg(response.data.message)
            setTimeout(() => {
                window.location.href = "/#/products"
            }, 2000)
            console.log('Response:', response.data);
        } catch (error) {
            setLoadingOrder(false);
            console.error('Error uploading order:', error);
        }
    }
    return (
        <>
            <div className="w-[40%] flex flex-col gap-2">
                <VoucherShop
                voucher={voucher}
                setVoucher={setVoucher}
                newOrder={newData}
                />

                <div className="rounded-lg bg-white shadow-soft px-6 py-6">
                    <h1 className="xl:text-lg font-bold">Order Summary</h1>
                    <div className="mt-2 flex flex-col gap-2">
                        {
                            data?.map(dt => (
                                <div key={dt.product_id} className="flex gap-2">
                                    <div className="rounded-lg overflow-hidden w-[15%] h-14">
                                        <img src={dt.image} alt="" className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="flex justify-between w-[85%]">
                                        <div>
                                            <h1>{dt.product_name}</h1>
                                            <p className="font-semibold mt-2">{Rupiah(dt.total_price)}</p>
                                        </div>
                                        <div>
                                            <h1 className="text-primary font-semibold">x {dt.quantity}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="mt-2 text-sm xl:text-base">

                        <div className="bg-blue-50 rounded-lg px-4 flex justify-between py-2 font-semibold mt-4">
                            <h1>Total</h1>
                            {
                                isLoading ?
                                    <SkeletonLoading width={'w-20'} />
                                    :
                                    <h1 className="text-primary">{Rupiah(totalPrice)}</h1>
                            }
                        </div>

                        {
                            loadingOrder ?
                                <button className="flex clicked bg-primary rounded-lg px-4 py-3 text-white font-semibold w-full justify-center items-center gap-4 mt-4">
                                    <Loader />
                                </button>
                                :
                                <button onClick={handleUploadOrder} className="flex clicked bg-primary rounded-lg px-4 py-3 text-white font-semibold w-full justify-center items-center gap-4 mt-4">
                                    <RiShieldCheckFill />
                                    Purchase Now
                                </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}