import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Header } from "../../fragments/Header"
import Layout from "../Layout"
import { Footer } from "../Footer"
import axios from "axios"
import UserContext from "../../../context/UserContext"
import { FaCheckDouble, FaChevronLeft, FaStar } from "react-icons/fa"
import { FaBoxesPacking, FaTruckFast } from "react-icons/fa6"
import CircleEl from "../../elements/Circle"
import SimpleCard from "../order/SimpleCard"
import ReviewModal from "./ReviewModal"
import SkeletonLoading from "../../fragments/SkeletonLoading"
import Loader from "../../fragments/Loader"
import ReturnBtn from "../../elements/ReturnBtn"

const OrderDetailLayout = () => {
    const { orderId } = useParams()
    const { user } = useContext(UserContext)
    const account = user?.user.account
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)
    const [msg, setMsg] = useState('')

    useEffect(() => {
        console.log(account)
        const fetchData = async() => {
            try {
                const res = await axios.get(`https://buildong-api.vercel.app/construction-orders/${orderId}`)
                setData(res.data.data[0])
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [account])

    return (
        <>
        <Header/>
        <Layout>
            <div className="px-[5%]">
                <ReturnBtn/>
                <div className="bg-white rounded-lg shadow-soft p-4 mt-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-neutral-400 font-semibold">ORDER ID : {orderId}</h1>
                        <p>{data?.status}</p>
                    </div>
                    <div className="flex items-center gap-4 relative w-[-90%] xl:w-[60%] mt-16 mx-auto">
                        <div className="w-full  border-2 border-primary border-dotted"></div>
                        <div className="absolute w-full h-full flex items-center justify-between">
                            <CircleEl
                            icon={<FaBoxesPacking/>}
                            value={'packed'}
                            status={data?.status}
                            />
                            <CircleEl
                            icon={<FaTruckFast/>}
                            value={'shipped'}
                            status={data?.status}
                            />
                            <CircleEl
                            icon={<FaCheckDouble/>}
                            value={'completed'}
                            status={data?.status}
                            />
                            <CircleEl
                            icon={<FaStar/>}
                            value={'review'}
                            status={data?.status}
                            />
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col xl:flex-row xl:justify-between">
                        <div>
                            <h1 className="font-semibold ">SHIPPING ADDRESS</h1>
                            <h1 className="font-medium mt-2">{loading ? <SkeletonLoading width={'w-16'}/> : account?.username}</h1>
                            <p>{loading ? <SkeletonLoading width={'w-14'} margin={'mt-2'}/> : account?.phone}</p>
                            <p>{loading ? <SkeletonLoading width={'w-10'} margin={'mt-2'}/> : data?.location}</p>
                            <p>{loading ? <SkeletonLoading width={'w-20'} margin={'mt-2'}/> : account?.address}</p>
                        </div>
                        <div className="flex flex-col gap-2 mt-4 xl:mt-0">
                            <button onClick={() => setShow(true)} className={`bg-primary clicked ${data?.status !== 'completed' ? 'hidden' : ''} rounded-lg px-10 font-semibold py-2 text-white`}>Review</button>
                            <Link to={'/constructions'} className="w-full xl:w-max">
                                <button className="bg-white border-2 clicked border-primary rounded-lg px-10 w-full font-semibold py-2 text-primary">Shop Again</button>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4">
                        {
                            loading ?
                            <div className="flex justify-center py-4">
                                <Loader color={'bg-primary'}/>
                            </div>
                            :
                        <SimpleCard data={data}/>
                        }
                    </div>
                </div>
            </div>
        </Layout>
        <Footer/>
        <ReviewModal
        img={data?.image[0]}
        profile={account?.profile_picture}
        name={account?.username}
        prodName={data?.design_name}
        prodId={data?.product_id}
        show={show}
        setShow={setShow}
        />
        </>
    )
}

export default OrderDetailLayout