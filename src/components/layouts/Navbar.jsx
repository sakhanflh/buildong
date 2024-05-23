export function Navbar() {
    return (
        <>
            <div className="w-full h-16 flex px-5 justify-between items-center shadow-xl">
                <div className="font-semibold">
                    <h1>BUILDONG</h1>
                </div>

                <div className="flex gap-10 h-full items-center">
                    <ul className="flex gap-10">
                        <li>Home</li>
                        <li>Project</li>
                        <li>Shop</li>
                        <li>Hire Services</li>
                        <li>Gallery</li>
                    </ul>

                    <div className="px-10 py-2 border border-black rounded-3xl">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}