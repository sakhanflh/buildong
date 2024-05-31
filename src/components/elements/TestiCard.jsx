export function TestiCard() {
    return (
        <>
            <div className="flex gap-3 xl:gap-10 items-end translate-y-5 xl:translate-y-10 translate-x-2 xl:translate-x-5">
                <div className="w-24 h-[5rem] xl:w-48 xl:h-36 items-center justify-center bg-font-black text-white shadow-lg rounded-xl flex flex-col gap-2">
                    <h1 className="text-sm xl:text-4xl font-semibold">100 +</h1>
                    <p className="text-xs xl:text-lg">Testimonials</p>
                </div>

                <div className="w-20 h-16 xl:w-44 xl:h-32 items-center justify-center bg-primary text-white shadow-lg rounded-xl flex flex-col gap-2 ">
                    <h1 className="text-sm xl:text-4xl font-semibold">50 +</h1>
                    <p className="text-xs xl:text-lg">Workers</p>
                </div>

                <div className="w-20 h-16 xl:w-44 xl:h-32 items-center justify-center bg-background-color text-black shadow-lg rounded-xl flex flex-col gap-2">
                    <h1 className="text-sm xl:text-4xl font-semibold">100 +</h1>
                    <p className="text-xs xl:text-lg">Testimonials</p>
                </div>
            </div>
        </>
    )
}