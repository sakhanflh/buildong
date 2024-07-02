import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Header } from "../components/fragments/Header";
import Layout from "../components/layouts/Layout";
import { RiDiscountPercentFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import AdditionalOption from "../components/layouts/order/AdditionalOption";
import AddressLayout from "../components/layouts/order/AddressLayout";
import OrderLayout from "../components/layouts/order/OrderLayout";
import PaymentModal from "../components/layouts/order/PaymentModal";
import axios from "axios";
import SimpleAlert from "../components/fragments/SimpleAlert";
import VoucherLayout from "../components/layouts/order/VoucherLayout";
import { calculateDiscount } from "../utils/CalculateDiscount";

const OrderSumPage = () => {
    const { constructionId } = useParams();
    const { user, loading } = useContext(UserContext)
    const account = user?.user.account
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [loadingOrder, setLoadingOrder] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [voucher, setVoucher] = useState(null)
    const [msg, setMsg] = useState('')
    const [newOrder, setNewOrder] = useState({
        project_start: '',
        product_id: '',
        payment_method: '',
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
    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await axios.get(`https://buildong-api.vercel.app/constructions/${constructionId}`)
                setData(res.data.construction)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        console.log(newOrder)
    }, [newOrder])
    
    useEffect(() => {
        const workerSalary = data?.project_duration * ( 150000 * data?.worker )
        if(data && account){
            setNewOrder({
                ...newOrder, 
                image: data.image,
                product_id: data._id,
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
    }, [account])

    async function handleUploadOrder(){
        setLoadingOrder(true)
        try {
            const response = await axios.post(`https://buildong-api.vercel.app/${account._id}/construction-orders`, newOrder);
            setLoadingOrder(false);
            setMsg(response.data.message)
            setTimeout(() => {
                window.location.href = "/#/constructions"
            }, 2000)
            console.log('Response:', response.data);
        } catch (error) {
            setLoadingOrder(false);
            console.error('Error uploading order:', error);
        }
    }

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
                        <VoucherLayout
                        setVoucher={setVoucher}
                        voucher={voucher}
                        newOrder={newOrder}
                        />

                        <OrderLayout
                        voucher={voucher} 
                        data={data} 
                        isLoading={isLoading} 
                        newOrder={newOrder}
                        setNewOrder={setNewOrder}
                        setShowModal={setShowModal}
                        onClick={handleUploadOrder}
                        loadingOrder={loadingOrder}
                        />
                    </div>
                </div>
            </div>
        </Layout>
        <PaymentModal
        onClick={(e) => setNewOrder({...newOrder, payment_method: e})}
        payment={newOrder.payment_method}
        showModal={showModal}
        setShowModal={setShowModal}
        />
        <SimpleAlert msg={msg} bg={'bg-primary'} icon={<FaCheck/>}/>
        </>
    )
}

export default OrderSumPage;