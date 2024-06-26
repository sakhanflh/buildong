import { useState } from "react";
import { Index } from "../components/layouts/admin/Index";
import { Sidebar } from "../components/layouts/admin/Sidebar";

export default function AdminPage() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [visibleComponent, setVisibleComponent] = useState('Products');

    const handleMenuClick = (menuTitle) => {
        setActiveMenu(menuTitle);
    };

    
    return (
        
        <>
            <div className="font-jost flex">
                <Sidebar activeMenu={activeMenu} onMenuClick={handleMenuClick} setVisibleComponent={setVisibleComponent}/>

                <Index visibleComponent={visibleComponent} />
            </div>
        </>
    )
}