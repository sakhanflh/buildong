/* eslint-disable react/prop-types */
import Rupiah from "../../../utils/Rupiah"

const SimpleCard = ({data}) => {
    return (
        <div className="hover:bg-blue-50 cursor-pointer border-b-2 mt-4 px-4 py-4 flex flex-col gap-2 xl:block h-max">
                        <p className="xl:hidden text-sm xl:text-base font-semibold text-neutral-500">#{data?.order_id}</p>
                        <div className="flex gap-4 ">
                            <div className="w-[30%] xl:w-[15%] overflow-hidden h-20 rounded-lg">
                                <img src={data?.image[0]} alt="" className="w-full h-full object-cover"/>
                            </div>
                            <div className="text-sm xl:text-base flex flex-col w-[70%] xl:w-[85%] justify-between">
                                <div className="flex flex-col-reverse xl:flex-row xl:justify-between w-full">
                                    <h1>{data?.design_name}</h1>
                                    <div className="flex items-center gap-2 xl:gap-3">
                                        <div className={`rounded-full w-2 h-2 xl:w-3 xl:h-3 ${data?.status == 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                                        <p>{data?.status}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between w-full items-end">
                                    <h1 className="xl:text-lg font-semibold">{Rupiah(data?.total_price)}</h1>
                                    <p className="hidden xl:block font-semibold text-neutral-500">{data?.order_id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default SimpleCard;