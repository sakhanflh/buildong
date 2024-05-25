export function Navbar() {
    return (
        <>
            <div className="hidden md:w-full xl:h-16 md:flex  justify-between items-center font-jost bg-background-color text-font-gray xl:border-b-2">
                <div className="font-semibold ">
                    <h1 className="hover:text-font-black font-semibold text-xl">BUILDONG</h1>
                </div>

                <div className="flex gap-10 h-full items-center">
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
            </div>
        </>
    )
}