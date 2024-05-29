/* eslint-disable react/prop-types */
import { FiStar } from "react-icons/fi"

const Card = ({img, category, rate, title, price}) => {
    return (
        <div className="w-1/2 h-max ">
            <div className="rounded-lg overflow-hidden w-full bg-neutral-200 relative h-52">
                <img src={img} alt="" className="w-full h-full absolute object-cover"/>
            </div>
            <div className="flex justify-between text-xs mt-2">
                <p className="text-neutral-500">{category}</p>
                <div className="font-medium flex items-center gap-2">
                    <FiStar className="text-yellow"/>
                    <p>{rate}</p>
                </div>
            </div>
            <h1 className="font-semibold">{title}</h1>
            <p className="text-sm mt-2">{price}</p>
        </div>
    )
}

export default Card;