import { useState } from "react";
import { NotificationsCard } from "../../fragments/NotificationsCard";
import { GeneralNotif } from "./GeneralNotif";
import { OrderNotif } from "./OrderNotif";

export function Notifications({ showNotifications }) {
    const [visibleComponent, setVisibleComponent] = useState('GeneralNotif')
    return (
        <>
            <div className={`absolute font-jost bg-white shadow-2xl xl:rounded-xl translate-x-[35rem] translate-y-16 p-5 transition-all duration-500  ${showNotifications ? 'xl:w-[30rem] h-[32rem] z-50 opacity-100' : 'translate-x-[50rem] h-0 -z-50 opacity-0 cursor-none'}`}>
                <div>
                    <h1 className="text-xl font-medium">Notifications</h1>
                </div>

                <div className="flex gap-2 mt-5 border-b-2">
                    <button className={`px-5 py-2 ${visibleComponent === 'GeneralNotif' ? 'border-b-2 border-black text-black' : 'text-font-gray'}`} onClick={() => setVisibleComponent('GeneralNotif')}>General</button>
                    <button className={`px-5 py-2 ${visibleComponent === 'OrderNotif' ? 'border-b-2 border-black text-black' : 'text-font-gray'}`} onClick={() => setVisibleComponent('OrderNotif')}>Orders</button>
                </div>

                <div className="mt-2">
                    {visibleComponent === 'GeneralNotif' && <GeneralNotif />}
                    {visibleComponent === 'OrderNotif' && <OrderNotif />}
                </div>
            </div>
        </>
    )
}