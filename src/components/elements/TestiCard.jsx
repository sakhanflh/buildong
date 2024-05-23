export function TestiCard() {
    return (
        <>
            <div className="flex gap-10 items-end translate-y-10 translate-x-5">
                <div className="w-48 h-36 items-center justify-center bg-black text-white shadow-lg rounded-xl flex flex-col gap-2">
                    <h1 className="text-4xl font-semibold">100 +</h1>
                    <p className="text-lg">Testimonials</p>
                </div>

                <div className="w-44 h-32 items-center justify-center bg-blue-500 text-white shadow-lg rounded-xl flex flex-col gap-2 ">
                    <h1 className="text-4xl font-semibold">50 +</h1>
                    <p className="text-lg">Workers</p>
                </div>

                <div className="w-44 h-32 items-center justify-center bg-white text-black shadow-lg rounded-xl flex flex-col gap-2">
                    <h1 className="text-4xl font-semibold">100 +</h1>
                    <p className="text-lg">Testimonials</p>
                </div>
            </div>
        </>
    )
}