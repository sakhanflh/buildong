import { ChooseUsData } from "../../data/ChooseUsData"
import { useState } from "react";

export function ChooseUsSection() {
    const [activeId, setActiveId] = useState(1);
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="w-full flex flex-col items-center gap-1 xl:gap-3">
                    <h1 className="text-font-black text-3xl xl:text-5xl font-bold">Why Choose Us?</h1>
                    <p className="text-font-gray xl:text-xl">Discover Buildong difference</p>
                </div>

                <div className="w-full flex flex-col xl:flex-row xl:justify-between gap-5 xl:gap-0">
                    <div className="xl:w-[40%] flex flex-col justify-between">
                        <div className="flex flex-col xl:flex-col gap-2 xl:gap-5">
                            {ChooseUsData.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveId(item.id)}
                                    className={`flex border-b text-sm font-semibold py-3 ${activeId === item.id ? ' text-black border-black opacity-100' : ' text-font-gray border-font-gray opacity-80'}`}
                                >{item.title}
                                </button>
                            ))}
                        </div>

                        <div className="xl:flex gap-3 hidden">
                            <button className="px-8 py-2 border border-black rounded-3xl bg-white hover:scale-90">Learn More</button>
                            <button className="px-8 py-2 border-black border rounded-3xl bg-font-black text-white hover:scale-90s">Contact Us</button>
                        </div>
                    </div>

                    <div className="xl:w-[55%] flex flex-col">
                        {ChooseUsData.map((item) => (
                            activeId === item.id && (
                                <div key={item.id} className="flex flex-col gap-5">
                                    <div className="rounded-3xl xl:w-[38rem] xl:h-[20rem] overflow-hidden">
                                        <img src={item.image} alt="" className="w-full"/>
                                    </div>
                                    <div className="xl:w-[38rem]">
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                    <div className="xl:hidden flex w-full items-center justify-center gap-3">
                            <button className="px-8 py-2 border border-black rounded-3xl bg-white hover:scale-90">Learn More</button>
                            <button className="px-8 py-2 border-black border rounded-3xl bg-font-black text-white hover:scale-90">Contact Us</button>
                        </div>
                </div>
            </div>
        </>
    )
}