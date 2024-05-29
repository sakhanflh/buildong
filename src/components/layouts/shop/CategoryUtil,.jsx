export function CategoryUtil() {
    return (
        <div className="flex flex-col gap-2">
            <div className="p-3 border rounded-3xl flex items-center gap-3">
                <input type="radio" className="" />
                <label htmlFor="">Bedroom</label>
            </div>

            <div className="p-3 border rounded-3xl flex items-center  gap-3">
                <input type="radio" className="" />
                <label htmlFor="">Living Room</label>
            </div>

            <div className="p-3 border rounded-3xl flex items-center  gap-3">
                <input type="radio" className="" />
                <label htmlFor="">Office</label>
            </div>

            <div className="p-3 border rounded-3xl flex items-center gap-3">
                <input type="radio" className="" />
                <label htmlFor="">Kitchen</label>
            </div>

            <div className="p-3 border rounded-3xl flex items-center gap-3">
                <input type="radio" className="" />
                <label htmlFor="">Outdoor</label>
            </div>

            <div className="p-3 border rounded-3xl flex items-center gap-3">
                <input type="radio" className="" />
                <label htmlFor="">Decor</label>
            </div>
        </div>
    )
}