/* eslint-disable react/prop-types */
const CategoryList = ({name}) => {
    // outline-sky-200 bg-blue
    return (
        <div className="flex items-center border-2 rounded-full px-4 w-max py-1 gap-2 cursor-pointer hover:scale-[.98] transition-all duration-150 text-neutral-500 hover:text-black text-xs">
            <h1>{name}</h1>
        </div>
    )
}

export default CategoryList;