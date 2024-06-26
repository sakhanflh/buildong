import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export function MenuAdmin({ title, icon, children, activeMenu, onMenuClick, setVisibleComponent }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        onMenuClick(title);
    };
    return (
        <>
            <div>
                <button
                    onClick={toggleMenu}
                    className="flex justify-between items-center w-full text-left p-2 rounded-md hover:bg-gray-200"
                >
                    <div className="flex items-center gap-1 hover:text-black">
                        {icon && <span className={`text-2xl  ${activeMenu === title ? 'text-primary' : 'text-font-gray'}`}>{icon}</span>}
                        <span className={`font-medium hover:text-black ${activeMenu === title ? 'text-font-black' : 'text-font-gray'}`}>{title}</span>
                    </div>
                    <IoIosArrowDown className={`ml-auto transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                <div
                    ref={contentRef}
                    style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}
                    className="transition-max-height duration-300 ease-in-out overflow-hidden"
                >
                    <div className="mt-2 ml-5">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}