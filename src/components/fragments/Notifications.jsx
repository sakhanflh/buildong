import { useContext, useEffect, useState } from "react";
import { GeneralNotif } from "../layouts/admin/GeneralNotif";
import { OrderNotif } from "../layouts/admin/OrderNotif";
import axios from "axios";
import UserContext from "../../context/UserContext";

export function Notifications({ showNotifications }) {
    const [visibleComponent, setVisibleComponent] = useState('GeneralNotif')
    const { user, level } = useContext(UserContext)
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://buildong-api.vercel.app/vouchers', {
                    params: {
                        level: level.toLowerCase()
                    }
                })
                setData(res.data.data)
                console.log(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        console.log(user)
        fetchData()
    }, [user])

    return (
        <>
            <div className={`fixed xl:absolute  font-jost shadow-2xl xl:rounded-xl bg-white p-5 transition-all right-0 duration-500  ${showNotifications ? 'w-dvw h-dvh xl:w-[30rem] xl:h-[32rem] z-50 xl:opacity-100' : 'w-full xl:w-52 h-0 xl:h-0 -z-50 overflow-hidden opacity-0 cursor-none'}`}>
                <div>
                    <h1 className="text-xl font-medium">Notifications</h1>
                </div>

                <div className="flex gap-2 mt-5 border-b-2">
                    <button className={`px-5 py-2 ${visibleComponent === 'GeneralNotif' ? 'border-b-2 border-black text-black' : 'text-font-gray'}`} onClick={() => setVisibleComponent('GeneralNotif')}>General</button>
                    {/* <button className={`px-5 py-2 ${visibleComponent === 'OrderNotif' ? 'border-b-2 border-black text-black' : 'text-font-gray'}`} onClick={() => setVisibleComponent('OrderNotif')}>Orders</button> */}
                </div>

                <div className="mt-2">
                    {visibleComponent === 'GeneralNotif' && <GeneralNotif />}
                    {visibleComponent === 'OrderNotif' && <OrderNotif />}
                </div>
            </div>
        </>
    )
}