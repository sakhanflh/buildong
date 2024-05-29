/* eslint-disable react/prop-types */
const SimpleCard = ({img, title, team, date}) => {
    return(
        <>
        <div className="w-1/2">
            <div className="rounded-lg overflow-hidden w-full h-28 relative">
                <img src={img} alt=""  className="absolute w-full h-full object-cover"/>
            </div>
            <h1 className="font-semibold mt-2">{title}</h1>
            <p className="text-xs text-neutral-500">by <span className="font-medium text-blue">{team}</span> on {date}</p>
        </div>
        </>
    )
}

export default SimpleCard;