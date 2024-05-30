/* eslint-disable react/prop-types */
const Heading = ({title, nav}) => {
    return(
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-medium text-black xl:text-xl">{title}</h1>
            <a href="" className="text-sm text-blue underline underline-offset-2">{nav}</a>
        </div>
    )
}

export default Heading;