import { useEffect, useState } from "react";
import { MainCart } from "./MainCart";
import { PaymentCart } from "./PaymentCart";

export function Index() {
    const [newData, setNewData] = useState([])

    useEffect(() => {
        console.log(newData)
    }, [newData])

    return (
        <>
            <div className="flex justify-between">
                <MainCart newData={newData} setNewData={setNewData}/>
                <PaymentCart newData={newData} setNewData={setNewData}/>
            </div>
        </>
    )
}