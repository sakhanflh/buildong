import { FaCartShopping } from "react-icons/fa6";

export function ItemCard({ brand, category, desc, image, item_sold, name, published_at, reviews, unit_price }) {
    return (
        <div className="w-72 overflow-hidden h-80 flex flex-col justify-between p-5 border rounded-2xl">
            <div className="w-full h-[75%] rounded-2xl overflow-hidden bg-orange-700">
                <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[20%] flex items-center justify-between">
                <div>
                    <p>{name}</p>
                    <p className="text-sm">Rp. {unit_price}</p>
                </div>

                <div className="border rounded-full">
                    <FaCartShopping className="text-2xl" />
                </div>
            </div>
        </div>
    )
}