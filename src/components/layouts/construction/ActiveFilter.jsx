import FilteredBtn from "../../fragments/FilteredBtn";

const ActiveFilter = () => {
    return(
        <div className="flex gap-2 text-sm">
            <h1>Active Filter :</h1>
            <div className="flex gap-1 items-center flex-wrap">
                <FilteredBtn
                name={"Wood"}
                />
            </div>
        </div>
    )
}

export default ActiveFilter;