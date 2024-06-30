/* eslint-disable react/prop-types */
const CircleEl = ({icon, value, status}) => {


    return (
        <div className={`${value == status ? 'bg-primary text-white' : 'bg-white'}  border-2 border-primary w-16 h-16 rounded-full flex items-center justify-center text-primary text-2xl`}>
            {icon}
        </div>
    )
}

export default CircleEl;