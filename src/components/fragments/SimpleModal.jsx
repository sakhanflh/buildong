/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";

const SimpleModal = ({children, title, showModal, setShowModal}) => {
    return (
            <div className={`fixed ${showModal ? 'flex' : 'hidden'} justify-center z-40 items-center inset-0 w-full h-dvh bg-neutral-500 bg-opacity-30 `}>
            <div className="rounded-lg shadow-multiple bg-white w-[85%] xl:w-96">
                <div className="flex justify-between items-center text-black px-4 py-4 ">
                    <h1 className="font-semibold ">{title}</h1>
                    <FaXmark onClick={() => setShowModal(false)}/>
                </div>
                {children}
            </div>
        </div>
    )
}

export default SimpleModal;