import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/layouts/Footer";
import Layout from "../components/layouts/Layout";
import { RiDiscountPercentFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { useFetch } from "../hooks/useFetch";
import AdditionalOption from "../components/layouts/order/AdditionalOption";
import AddressLayout from "../components/layouts/order/AddressLayout";
import OrderLayout from "../components/layouts/order/OrderLayout";

const OrderSumPage = () => {
    const { constructionId } = useParams();
    const { user, loading } = useContext(UserContext)
    const {data, isLoading, isError} = useFetch(`https://buildong-api.vercel.app/constructions/${constructionId}`)
    const account = user?.user.account
    const [newOrder, setNewOrder] = useState({
        project_start: '',
        project_duration: '',
        total_workers: '',
        worker_salary: '',
        design_name: '',
        furniture_cost: '',
        location: '',
        address: '',
        total_price: '',
        image: null,
        square_meters: '',
        style: '',
        category: '',
    })
    const workerSalary = data?.project_duration * ( 150000 * newOrder?.total_workers )

    useEffect(() => {
        console.log(newOrder)
    }, [newOrder])

    useEffect(() => {
        console.log(data)
        if(data && account){
            setNewOrder({
                ...newOrder, 
                image: data.image,
                project_duration: data.project_duration,
                total_workers: data.worker,
                worker_salary: workerSalary,
                square_meters: data.square_meters,
                total_price: data.total_price,
                style: data.style,
                category: data.category,
                location: data.location,
                design_name: data.design_name,
                address: account.address
            })
        }
    }, [data, account])

    return (
        <>
        <Header/>
        <Layout>
            <div className="px-[5%]">
                <button className="flex items-center gap-2 font-medium rounded-lg px-4 py-2 bg-white shadow-soft hover:text-white hover:bg-primary active:text-primary text-sm xl:text-base transition-all duration-150">
                    <FaChevronLeft className="text-xs xl:text-sm"/>
                    Return
                </button>

                <div className="flex flex-col xl:flex-row gap-4 mt-4">
                    <div className="flex flex-col gap-4 w-full xl:w-1/2">
                        <AddressLayout 
                        account={account}/>
                        <AdditionalOption 
                        data={data} 
                        isLoading={isLoading}
                        newOrder={newOrder}
                        setNewOrder={setNewOrder}
                        />
                    </div>

                    <div className="flex flex-col gap-4 w-full xl:w-1/2">
                        <div className="rounded-lg bg-white shadow-soft flex items-center justify-between px-4 py-3">
                            <div className="flex items-center gap-2">
                                <RiDiscountPercentFill className="text-primary text-2xl"/>
                                <h1 className="font-bold xl:text-lg">Voucher Code</h1>
                            </div>
                            <FaChevronRight/>
                        </div>

                        <OrderLayout 
                        data={data} 
                        isLoading={isLoading} 
                        newOrder={newOrder}
                        setNewOrder={setNewOrder}
                        />
                    </div>
                </div>
            </div>
        </Layout>
        <Footer/>
        </>
    )
}

export default OrderSumPage;