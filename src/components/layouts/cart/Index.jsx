import { MainCart } from "./MainCart";
import { PaymentCart } from "./PaymentCart";

export function Index() {
    return (
        <>
            <div className="flex justify-between">
                <MainCart/>
                <PaymentCart/>
            </div>
        </>
    )
}