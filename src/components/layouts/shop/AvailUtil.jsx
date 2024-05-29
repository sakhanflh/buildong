export function AvailUtil(){
    return(
        <div className="flex flex-col gap-2">
            <div className="p-3 border rounded-3xl flex items-center gap-3">
                <input type="radio" className="" />
                <label htmlFor="">In Stock</label>
            </div>

            <div className="p-3 border rounded-3xl flex items-center gap-3">
                <input type="radio" className="" />
                <label htmlFor="">Out of Stock</label>
            </div>
        </div>
    )
}