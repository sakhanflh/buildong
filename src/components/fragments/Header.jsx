import { Navbar } from "../layouts/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebar } from "../layouts/Sidebar";
import { useState } from "react";


export function Header() {
    const [showSidebar, setShowSidebar] = useState(false)
    function handleShowSidebar() {
        setShowSidebar(!showSidebar)
    }
    console.log(handleShowSidebar)

    return (
        <>
            <div className="bg-background-color shadow-md justify-center xl:shadow-none w-full z-50 h-16 flex px-5 xl:px-[5%] fixed font-jost  text-font-gray items-center">
                <div className="w-full flex items-center justify-between md:hidden">
                    <GiHamburgerMenu className="text-2xl" onClick={handleShowSidebar}/>
                    <h1 className="font-semibold text-xl xl:hidden">BUILDONG</h1>
                </div>
                <Navbar/>
                <Sidebar onShowSidebar={showSidebar}/>
            </div>
        </>
    )
}