/* eslint-disable react/prop-types */
import Loader from "../fragments/Loader"

const LoadBtn = ({loading, value, onClick, width}) => {
    return (
        <button
            type="submit"
            className={`${width ? width : 'w-full'} flex justify-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            onClick={onClick}
        >
            {
                loading ? 
                <Loader/>
                :
                <p>{value}</p>
            }
        </button>
    )
}

export default LoadBtn;