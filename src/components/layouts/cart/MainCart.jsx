import { CartCard } from "../../fragments/CartCard";

export function MainCart() {
    return (
        <>
            <div className="w-[55%] flex flex-col">
                <h1 className="text-2xl font-medium">Cart</h1>
                <div className="items-center flex gap-1">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-font-gray">Select All Products</label>
                </div>
                <CartCard/>
            </div>
        </>
    )
}