import { GoBell } from "react-icons/go";
import { Products } from "./Products";
import { Dashboard } from "./Dashboard";
import { Link } from "react-router-dom";
import { Constructions } from "./Constructions";

export function Index({ visibleComponent }) {
    return (
        <>
            <div className="w-[70%] flex flex-col p-5">
                <div className=" w-full flex items-center justify-end py-5 gap-5">
                    <GoBell className="text-2xl"/>
                    <Link to={'/'} className="px-5 py-2 border rounded-xl font-medium">View Shop</Link>
                </div>
                <div>
                    {visibleComponent === 'Products' && <Products/>}
                    {visibleComponent === 'Constructions' && <Constructions/>}
                    {visibleComponent === 'Dashboard' && <Dashboard/>}
                </div>
            </div>
        </>
    )
}