/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import SkeletonLoading from "../../fragments/SkeletonLoading"

const AdditionalOption = ({data, isLoading, newOrder, setNewOrder}) => {
    const [newWorker, setNewWorker] = useState('');
    const [newDuration, setNewDuration] = useState('');

    useEffect(() => {
        let lessDuration = ''
        if(newWorker == data?.worker){
            setNewOrder({...newOrder, total_workers: data.worker, project_duration: data.project_duration})
            return setNewDuration(lessDuration)
        }
        if(newWorker == '10'){
            lessDuration = data?.project_duration - 20
            setNewDuration(lessDuration)
        } else if(newWorker == '15'){
            lessDuration = data?.project_duration - 30
            setNewDuration(lessDuration)
        }
        setNewOrder({...newOrder, project_duration: lessDuration, total_workers: newWorker})
        console.log(newWorker)
    }, [newWorker, newDuration, data])
    
    return (
    <div className="bg-white rounded-lg shadow-soft px-6 py-6">
        <h1 className="xl:text-lg font-bold">Additional Options</h1>
        <p className="text-sm xl:text-base">Please fill this section</p>
        <div className="mt-4 text-sm xl:text-base">
            <div className="flex flex-col gap-1">
                <label htmlFor="start">Start Project</label>
                <input onChange={(e) => setNewOrder({...newOrder, project_start: e.target.value})} type="date" name="start" id="start" className="focus:border-blue-300 border-2 bg-neutral-50 border-neutral-300 focus:bg-blue-50 rounded-lg px-4 py-2 outline-none"/>
            </div>
            <div className="flex flex-col gap-2 xl:flex-row xl:gap-4">
                <div className="flex flex-col gap-1 mt-4 xl:w-1/2">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="worker">Total Workers</label>
                        <select name="worker" onChange={(e) => setNewWorker(e.target.value)} id="worker" className="focus:border-blue-300 border-2 bg-neutral-50 border-neutral-300 focus:bg-blue-50 rounded-lg px-4 py-2 outline-none">
                            <option value="5">{data?.worker}</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </div>
                </div>
                <div className="xl:w-1/2 flex flex-col gap-1 mt-4">
                    <h1>Project Duration</h1>
                    {
                        isLoading ? <SkeletonLoading width={'w-20'}  margin={'mt-2'}/> :
                        <div className={`border-b-2 px-4 py-2 flex gap-3`}>
                            <p className={`${newDuration !== "" ? 'line-through  text-neutral-500': ''}`}>{`${data.project_duration} days `}</p>
                            <p className={`${newDuration !== "" ? 'opacity-100' : 'opacity-0'} transition-all duration-200 text-primary font-semibold`}>{`${newDuration - 5} - ${newDuration} days`}</p>
                        </div>
                    }
                    <p className="text-xs xl:text-base text-primary font-medium">Increasing the number of workers will reduce the project duration.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AdditionalOption