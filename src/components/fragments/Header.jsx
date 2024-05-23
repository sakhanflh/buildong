import { Navbar } from "../layouts/Navbar";

export function Header() {
    return (
        <>
            <div className="w-full h-16 flex px-[5%] font-jost bg-background-color text-font-gray">
                <Navbar/>
            </div>
        </>
    )
}