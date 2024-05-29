import { FiMenu } from "react-icons/fi";

export function Navbar() {
    return (
        <>
            <div className="flex h-14 px-[5%] md:w-full xl:h-16 md:flex justify-between items-center font-jost bg-white text-font-gray xl:border-b-2">
                <div className="font-semibold ">
                    <h1 className="text-black hover:text-font-black font-semibold text-xl">BUILDONG</h1>
                </div>
                
                <div className="hidden xl:flex gap-10 h-full items-center">
                    <ul className="flex gap-10">
                        <li className="hover:text-font-black font-semibold">Home</li>
                        <li className="hover:text-font-black font-semibold">Project</li>
                        <li className="hover:text-font-black font-semibold">Shop</li>
                        <li className="hover:text-font-black font-semibold">Hire Services</li>
                        <li className="hover:text-font-black font-semibold">Gallery</li>
                    </ul>

                    <div className="px-10 py-2 border border-black rounded-3xl hover:bg-font-gray hover:border-font-gray hover:text-font-black">
                        <button className="font-semibold">Login</button>
                    </div>
                </div>

                <FiMenu className="text-black text-lg xl:hidden"/>
            </div>
        </>
    )
}