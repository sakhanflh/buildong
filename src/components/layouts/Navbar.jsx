import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <>
            <div className="xl:flex bg-white shadow-soft hidden z-20 fixed w-full top-0 h-14 px-[5%] md:w-full xl:h-16 md:flex justify-between items-center font-jost text-font-gray xl:border-b-2">
                <div className="font-semibold">
                    <h1 className="text-black hover:text-font-black font-semibold text-xl">BUILDONG</h1>
                </div>
                
                <div className="hidden xl:flex gap-10 h-full items-center">
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

                        <Link to={'/constructions'}>
                            <li className="hover:text-font-black font-semibold">Constructions</li>
                        </Link>

                        <Link>
                            <li className="hover:text-font-black font-semibold">Gallery</li>
                        </Link>
                    </ul>

                    <div className="px-10 py-2 border border-black rounded-3xl hover:bg-primary hover:border-primary hover:text-white">
                        <Link to={'/login'}>
                            <button className="font-semibold">Login</button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}