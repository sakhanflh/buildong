import { RiMenu2Fill } from "react-icons/ri";
import { GoBell } from "react-icons/go";

export function HeaderAdmin({ toggleSidebar, toggleNotifications }) {
    const handleNotificationClick = () => {
        console.log("Notification bell clicked");
        toggleNotifications();
    };
    return (
        <>
            <header className="w-full z-50 bg-white box-border overflow-hidden fixed items-center justify-between p-[5%] h-16 flex xl:hidden shadow-lg">
                <RiMenu2Fill className="text-2xl" onClick={toggleSidebar} />
                <h1 className="font-jost text-xl font-medium">BUILDONG</h1>
                <GoBell className="text-2xl" onClick={handleNotificationClick} />
            </header>
        </>
    )
}