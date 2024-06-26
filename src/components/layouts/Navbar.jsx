import { Link } from "react-router-dom";

export function Navbar() {

    return (
        <>
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
                    </ul>
                </div>
        </>
    )
}