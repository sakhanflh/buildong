/* eslint-disable react/prop-types */
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { FaChevronRight, FaTicket } from "react-icons/fa6"
import { RiDiscountPercentFill } from "react-icons/ri"
import UserContext from "../../../context/UserContext"
import Loader from "../../fragments/Loader"
import Rupiah from "../../../utils/Rupiah"
import SimpleAlert from "../../fragments/SimpleAlert"
import { FaExclamationTriangle } from "react-icons/fa"

const VoucherLayout = ({voucher, setVoucher, newOrder}) => {
    const { level } = useContext(UserContext)
    const [data, setData] = useState(null)
    const [showVoucher, setShowVoucher] = useState(false)
    const [loading, setLoading] = useState(true)
    const [msg, setMsg] = useState('')

    useEffect(() => {
            const fetchData = async() => {
                try {
                    const res = await axios.get(`https://buildong-api.vercel.app/vouchers`, {
                        params: {level: level.toLowerCase()}
                    })
                    setData(res.data.data)
                    console.log(res.data.data)
                    setLoading(false)
                } catch (error) {
                    setLoading(false)
                    console.log(error)
                }
            }
    
            fetchData()
    }, [])

    useEffect(() => {
        if(showVoucher){
            return setVoucher(null)
        }
    }, [showVoucher])

    useEffect(() => {
        if(newOrder.total_workers){
            setVoucher(null)
        }
    }, [newOrder.total_workers])

    function handleSetVoucher(dt){
        setVoucher({
            total_discount: dt.total_discount,
            discount_type: dt.discount_type
        })
        setMsg('Successfully use voucher')
    }

    return (
        <div onClick={() => setShowVoucher(!showVoucher)} className={`rounded-lg cursor-pointer ${voucher ? 'bg-primary text-white' : 'bg-white'} shadow-soft relative flex items-center justify-between px-4 py-3`}>
            <div className={`absolute ${voucher ? 'hidden' : data?.length !== 0 ? '' : 'hidden'} text-center text-sm bg-primary z-10 right-0 -top-2 rounded-full w-5 h-5 xl:w-6 xl:h-6 flex justify-center items-center text-white`}>
                <h1 className="relative">{data?.length}</h1>
            </div>
            {
                voucher ?
                <div className="flex items-center gap-4">
                    <FaTicket className="text-white text-2xl"/>
                    <h1 className="font-bold xl:text-lg">{voucher.total_discount}% {voucher.discount_type}</h1>
                </div>
                :
                <div className="flex items-center gap-2">
                    <RiDiscountPercentFill className="text-primary text-2xl"/>
                    <h1 className="font-bold xl:text-lg">Voucher Code</h1>
                </div>
            }
            <FaChevronRight/>
            <div className={`absolute ${showVoucher ? '' : 'hidden'} top-16 z-40 rounded-lg bg-white shadow-multiple w-full xl:w-96 px-4 py-4 left-0`}>
                <div className="relative w-full">
                    <div className="absolute bg-white w-6 h-6 -top-6 left-0 rotate-45"></div>
                </div>
                <div className="flex flex-col mt-2  xl:mt-4 relative">
                    {
                        loading ?
                        <div className="flex items-center justify-center py-5 w-full">
                            <Loader color={'bg-primary'}/>
                        </div>
                        :
                        data.map(dt => (
                        <div key={dt._id} className="w-full border-b-2 px-2 py-2 h-max flex gap-2 text-sm xl:text-base">
                            <div className="bg-blue-50 rounded-xl text-lg w-max h-max p-2">
                                <FaTicket className="text-primary"/>
                            </div>
                            <div className="w-full">
                                <h1 className=""><span className="font-semibold">{dt.total_discount}% </span>{dt.title}</h1>
                                <div className="text-xs xl:text-sm text-neutral-500">
                                    <p>{dt.discount_type}</p>
                                    <p>Minimum order <span className="text-black font-medium">{Rupiah(dt.minimum_order)}</span></p>
                                </div>
                                <button onClick={() => handleSetVoucher(dt)} className="bg-primary w-full text-sm xl:mt-2 xl:text-base text-white py-1 mt-4 rounded-lg">Use Voucher</button>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
            <SimpleAlert msg={msg}/>
        </div>
    )
}


export default VoucherLayout;