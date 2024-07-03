/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";
import { CartCard } from "../../fragments/CartCard";

export function MainCart({setNewData, newData}) {
    const cartData = JSON.parse(localStorage.getItem('cart'));

    function handleDeleteAll(){
        const filteredData = cartData.filter(dt => dt.id !== newData.id)
        setNewData(filteredData)
        localStorage.setItem('cart', JSON.stringify(filteredData))
    }

    function handleSelectAll(){
        setNewData(cartData)
    }

    return (
        <>
            <div className="w-[59%] flex flex-col bg-white rounded-lg shadow-soft px-4 py-4 h-max">
                <div className=" flex justify-between w-full">
                <h1 className="text-2xl font-bold">Cart</h1>
                    <div className="">
                        <h1>Total Products ( {cartData?.length} )</h1>
                    </div>
                </div>
                <div className="mt-6 mb-2 flex justify-between ">
                    <div className="items-center flex gap-1">
                        <input onClick={handleSelectAll} type="checkbox" />
                        <label htmlFor="" className="text-font-gray">Select all products</label>
                    </div>
                    <div onClick={handleDeleteAll} className="flex items-center gap-2 cursor-pointer text-red-500">
                        <FaTrash/>
                        <h1>Delete all</h1>
                    </div>
                </div>
                <div className="flex flex-col">
                    {
                        cartData?.map(dt => (
                            <CartCard 
                            key={dt.product_id}
                            name={dt.product_name}
                            price={dt.unit_price}
                            image={dt.image}
                            data={dt}
                            newData={newData}
                            setNewData={setNewData}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}