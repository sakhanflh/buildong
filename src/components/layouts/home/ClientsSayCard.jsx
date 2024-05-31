export function ClientsSayCard({say, name, job, image}) {
    return (
        <>
            <div className="shadow-md w-80 border rounded-3xl p-5 flex flex-col gap-3">
                <div>
                    <h1>{say}</h1>
                </div>

                <div className="flex justify-between border-t pt-2 items-center">
                    <div className="w-[20%] rounded-full overflow-hidden">
                        <div>
                            <img src={image} alt="" className="w-full object-cover"/>
                        </div>
                    </div>

                    <div className="w-[75%]">
                        <h1 className="font-semibold text-lg">{name}</h1>
                        <p className="text-primary text-sm font-medium">{job}</p>
                    </div>
                </div>
            </div>
        </>
    )
}