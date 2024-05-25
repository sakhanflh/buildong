export function Footer() {
    return (
        <>
            <div className="w-full bg-slate-100 p-[5%] flex flex-wrap justify-between font-jost gap-10 xl:gap-0">
                <div className="xl:w-[25%]  flex flex-col gap-2">
                    <h1 className="font-bold text-xl">BUILDONG</h1>
                    <p className="text-slate-500 text-sm">Transforming Visions into Reality With BUILDONG, your dream projects come to life throught meticulous planning, expert craftsmanship, and unwavering commitment to excellence</p>
                    <div className="flex gap-2 pt-2">
                        <div className="rounded-full w-7 h-7 bg-gray-600"></div>
                        <div className="rounded-full w-7 h-7 bg-gray-600"></div>
                        <div className="rounded-full w-7 h-7 bg-gray-600"></div>
                    </div>
                </div>

                <div className="xl:w-[40%] flex gap-10 xl:justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold">Features</h1>
                        <ul className="text-slate-500 flex flex-col gap-2 text-sm">
                            <li>Project</li>
                            <li>Shop</li>
                            <li>Hire service</li>
                            <li>Gallery</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold">Company</h1>
                        <ul className="text-slate-500 flex flex-col gap-2 text-sm">
                            <li>Partnership</li>
                            <li>Terms of use</li>
                            <li>We are hiring</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold">FAQ</h1>
                        <ul className="text-slate-500 flex flex-col gap-2 text-sm">
                            <li>What services that you offer?</li>
                            <li>How do you ensure project quality</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                <div className="xl:w-[25%] flex flex-col items-center gap-5">
                    <div>
                        <h1 className="font-bold">Subscribe To Our Newsletter</h1>
                        <p className="text-slate-500">Latest news articles, sent to your inbox</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter your email" className="p-2 text-sm"/>
                        <button className="bg-blue-500 text-white p-2 text-sm">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </>
    )
}