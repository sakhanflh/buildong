const AdditionalOption = () => {
    return (
    <div className="bg-white rounded-lg shadow-soft px-6 py-6">
        <h1 className="text-lg font-bold">Additional Options</h1>
        <p>Please fill this section</p>
        <div className="mt-4">
            <div className="flex flex-col gap-1">
                <label htmlFor="start">Start Project</label>
                <input type="date" name="start" id="start" className="focus:border-blue-300 border-2 bg-neutral-50 border-neutral-300 focus:bg-blue-50 rounded-lg px-4 py-2 outline-none"/>
            </div>
            <div className="flex gap-4">
                <div className="flex flex-col gap-1 mt-4 w-1/2">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="worker">Total Workers</label>
                        <select name="worker" id="worker" className="focus:border-blue-300 border-2 bg-neutral-50 border-neutral-300 focus:bg-blue-50 rounded-lg px-4 py-2 outline-none">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </div>
                    <p className="text-sm text-primary font-medium">Increasing the number of workers will reduce the project duration.</p>
                </div>
                <div className="w-1/2 flex flex-col gap-1 mt-4">
                    <h1>Project Duration</h1>
                    <input type="text" value={`${5} days`} className="border-b-2 px-4 py-2"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AdditionalOption