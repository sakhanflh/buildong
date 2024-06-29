const ShippingMethod = () => {
    return (
        <>
        <div className=" rounded-lg bg-white shadow-soft px-6 py-6">
        <h1 className="font-bold xl:text-lg">Shipping Method</h1>
            <div className="mt-6 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full border-2 w-5 h-5 border-blue-400 bg-blue-50"></div>
                            <h1>Store Pick Up</h1>
                        </div>
                        <p className="font-semibold">Free</p>
                    </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full border-2 w-5 h-5 bg-neutral-50"></div>
                        <h1>Standard JNT ( 2-6 Days )</h1>
                    </div>
                    <p className="font-semibold">+Rp 7.000</p>
                </div>                           
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full border-2 w-5 h-5 bg-neutral-50"></div>
                        <h1>Express JNT ( 1-3 Days )</h1>
                    </div>
                    <p className="font-semibold">+Rp 10.000</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShippingMethod;