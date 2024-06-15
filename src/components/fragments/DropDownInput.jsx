/* eslint-disable react/prop-types */
import { FaChevronDown } from "react-icons/fa6"

const DropDownInput = ({placeholder, onChange}) => {
    return(
        <div className="flex border-2 px-2 py-1 rounded-lg w-1/2 items-center gap-2">
            <input onChange={onChange} type="text" placeholder={placeholder} className="outline-none w-full"/>
            <FaChevronDown className="text-xs"/>
        </div>
    )
}

export default DropDownInput;