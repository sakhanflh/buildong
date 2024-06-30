import { RiDiscountPercentFill, RiShieldCheckFill } from "react-icons/ri";
import SkeletonLoading from "../../fragments/SkeletonLoading";
import Loader from "../../fragments/Loader";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { useFetch } from "../../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserContext from "../../../context/UserContext";
import PaymentModal from "../order/PaymentModal";

export function PaymentCart() {
    const [showDetails, setShowDetails] = useState(true)
    const { productsId } = useParams();
    const { user, loading } = useContext(UserContext)
    const { data, isLoading, isError } = useFetch(`https://buildong-api.vercel.app/products/${productsId}`)
    const account = user?.user.account
    const [loadingOrder, setLoadingOrder] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [msg, setMsg] = useState('')
    const [newOrder, setNewOrder] = useState({
        payment_method: '',
        design_name: '',
        furniture_cost: '',
        total_price: '',
        image: null,
        style: '',
        category: '',
    })

    useEffect(() => {
        if (data && account) {
            setNewOrder({
                ...newOrder,
                image: data.image,
                total_price: data.total_price,
                style: data.style,
                category: data.category,
                design_name: data.design_name,
            })
        }
    }, [data, account])

    async function handleUploadOrder() {
        setLoadingOrder(true)
        try {
            const response = await axios.post(`https://buildong-api.vercel.app/${account._id}/products-orders`, newOrder);
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
                <div className="rounded-lg bg-white shadow-soft flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                        <RiDiscountPercentFill className="text-primary text-2xl" />
                        <h1 className="font-bold xl:text-lg">Voucher Code</h1>
                    </div>
                    <FaChevronRight />
                </div>
                <div className="rounded-lg bg-white shadow-soft px-6 py-6">
                    <h1 className="xl:text-lg font-bold">Order Summary</h1>
                    <div className="mt-2 text-sm xl:text-base">
                        <div className="py-4">
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold">Details</h1>
                                <FaChevronDown onClick={() => setShowDetails(!showDetails)} className={`${showDetails ? 'rotate-0' : 'rotate-180'} transition-all duration-300`} />
                            </div>
                            <div className={`space-y-1 mt-2 text-neutral-500 ${showDetails ? '' : 'hidden'}`}>
                                <div className="flex justify-between items-center">
                                    <p>Total Harga</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p>Total Diskon</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t-2 border-dotted py-4">
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold">Payment Method</h1>
                                <p onClick={() => setShowModal(true)} className="text-primary cursor-pointer font-semibold">{newOrder.payment_method ? "Change" : "Add"}</p>
                            </div>
                            <div className={`${newOrder.payment_method ? "flex" : 'hidden'} justify-between text-neutral-500`}>
                                <p className="mt-1">{newOrder.payment_method}</p>
                                <p>+ Rp 2.500</p>
                            </div>
                        </div>
                        <PaymentModal
                            onClick={(e) => setNewOrder({ ...newOrder, payment_method: e })}
                            payment={newOrder.payment_method}
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />

                        <div className="bg-blue-50 rounded-lg px-4 flex justify-between py-2 font-semibold mt-4">
                            <h1>Total</h1>
                            {
                                isLoading || !data.total_price ?
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