import { LuArrowUpRightFromCircle } from "react-icons/lu";
export function OurProjectCard({ location, image, date }) {

    return (
        <>
            <div className="xl:w-[32rem] h-52 xl:h-64 rounded-3xl p-5 flex flex-col justify-between"
                style={{
                    backgroundImage: `linear-gradient(to top, rgba(10, 10, 10, 0.9), rgba(0, 0, 0, 0)), url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="w-full flex justify-end xl:text-4xl opacity-0 xl:opacity-100 ">
                    <LuArrowUpRightFromCircle />
                </div>
                <div className="w-full blur-0 bg-opacity-0">
                    <h1 className="text-lg xl:text-2xl font-semibold">{location}</h1>
                    <p className="text-sm xl:text-base">{date}</p>
                </div>
                <div className="absolute inset-0 flex items-center xl:w-[32rem] rounded-3xl justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg">Selengkapnya</span>
                </div>
            </div>
        </>
    )
}