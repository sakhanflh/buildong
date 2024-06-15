/* eslint-disable react/prop-types */
import FilteredBtn from "../../fragments/FilteredBtn";

const ActiveFilter = ({onClick, filterData}) => {
    return(
        <div className="flex gap-2 text-sm">
            <h1>Active Filter :</h1>
            <div className="flex gap-1 items-center flex-wrap">
            {Object.entries(filterData).map(([key, value]) => {
                if (value) {
                    return (
                        <FilteredBtn
                            key={key}
                            name={value}
                            onClick={() => onClick(key)}
                        />
                    );
                }
                return null;
            })}
            </div>
        </div>
    )
}

export default ActiveFilter;