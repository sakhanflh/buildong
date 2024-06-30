/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TabBar = ({icon, value, to, data}) => {
    const [total, setTotal] = useState(0)
    const { statusId } = useParams()

    useEffect(() => {
        console.log(total)
        if(value.toLowerCase() == 'all'){
            return setTotal(data?.length)
        }
        const findStatus = data?.filter(dt => dt.status == value.toLowerCase())
        setTotal(findStatus?.length)
    }, [data, total])

    return (
        <Link to={`/profile/orders/${to}`} className={`${value.toLowerCase() == statusId ? 'border-primary text-primary font-semibold' : ''} text-sm cursor-pointer flex justify-center items-center gap-2 hover:text-primary hover:border-primary text-neutral-400 transition-all duration-150 hover:font-semibold border-b-2 py-3 px-4 w-full text-center xl:text-base relative`}>
            {icon}
            <h1 className="hidden xl:block">{value}</h1>
            <p>{total}</p>
        </Link>
    )
}

export default TabBar;