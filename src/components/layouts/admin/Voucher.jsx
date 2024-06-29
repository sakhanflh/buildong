import { AdminInput } from "../../fragments/AdminInput";
import { ProductsItem } from "../../fragments/ProductsItem";

export function Voucher() {
    return (
        <>
            <div className="flex flex-col gap-5 xl:gap-10">
                <div>
                    <h1 className="text-xl flex justify-center xl:justify-normal xl:text-3xl font-medium text-font-gray">Add Voucher</h1>
                </div>

                <div className="grid xl:grid-cols-2 gap-5">
                    <ProductsItem
                        title={"Detail Discount"}
                    >
                        <AdminInput
                            subTitle={"Title"}
                        />
                        <AdminInput
                            subTitle={"Description"}
                            type={'textarea'}
                        />
                    </ProductsItem>
                    <ProductsItem
                    title={"Discount"}
                    >
                        <AdminInput
                            subTitle={"Select Rank"}
                            type={'select'}
                            option1={"Silver"}
                            option2={"Gold"}
                            option3={"Platinum"}
                        />

                        <AdminInput
                            subTitle={"Select Shop"}
                            type={'select'}
                            option1={"Product"}
                            option2={"Construction"}
                        />

                        <AdminInput
                            subTitle={"Select Discount"}
                            type={'select'}
                            option1={"Shipping Cost"}
                            option2={"Discounts"}
                            option3={""}
                        />

                        <AdminInput
                            subTitle={"Total Discount"}
                        />
                    </ProductsItem>
                </div>
                <div className="w-full h-12 gap-5 flex">
                    <button className="px-5 py-2 border font-medium rounded-lg bg-red-500 text-white">Discard</button>
                    <button className="px-5 py-2 border font-medium rounded-lg bg-primary text-white">Add Discount</button>
                </div>
            </div>
        </>
    )
}