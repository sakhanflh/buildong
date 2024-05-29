import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CategoryUtil } from "./CategoryUtil,";
import { useState } from "react";
import { PriceUtil } from "./PriceUtil";
import { MartialUtil } from "./MartialUtil";
import { AvailUtil } from "./AvailUtil";


export function AsideShop() {
    const [showCategory, setShowCategory] = useState(true)
    const [showPrice, setShowPrice] = useState(true)
    const [showMartial, setShowMartial] = useState(true)
    const [showAvail, setShowAvail] = useState(true)

    function handleShowCategory() {
        setShowCategory(!showCategory)
    }

    function handleShowPrice() {
        setShowPrice(!showPrice)
    }

    function handleShowMartial() {
        setShowMartial(!showMartial)
    }

    function handleShowAvail() {
        setShowAvail(!showAvail)
    }

    return (
        <>
            <div className="flex flex-col w-full gap-5">
                <h1 className="text-3xl font-medium">Filter Option</h1>
                <div className="px-5 py-3 border rounded-2xl flex flex-col gap-3" >
                    <div className="flex items-center justify-between" onClick={handleShowCategory}>
                        <h1 className="text-lg font-medium">Category</h1>
                        <IoIosArrowUp className={showCategory ? 'hidden' : 'block'} />
                        <IoIosArrowDown className={showCategory ? 'block' : 'hidden'} />
                    </div>
                    <div className={showCategory ? 'hidden' : 'flex'}>
                        <CategoryUtil />
                    </div>
                </div>

                <div className="px-5 py-3 border rounded-2xl flex flex-col gap-3">
                    <div className="flex items-center justify-between" onClick={handleShowPrice}>
                        <h1 className="text-lg font-medium">Price</h1>
                        <IoIosArrowUp className={showPrice ? 'hidden' : 'block'} />
                        <IoIosArrowDown className={showPrice ? 'block' : 'hidden'} />
                    </div>
                    <div className={showPrice ? 'hidden' : 'flex'}>
                        <PriceUtil />
                    </div>
                </div>

                <div className="px-5 py-3 border rounded-2xl flex flex-col gap-3">
                    <div className="flex items-center justify-between" onClick={handleShowMartial}>
                        <h1 className="text-lg font-medium">Martial</h1>
                        <IoIosArrowUp className={showMartial ? 'hidden' : 'block'} />
                        <IoIosArrowDown className={showMartial ? 'block' : 'hidden'} />
                    </div>
                    <div className={showMartial ? 'hidden' : 'block'}>
                        <MartialUtil />
                    </div>
                </div>

                <div className="px-5 py-3 border rounded-2xl flex flex-col gap-3">
                    <div className="flex items-center justify-between" onClick={handleShowAvail}>
                        <h1 className="text-lg font-medium">Availability</h1>
                        <IoIosArrowUp className={showAvail ? 'hidden' : 'block'} />
                        <IoIosArrowDown className={showAvail ? 'block' : 'hidden'} />
                    </div>
                    <div className={showAvail ? 'hidden' : 'block'}>
                        <AvailUtil />
                    </div>
                </div>
            </div>
        </>
    )
}