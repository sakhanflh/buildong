/* eslint-disable react/prop-types */
import { FiX } from "react-icons/fi"

const FilteredBtn = ({name}) => {
    return (
        <div className="px-3 py-1 bg-blue rounded-full text-white text-xs flex items-center gap-2">
            <h1>{name}</h1>
            <FiX/>
        </div>
    )
}

export default FilteredBtn;