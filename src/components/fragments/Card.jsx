/* eslint-disable react/prop-types */
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Stars from "../elements/Stars";

const Card = ({img, category, rate, title, price, linkTo, brand}) => {
    return (
        <Link to={linkTo} className="w-full xl:w-[31%] h-max">
        <div className="w-full">
            <div className="rounded-lg overflow-hidden w-full bg-neutral-200 relative h-44">
                <img src={img} alt="" className="w-full h-full absolute object-cover"/>
                <div className="relative w-full z-10 text-white flex justify-between py-4 px-5 xl:text-xl">
                    <div>
                        <div className="w-max h-max py-2 px-2 shadow-multiple bg-primary rounded-full text-xs font-semibold">
                            <h1>-20%</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-xl xl:text-2xl">
                        <FaHeart className="cursor-pointer transition duration-300 hover:text-red-500"/>  
                        <FaCartShopping className="cursor-pointer transition duration-300 hover:text-secondary"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-sm mt-2 xl:text-sm">
                <p className="text-neutral-500">{category}</p>
                <div className="font-medium flex items-center gap-2">
                    <Stars length={Math.floor(rate)}/>
                    <p>{rate}</p>
                </div>
            </div>
            <div className="flex justify-between items-end xl:block">
            <h1 className="font-semibold xl:text-base">{title}</h1>
                <div className={`${brand ? 'flex justify-between items-center' : ''}`}>
                    <p className="text-base xl:text-base xl:mt-2">{price}</p>
                    <p className="font-semibold text-sm opacity-70 xl:mt-2 uppercase">{brand ? brand : ''}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default Card;