/* eslint-disable react/prop-types */
import CategoryList from "../elements/CategoryList";
import { FiX } from "react-icons/fi"
import DropDownInput from "./DropDownInput";

const SideFilter = ({showFilter, setShowFilter, setCategory, setStyle, setMaterial, setPriceFrom, setPriceTo, page}) => {

    return(
        <>
        <div className={`${showFilter ? "translate-x-0" : "-translate-x-96"} transition-all duration-300 text-sm xl:text-base fixed left-0 top-0 w-60 px-6 pt-16 xl:pt-4 bg-white h-dvh z-30 xl:relative xl:translate-x-0 shadow-soft xl:rounded-lg xl:z-0 xl:w-80 xl:h-max`}>
            <div className="py-4 border-b-2 flex justify-between items-center xl:py-6">
                <h1 className="font-semibold text-lg">Filter Options</h1>
                <FiX onClick={() => setShowFilter(false)} className="flex xl:hidden"/>
            </div>
            <div className="py-4 border-b-2 xl:py-6">
                <h1 className="font-medium">Category</h1>
                <div className={`pl-3 text-neutral-500 pt-5 ${page == 'construction' ? 'flex' : 'hidden'} flex-wrap gap-1`}>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"House"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Bedroom"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Office"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"School"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Residential"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Commercial"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Industrial"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Renovation"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Institutional"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Hospitality"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Other"}/>
                </div>
                <div className={`pl-3 text-neutral-500 pt-5 ${page == 'construction' ? 'hidden' : 'flex'} flex-wrap gap-1`}>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Furniture"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Kitchen"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Bathroom"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Outdoor"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Decor"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Storage"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Flooring"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Wall Art"}/>
                    <CategoryList onClick={(e) => setCategory(e.target.innerText)} name={"Other"}/>
                </div>
            </div>
            <div className="py-4 border-b-2 xl:py-6">
                <h1 className="font-medium">Price</h1>
                <div className="pl-3 text-neutral-500 pt-5 flex gap-1 w-full">
                    <DropDownInput placeholder={"From"} onChange={(e) => setPriceFrom(e.target.value)}/>
                    <DropDownInput placeholder={"To"} onChange={(e) => setPriceTo(e.target.value)}/>
                </div>
            </div>
            <div className="py-4 border-b-2 xl:py-6">
                <h1 className="font-medium">Style</h1>
                <div className="pl-3 text-neutral-500 pt-5 flex flex-wrap gap-1">
                    <CategoryList onClick={(e) => setStyle(e.target.innerText)} name={"Minimalist"}/>
                    <CategoryList onClick={(e) => setStyle(e.target.innerText)} name={"Modern"}/>
                    <CategoryList onClick={(e) => setStyle(e.target.innerText)} name={"Vintage"}/>
                    <CategoryList onClick={(e) => setStyle(e.target.innerText)} name={"Industrial"}/>
                    <CategoryList onClick={(e) => setStyle(e.target.innerText)} name={"Scandinavian"}/>
                    <CategoryList onClick={(e) => setStyle(e.target.innerText)} name={"Rustic"}/>
                    <CategoryList onClick={(e) => setStyle(e.target.innerText)} name={"Mediterranean"}/>
                    <CategoryList onClick={(e) => setStyle(e.target.innerText)} name={"Other"}/>
                </div>
            </div>
            <div className={`${page == 'construction' ? 'hidden' : ''} py-4 xl:py-6`}>
                <h1 className="font-medium">Material</h1>
                <div className="pl-3 text-neutral-500 pt-5 flex flex-wrap gap-1">
                    <CategoryList onClick={(e) => setMaterial(e.target.innerText)} name={"Wood"}/>
                    <CategoryList onClick={(e) => setMaterial(e.target.innerText)} name={"Metal"}/>
                    <CategoryList onClick={(e) => setMaterial(e.target.innerText)} name={"Glass"}/>
                    <CategoryList onClick={(e) => setMaterial(e.target.innerText)} name={"Plastic"}/>
                    <CategoryList onClick={(e) => setMaterial(e.target.innerText)} name={"Fabric"}/>
                    <CategoryList onClick={(e) => setMaterial(e.target.innerText)} name={"Leather"}/>
                    <CategoryList onClick={(e) => setMaterial(e.target.innerText)} name={"Stone"}/>
                    <CategoryList onClick={(e) => setMaterial(e.target.innerText)} name={"Ceramic"}/>
                    <CategoryList onClick={(e) => setMaterial(e.target.innerText)} name={"Other"}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideFilter;