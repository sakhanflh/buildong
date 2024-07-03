/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import Rupiah from "../../utils/Rupiah";

export function CartCard({name, price, image, data, newData, setNewData}) {
    const [quantity, setQuantity] = useState(1)
    const [isChecked, setIsChecked] = useState(false)

    function handleSetData() {
        const totalPrice = data.unit_price * quantity;
        const cartDt = { ...data, total_price: totalPrice, quantity: quantity };
        const existingIndex = newData.findIndex(item => item.product_id === data.product_id);

        if (isChecked) {
            const updatedData = newData.filter(item => item.product_id !== data.product_id);
            setNewData(updatedData);
            setQuantity(1)
            setIsChecked(false);
        } else {
            if (existingIndex === -1) {
                setNewData([...newData, cartDt]);
            } else {
                const updatedData = newData.map((item, index) =>
                    index === existingIndex ? { ...item, totalPrice, quantity } : item
                );
                setNewData(updatedData);
            }
            setIsChecked(true);
        }
    }

    const handleIncrease = () => {
        setIsChecked(true)
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        const totalPrice = data.unit_price * newQuantity;
        const cartDt = { ...data, total_price: totalPrice, quantity: newQuantity };

        const existingIndex = newData.findIndex(item => item.product_id === data.product_id);
        if (existingIndex === -1) {
            setNewData([...newData, cartDt]);
        } else {
            const updatedData = newData.map((item, index) =>
                index === existingIndex ? { ...item, totalPrice, quantity: newQuantity } : item
            );
            setNewData(updatedData);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setIsChecked(true)
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            const totalPrice = data.unit_price * newQuantity;

            const existingIndex = newData.findIndex(item => item.product_id === data.product_id);
            const updatedData = newData.map((item, index) =>
                index === existingIndex ? { ...item, totalPrice, quantity: newQuantity } : item
            );
            setNewData(updatedData);
        } else {
            const cartLocal = JSON.parse(localStorage.getItem('cart'))
            setIsChecked(false)
            const updatedData = newData.filter(item => item.product_id !== data.product_id);
            const updatedLocal = cartLocal.filter(item => item.product_id !== data.product_id);
            localStorage.setItem('cart', JSON.stringify(updatedLocal))
            setNewData(updatedData);
        }
    };

    function handleDeleteData(){
        const cartLocal = JSON.parse(localStorage.getItem('cart'))
        setIsChecked(false)
        const updatedData = newData.filter(item => item.product_id !== data.product_id);
        const updatedLocal = cartLocal.filter(item => item.product_id !== data.product_id);
        localStorage.setItem('cart', JSON.stringify(updatedLocal))
        setNewData(updatedData);
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }
    return (
        <>
            <div className="flex items-center p-4 bg-white border-b-2  shadow-sm">
                <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    onClick={handleSetData}
                />
                <img
                    src={image} 
                    className="w-16 h-16 object-cover rounded ml-4"
                />
                <div className="flex-1 ml-4">
                    <h2 className="text-lg font-medium text-font-gray">{name}</h2>
                    <div className="flex items-center space-x-2">
                        <span className="bg-red-100 text-red-600 text-sm font-medium px-2 py-0.5 rounded">
                            10%
                        </span>
                        <span className="line-through text-gray-500">Rp 250.000</span>
                    </div>
                    <div className="text-lg font-medium">{Rupiah(price)}</div>
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
                        <FaTrash onClick={handleDeleteData} className="cursor-pointer text-red-500"/>
                    </div>
                </div>
            </div>
        </>
    )
}