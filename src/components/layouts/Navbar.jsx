import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <>
            <div className="hidden md:w-full xl:h-16 md:flex  justify-between items-center font-jost bg-background-color text-font-gray xl:border-b-2">
                <div className="font-semibold ">
                    <h1 className="hover:text-font-black font-semibold text-xl">BUILDONG</h1>
                </div>

                <div className="flex gap-10 h-full items-center">
                    <ul className="flex gap-10">
                        <Link to='/'>
                            <li className="hover:text-font-black font-semibold">Home</li>
                        </Link>

                        <Link>
                            <li className="hover:text-font-black font-semibold">Project</li>
                        </Link>

                        <Link to='/shop'>
                            <li className="hover:text-font-black font-semibold">Shop</li>
                        </Link>

                        <Link>
                            <li className="hover:text-font-black font-semibold">Hire Services</li>
                        </Link>

                        <Link>
                            <li className="hover:text-font-black font-semibold">Gallery</li>
                        </Link>
                    </ul>

                    <div className="px-10 py-2 border border-black rounded-3xl hover:bg-blue hover:border-blue hover:text-white">
                        <button className="font-semibold">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}