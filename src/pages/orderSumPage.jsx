import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/layouts/Footer";
import Layout from "../components/layouts/Layout";
import { RiDiscountPercentFill, RiShieldCheckFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { useFetch } from "../hooks/useFetch";
import OrderCard from "../components/layouts/order/OrderCard";
import SkeletonLoading from "../components/fragments/SkeletonLoading";
import Loader from "../components/fragments/Loader";
import AdditionalOption from "../components/layouts/order/AdditionalOption";
import AddressLayout from "../components/layouts/order/AddressLayout";
import OrderLayout from "../components/layouts/order/OrderLayout";

const OrderSumPage = () => {
    const { constructionId } = useParams();
    const { user, loading } = useContext(UserContext)
    const {data, isLoading, isError} = useFetch(`https://buildong-api.vercel.app/constructions/${constructionId}`)
    const account = user?.user.account
    const [orderId, setOrderId] = useState('');

    useEffect(() => {
      // Generate a random ID when the component mounts
      const newOrderId = generateRandomId();
      setOrderId(newOrderId);
    }, []);
  
    // Function to generate a random ID
    const generateRandomId = () => {
      return 'ORDER-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    };

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
        <Header/>
        <Layout>
            <div className="px-[5%]">
                <button className="flex items-center gap-2 font-medium rounded-lg px-4 py-2 bg-white text-neutral-600 hover:text-white hover:bg-primary active:text-primary  transition-all duration-150">
                    <FaChevronLeft className="text-sm"/>
                    Return
                </button>

                <div className="flex gap-4 mt-4">
                    <div className="flex flex-col gap-4 w-1/2">
                        <AddressLayout account={account}/>
                        {/* ADDITIONAL OPTION*/}
                        <AdditionalOption/>
                    </div>

                    <div className="flex flex-col gap-4 w-1/2">
                        <div className="rounded-lg bg-white shadow-soft flex items-center justify-between px-4 py-3">
                            <div className="flex items-center gap-2">
                                <RiDiscountPercentFill className="text-primary text-2xl"/>
                                <h1 className="font-bold text-lg">Voucher Code</h1>
                            </div>
                            <FaChevronRight/>
                        </div>

                        <OrderLayout data={data} isLoading={isLoading} orderId={orderId}/>
                    </div>
                </div>
            </div>
        </Layout>
        <Footer/>
        </>
    )
}

export default OrderSumPage;