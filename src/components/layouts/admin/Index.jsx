import { GoBell } from "react-icons/go";
import { Products } from "./Products";
import { Dashboard } from "./Dashboard";
import { Link } from "react-router-dom";
import { Constructions } from "./Constructions";
import { Voucher } from "./Voucher";

export function Index({ visibleComponent, toggleNotifications }) {
    return (
        <>
            <div className="xl:w-[70%] relative w-full pt-20 xl:pt-0 flex flex-col p-5">
                <div className="hidden w-full xl:flex items-center justify-end py-5 gap-5">
                    <GoBell className="text-2xl" onClick={toggleNotifications}/>
                    <Link to={'/'} className="px-5 py-2 border rounded-xl font-medium">View Shop</Link>
                </div>
                <div>
                    {visibleComponent === 'Products' && <Products/>}
                    {visibleComponent === 'Constructions' && <Constructions/>}
                    {visibleComponent === 'Voucher' && <Voucher/>}
                </div>
            </div>
        </>
    )
}