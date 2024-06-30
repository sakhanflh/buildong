import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Sidebar({ onShowSidebar }) {
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            setLoading(false);
        }
    }, [token]);

    return (
        <>
            <div className={onShowSidebar ? "bg-background-color absolute w-60 h-[44rem] md:-translate-x-[20rem] lg:-translate-x-[32rem] -translate-x-20 translate-y-[382px] p-5 z-50 xl:hidden transition-all duration-500" : "bg-background-color absolute w-60 h-[44rem] -translate-x-[30rem] md:-translate-x-[45rem] translate-y-[382px] p-5 z-50 xl:hidden transition-all duration-500"}>
                <div className="flex flex-col gap-10 h-full ">
                    <ul className="flex flex-col gap-10">
                        <Link to={'/'}>
                            <li className="hover:text-font-black font-semibold">Home</li>
                        </Link>

                        <Link to={'/project'}>
                            <li className="hover:text-font-black font-semibold">Project</li>
                        </Link>

                        <Link to={'/shop'}>
                            <li className="hover:text-font-black font-semibold">Shop</li>
                        </Link>

                        <Link to={'/constructions'}>
                            <li className="hover:text-font-black font-semibold">Constructions</li>
                        </Link>
                    </ul>

                    {!loading && !token && (
                        <div className="pt-20 flex justify-center">
                            <Link to={'/login'}>
                                <button className="hover:bg-primary hover:border-primary hover:text-white font-semibold px-10 py-2 border border-black rounded-3xl">Login</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
