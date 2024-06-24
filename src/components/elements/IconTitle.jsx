/* eslint-disable react/prop-types */
const IconTitle = ({icon, title}) => {
    return (
    <div className="flex items-center gap-3 xl:text-xl">
        {icon}
        <h1 className="font-bold">{title}</h1>
    </div>
    )
}

export default IconTitle;