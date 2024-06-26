import { useState } from "react";
import { Index } from "../components/layouts/admin/Index";
import { Sidebar } from "../components/layouts/admin/Sidebar";
import { HeaderAdmin } from "../components/layouts/admin/HeaderAdm";

export default function AdminPage() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [visibleComponent, setVisibleComponent] = useState('Constructions');
    const [showSidebar, setShowSidebar] = useState(false)

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
        console.log('first')
    }

    const handleMenuClick = (menuTitle) => {
        setActiveMenu(menuTitle);
    };


    return (

        <>
            <HeaderAdmin toggleSidebar={toggleSidebar}/>
            <div className="font-jost flex">
                <Sidebar activeMenu={activeMenu} onMenuClick={handleMenuClick} setVisibleComponent={setVisibleComponent} showSidebar={showSidebar}/>

                <Index visibleComponent={visibleComponent} />
            </div>
        </>
    )
}