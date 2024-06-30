import { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

export function CartCard() {
    const [quantity, setQuantity] = useState(1)
    const [isChecked, setIsChecked] = useState(false)

    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }
    return (
        <>
            <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <img
                    src="/img/r-architecture-2gDwlIim3Uw-unsplash.jpg" 
                    className="w-16 h-16 object-cover rounded ml-4"
                />
                <div className="flex-1 ml-4">
                    <h2 className="text-lg font-medium text-font-gray">Uchiha Sofa Deidara</h2>
                    <div className="flex items-center space-x-2">
                        <span className="bg-red-100 text-red-600 text-sm font-medium px-2 py-0.5 rounded">
                            10%
                        </span>
                        <span className="line-through text-gray-500">Rp 250.000</span>
                    </div>
                    <div className="text-lg font-medium">Rp 225.000</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <button className="text-gray-500 hover:text-gray-700" onClick={handleDecrease}>
                            <FaMinus />
                        </button>
                        <span>{quantity}</span>
                        <button className="text-gray-500 hover:text-gray-700" onClick={handleIncrease}>
                            <FaPlus />
                        </button>
                    </div>

                    <div className="flex justify-end">
                        <FaTrash className="text-red-500"/>
                    </div>
                </div>
            </div>
        </>
    )
}