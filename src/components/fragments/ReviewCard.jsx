/* eslint-disable react/prop-types */
import Stars from "../elements/Stars"

const ReviewCard = ({name, img, postAt, star, desc}) => {
    return (
        <div className="border-b-2 py-3">
            <div className="flex justify-between items-start">
                <div>
                <div className="flex gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-neutral-300 overflow-hidden">
                        <img src={img} alt="" className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="font-semibold">{name}</h1>
                </div>
                <Stars length={star}/>
                </div>
                <p className="text-neutral-400">{postAt}</p>
            </div>
            <p className="text-neutral-500 mt-3">{desc}</p>
        </div>
    )
}

export default ReviewCard;