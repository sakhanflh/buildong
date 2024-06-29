/* eslint-disable react/prop-types */
import { FaCreditCard } from "react-icons/fa6";
import PaymentCard from "./PaymentCard";

const PaymentModal = ({onClick, payment, showModal, setShowModal}) => {
    return (
        <div className={`${showModal ? 'flex':'hidden'} fixed bg-blue-50 bg-opacity-25 inset-0 pt-10 backdrop-blur-sm w-full h-dvh justify-center items-center z-40`}>
            <div className="shadow-multiple bg-white rounded-lg px-4 py-4 max-w-[90%] xl:max-w-[550px]">
                <div className="bg-blue-50 p-2 text-primary w-max rounded-lg text-lg mb-4">
                    <FaCreditCard/>
                </div>
                <h1 className="font-bold xl:text-lg">Choose your payment method</h1>
                <p>Before you proceed with the transaction, please select your payment method first</p>
                <div className="mt-6 flex flex-col xl:flex-row xl:flex-wrap justify-between gap-y-2">
                    <PaymentCard img={'/img/bca.png'} name={'BCA VA'} onClick={onClick} payment={payment}/>
                    <PaymentCard img={'/img/bri.png'} name={'BRI'} onClick={onClick} payment={payment}/>
                    <PaymentCard img={'/img/bni.png'} name={'BNI'} onClick={onClick} payment={payment}/>
                    <PaymentCard img={'/img/permata.png'} name={'PERMATA'} onClick={onClick} payment={payment}/>
                </div>
                <div className="flex flex-col xl:flex-row gap-2 items-center font-semibold mt-10">
                    <button onClick={() => setShowModal(false)} className="bg-white text-primary border-2 clicked border-blue-50 rounded-lg py-2 w-full xl:w-1/2">Cancel</button>
                    <button onClick={() => setShowModal(false)} className="bg-primary text-white rounded-lg clicked py-2 w-full xl:w-1/2">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentModal;