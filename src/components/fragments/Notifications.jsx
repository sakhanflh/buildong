import { useContext, useEffect, useState } from "react";
import { GeneralNotif } from "../layouts/admin/GeneralNotif";
import axios from "axios";
import UserContext from "../../context/UserContext";
import { NotificationsItem } from "./NotificationsItem";

export function Notifications({ showNotifications }) {
    const [visibleComponent, setVisibleComponent] = useState('GeneralNotif')
    const { user, level } = useContext(UserContext)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
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
            } finally {
                setIsLoading(false)
            }
        }
        console.log(user)
        fetchData()
    }, [user])

    return (
        <>
            <div className={`fixed xl:absolute  font-jost shadow-2xl xl:rounded-xl bg-white p-5 transition-all right-0 duration-500  ${showNotifications ? 'w-dvw h-dvh xl:w-[30rem] xl:h-[32rem] z-50 xl:opacity-100' : 'w-full xl:w-52 h-0 xl:h-0 -z-50 overflow-hidden opacity-0'}`}>
                <div className={`${showNotifications ? '' : 'cursor-default'}`}>
                    <div>
                        <h1 className="text-xl font-medium">Notifications</h1>
                    </div>

                    <div className="flex gap-2 mt-5 border-b-2">
                        <NotificationsItem onClick={() => setVisibleComponent('GeneralNotif')}>General</NotificationsItem>
                    </div>

                    <div className="mt-2">
                        {visibleComponent === 'GeneralNotif' && <GeneralNotif data={data} isLoading={isLoading} />}
                    </div>
                </div>
            </div>
        </>
    )
}