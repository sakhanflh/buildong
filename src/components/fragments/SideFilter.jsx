/* eslint-disable react/prop-types */
import { FaChevronDown } from "react-icons/fa6";
import CategoryList from "../elements/CategoryList";
import { FiX } from "react-icons/fi"
import DropDownInput from "./DropDownInput";

const SideFilter = ({showFilter, setShowFilter}) => {
    return(
        <>
        <div className={`${showFilter ? "translate-x-0" : "-translate-x-96"} transition-all duration-300 fixed left-0 top-0 w-60 px-6 pt-4 bg-white h-dvh z-30 xl:relative xl:translate-x-0 shadow-soft xl:rounded-lg xl:z-0 xl:w-80 xl:h-max`}>
            <div className="py-4 border-b-2 flex justify-between items-center xl:py-6">
                <h1 className="font-semibold text-lg">Filter Options</h1>
                <FiX onClick={() => setShowFilter(false)} className="flex xl:hidden"/>
            </div>
            <div className="py-4 border-b-2 xl:py-6">
                <h1 className="font-medium text-sm">Category</h1>
                <div className="pl-3 text-sm text-neutral-500 pt-5 flex flex-wrap gap-1">
                    <CategoryList name={"Home"}/>
                    <CategoryList name={"Office"}/>
                    <CategoryList name={"School"}/>
                </div>
            </div>
            <div className="py-4 border-b-2 xl:py-6">
                <h1 className="font-medium text-sm">Price</h1>
                <div className="pl-3 text-sm text-neutral-500 pt-5 flex gap-1 w-full">
                    <DropDownInput placeholder={"From"}/>
                    <DropDownInput placeholder={"To"}/>
                </div>
            </div>
            <div className="py-4 border-b-2 xl:py-6">
                <h1 className="font-medium text-sm">Style</h1>
                <div className="pl-3 text-sm text-neutral-500 pt-5 flex flex-wrap gap-1">
                    <CategoryList name={"Western"}/>
                    <CategoryList name={"Modern"}/>
                    <CategoryList name={"Vintage"}/>
                </div>
            </div>
            <div className="py-4 xl:py-6">
                <h1 className="font-medium text-sm">Material</h1>
                <div className="pl-3 text-sm text-neutral-500 pt-5 flex flex-wrap gap-1">
                    <CategoryList name={"Western"}/>
                    <CategoryList name={"Modern"}/>
                    <CategoryList name={"Vintage"}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideFilter;