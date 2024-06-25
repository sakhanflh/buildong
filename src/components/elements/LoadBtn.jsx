/* eslint-disable react/prop-types */
import Loader from "../fragments/Loader"

const LoadBtn = ({loading, value, onClick, width}) => {
    return (
        <button
            type="submit"
            className={`${width ? width : 'w-full'} flex justify-center px-6 py-2 text-sm text-white bg-primary rounded-lg hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-blue-400 xl:text-base`}
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