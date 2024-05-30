const ImgCardUI = () => {
    return(
        <div className="rounded-lg w-1/2 relative overflow-hidden xl:w-1/2 ">
            <img src="/img/kitchen-set.jpg" alt="" className="w-full h-full object-cover absolute"/>
            <div className="relative w-full h-full p-2">
                <div className="border-2 border-white w-full h-full rounded-lg">
                </div>
            </div>
        </div>
    )
}

export default ImgCardUI;