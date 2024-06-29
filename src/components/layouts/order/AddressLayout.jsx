/* eslint-disable react/prop-types */
import Loader from "../../fragments/Loader"

const AddressLayout = ({account}) => {
    return (
        <div className=" rounded-lg bg-white shadow-soft px-6 py-6">
            <h1 className="font-bold xl:text-lg">Shipping Address</h1>
            {
            !account ?
            <div className="mt-4 xl:mt-6 flex justify-center">
                <Loader color={'bg-primary'}/>
            </div>
            :
            <div className="mt-4 xl:mt-6 border-blue-200 text-sm xl:text-base bg-blue-50 px-4 py-4 border-2 rounded-lg max-w-80">
                <h1>{account.phone}</h1>
                <h2 className="font-semibold">{account.address}</h2>
            </div>
            }
        </div>
    )
}

export default AddressLayout;