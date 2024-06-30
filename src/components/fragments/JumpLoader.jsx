const JumpLoader = () => {

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-neutral-50 bg-opacity-15 backdrop-blur-sm">
        <div className="flex flex-col gap-4 items-center">
            <div className="loader">
                <div className="loader__balls">
                    <div className="loader__balls__group">
                        <div className="ball item1"></div>
                        <div className="ball item1"></div>
                        <div className="ball item1"></div>
                    </div>
                    <div className="loader__balls__group">
                        <div className="ball item2"></div>
                        <div className="ball item2"></div>
                        <div className="ball item2"></div>
                    </div>
                    <div className="loader__balls__group">
                        <div className="ball item3"></div>
                        <div className="ball item3"></div>
                        <div className="ball item3"></div>
                    </div>
                </div>
            </div>
            <h1 className="font-semibold text-xl text-primary">Proccessing your order...</h1>
            {/* <img src="/img/animation.gif" alt="" className="mix-blend-multiply"/> */}
        </div>
        </div>
    )
}

export default JumpLoader;