import { LuArrowUpRightFromCircle } from "react-icons/lu";
export function OurProjectCard() {

    return (
        <>
            <div className="w-[32rem] h-64 rounded-3xl p-5 flex flex-col justify-between project-card-shadow">
                <div className="w-full flex justify-end text-4xl">
                    <LuArrowUpRightFromCircle/>
                </div>
                <div className="w-full blur-0 bg-opacity-0">
                    <h1 className="text-2xl font-semibold">Kalibata City House</h1>
                    <p>October 2022 • April 2024</p>
                </div>
            </div>
        </>
    )
}