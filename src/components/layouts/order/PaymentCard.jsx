/* eslint-disable react/prop-types */
const PaymentCard = ({img, name, onClick, payment}) => {
    return (
    <div onClick={() => onClick(name)} className={`${payment == name ? 'border-primary bg-blue-50' : 'border-neutral-300 bg-neutral-50 opacity-80'} transition-all duration-200 cursor-pointer border-2 w-full xl:w-[49%] rounded-lg px-4 py-2 flex gap-4 items-center`}>
        <div className="w-6 xl:w-16">
            <img src={img} alt="" />
        </div>
        <div>
            <h1 className="font-bold xl:text-lg">{name}</h1>
            <p className="text-sm xl:text-base">Fee Rp 2.500</p>
        </div>
    </div>
    )
}

export default PaymentCard;