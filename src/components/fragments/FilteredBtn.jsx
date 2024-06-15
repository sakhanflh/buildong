/* eslint-disable react/prop-types */
import { FiX } from "react-icons/fi"

const FilteredBtn = ({name, onClick}) => {
    return (
        <div onClick={onClick} className={`px-3 cursor-pointer hover:bg-sky-600 transition-all hover:scale-[.98] duration-100 py-1 bg-primary rounded-full text-white text-xs ${name == "" || name == undefined ? 'hidden' : 'flex'} items-center gap-2`}>
            <h1>{name}</h1>
            <FiX/>
        </div>
    )
}

export default FilteredBtn;