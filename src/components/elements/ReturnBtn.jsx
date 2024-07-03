import { FaChevronLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom";

const ReturnBtn = () => {
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };
    return (
        <button 
        className="flex items-center gap-4 px-4 py-2 bg-white rounded-lg shadow-soft text-sm xl:text-base font-medium"
        onClick={handleReturn}
        >
            <FaChevronLeft className="text-xs xl:text-sm"/>
            Return
        </button>
    )
}

export default ReturnBtn;