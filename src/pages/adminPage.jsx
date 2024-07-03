import { useState } from "react";
import { Index } from "../components/layouts/admin/Index";
import { Sidebar } from "../components/layouts/admin/Sidebar";
import { HeaderAdmin } from "../components/layouts/admin/HeaderAdm";
import { Notifications } from "../components/fragments/Notifications";

export default function AdminPage() {
    const [activeMenu, setActiveMenu] = useState(null)
    const [visibleComponent, setVisibleComponent] = useState('Products')
    const [showSidebar, setShowSidebar] = useState(false)
    const [showNotifications, setShowNotifications] = useState(false)

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const handleMenuClick = (menuTitle) => {
        setActiveMenu(menuTitle);
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications)
    }
    return (

        <>
                <HeaderAdmin
                    toggleSidebar={toggleSidebar}
                    toggleNotifications={toggleNotifications}
                    />
                <div className="font-jost flex">
                    <Sidebar activeMenu={activeMenu} onMenuClick={handleMenuClick} setVisibleComponent={setVisibleComponent} showSidebar={showSidebar} />

                    <Index visibleComponent={visibleComponent} toggleNotifications={toggleNotifications} />
                    <Notifications
                        showNotifications={showNotifications}
                    />
                </div>
        </>
    )
}