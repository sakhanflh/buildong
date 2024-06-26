import { AdminInput } from "./AdminInput";

export function ProductsItem({ title, children}) {
    return (
        <>
            <div className="flex flex-col gap-2 h-max">
                <h2 className="font-medium text-xl">{title}</h2>
                <div className="w-full p-4 border rounded-lg">
                    {children}
                </div>
            </div>
        </>
    )
}