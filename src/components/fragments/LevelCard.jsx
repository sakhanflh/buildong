/* eslint-disable react/prop-types */
import { FaInfoCircle } from "react-icons/fa";

const LevelCard = ({points, level}) => {

    return (
        <div className={`rounded-lg border-2 px-4 shadow-soft w-full xl:w-1/3 py-3 ${level?.toLocaleLowerCase()}`}>
            <div className="flex justify-between items-center text-neutral-200">
                <h1 className="font-bold text-sm">{level}</h1>
                <FaInfoCircle className="text-white cursor-pointer"/>
            </div>
            <p className="text-xl xl:text-3xl font-bold mt-1">{points ? points : 0} pts</p>
        </div>
    )
}

export default LevelCard;