export function Sidebar({ onShowSidebar }) {
    console.log(onShowSidebar)
    return (
        <>
            <div className={onShowSidebar? "bg-background-color absolute w-60 h-[44rem] -translate-x-6 translate-y-[382px] p-5 z-50 xl:hidden transition-all duration-500" : "bg-background-color absolute w-60 h-[44rem] -translate-x-[20rem] translate-y-[382px] p-5 z-50 xl:hidden transition-all duration-500"}>
                <div className="flex flex-col gap-10 h-full ">
                    <ul className="flex flex-col gap-10">
                        <li className="hover:text-font-black font-semibold">Home</li>
                        <li className="hover:text-font-black font-semibold">Project</li>
                        <li className="hover:text-font-black font-semibold">Shop</li>
                        <li className="hover:text-font-black font-semibold">Hire Services</li>
                        <li className="hover:text-font-black font-semibold">Gallery</li>
                    </ul>

                    <div className="pt-20 flex justify-center">
                        <button className=" hover:bg-blue hover:border-blue hover:text-white font-semibold px-10 py-2 border border-black rounded-3xl">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}