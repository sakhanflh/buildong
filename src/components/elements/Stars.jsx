/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6"

const Stars = ({length}) => {
    const arrLength = Array(length).fill(0)
    const anoLength = Array(5 - length).fill(0)

    return (
        <div className="flex gap-1 items-center">
            {
                arrLength.map((_,i) => (
                    <FaStar key={i} className="text-primary"/>
                ))
            }
            {
                anoLength.map((_,i) => (
                    <FaStar key={i} className="text-neutral-300"/>
                ))
            }
        </div>
    )
}

export default Stars;