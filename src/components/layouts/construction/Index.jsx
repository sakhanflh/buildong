import { FiChevronDown, FiFilter } from "react-icons/fi";
import Heading from "../../fragments/Heading";
import SimpleCard from "../../fragments/SimpleCard";
import ActiveFilter from "./ActiveFilter";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect } from "react";
import Card from "../../fragments/Card";
import Rupiah from "../../../utils/Rupiah"
import Loader from "../../fragments/Loader"

const Index = () => {
    const { data, isLoading, isError } = useFetch('https://buildong-api.vercel.app/constructions') 

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
        <div className="px-[5%] mt-5">
            <div className="bg-white rounded-lg px-4 py-4">
                <Heading
                title={"Our latest projects"}
                nav={"See all projects"}
                />
                <div className="flex gap-2 mt-5">
                    <SimpleCard
                    img={"/img/kitchen-set.jpg"}
                    title={"Western Kitchen Set"}
                    team={"Buildong"}
                    date={"Apr 12.24"}
                    />
                    <SimpleCard
                    img={"/img/kitchen-set.jpg"}
                    title={"Western Kitchen Set"}
                    team={"Buildong"}
                    date={"Apr 12.24"}
                    />
                </div>
            </div>
        <div className="flex justify-end mt-5">
            <button className="py-1 px-6 bg-blue flex items-center gap-2 rounded-lg text-white font-medium">
                <FiFilter/>
                Filter
            </button>
        </div>
        <div className="bg-white rounded-lg w-full py-4 px-[5%] shadow-soft mt-5">
            <div className="flex justify-between items-center">
                <h1 className="text-sm font-medium">Showing 1-15 of 300 result</h1>
                <div className="text-sm text-blue flex items-end gap-2">
                    <h1>Sort by</h1>
                    <FiChevronDown/>
                </div>
            </div>
            <div className="mt-5">
                <ActiveFilter/>
            </div>
            <div className="mt-8 flex gap-4">
                {
                    isLoading ?
                    <div className="flex justify-center py-10 w-full">
                        <Loader/>
                    </div> 
                    :
                    data?.map(dt => (
                        <Card
                        key={dt._id}
                        img={dt.image}
                        category={dt.style}
                        title={dt.design_name}
                        price={Rupiah(dt.total_price)}
                        rate={'4.9'}
                        />
                    ))
                }
            </div>
        </div>
        </div>
        </>
    )
}

export default Index;