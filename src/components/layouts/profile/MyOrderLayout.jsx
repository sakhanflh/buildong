/* eslint-disable react/prop-types */
import { FaList } from "react-icons/fa"
import { FaBoxesPacking, FaCheckDouble, FaTruckFast } from "react-icons/fa6"
import TabBar from "../../elements/TabBar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Rupiah from "../../../utils/Rupiah"
import Loader from "../../fragments/Loader"

const MyOrderLayout = ({account}) => {
    const [orderData, setOrderData] = useState(null)
    const { statusId } = useParams();
    const [isErr, setIsErr] = useState(false)
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
    }, [statusId])

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await axios.get(`https://buildong-api.vercel.app/${account._id}/construction-orders/${statusId}`)
                console.log(res)
                setOrderData(res.data.data)
                setIsErr(false)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setIsErr(true)
                setMsg(error.response.data.message)
                setLoading(false)
            }
        }
        fetchData()
    }, [account, statusId])
    
    return (
        <div>
            <div className="flex w-full">
                <TabBar
                value={'All'}
                icon={<FaList/>}
                to={'all'}
                data={orderData}
                />
                <TabBar
                value={'Packed'}
                icon={<FaBoxesPacking/>}
                to={'packed'}
                data={orderData}
                />
                <TabBar
                value={'Shipped'}
                icon={<FaTruckFast/>}
                to={'shipped'}
                data={orderData}
                />
                <TabBar
                value={'Completed'}
                icon={<FaCheckDouble/>}
                to={'completed'}
                data={orderData}
                />
            </div>
            <div className="mt-4">
                { 
                loading ? <div className="flex justify-center items-center py-4"><Loader color={'bg-primary'}/></div>
                :
                isErr ? <div className="text-center py-10 font-semibold xl:text-lg text-neutral-400"><h1>{msg}</h1></div>
                :
                orderData?.map(dt => (
                    <div key={dt.order_id} className="cursor-pointer border-b-2 mt-4 px-4 py-4 flex flex-col gap-2 xl:block h-max">
                        <p className="xl:hidden text-sm xl:text-base font-semibold text-neutral-500">#{dt.order_id}</p>
                        <div className="flex gap-4 ">
                            <div className="w-[30%] xl:w-[15%] overflow-hidden h-20 rounded-lg">
                                <img src={dt.image[0]} alt="" className="w-full h-full object-cover"/>
                            </div>
                            <div className="text-sm xl:text-base flex flex-col w-[70%] xl:w-[85%] justify-between">
                                <div className="flex flex-col-reverse xl:flex-row xl:justify-between w-full">
                                    <h1>{dt.design_name}</h1>
                                    <div className="flex items-center gap-2 xl:gap-3">
                                        <div className={`rounded-full w-2 h-2 xl:w-3 xl:h-3 ${dt.status == 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                                        <p>{dt.status}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between w-full items-end">
                                    <h1 className="xl:text-lg font-semibold">{Rupiah(dt.total_price)}</h1>
                                    <p className="hidden xl:block font-semibold text-neutral-500">{dt.order_id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default MyOrderLayout