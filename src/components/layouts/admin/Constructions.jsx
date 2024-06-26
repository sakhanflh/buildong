import { AdminInput } from "../../fragments/AdminInput";
import { ProductsItem } from "../../fragments/ProductsItem";

export function Constructions() {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div>
                    <h1 className="text-3xl font-medium text-font-gray">Add New Construction</h1>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <ProductsItem
                        title="Description"
                        subTitle="Design Name"
                        subTitle2="Design Description"
                        inputType="input"
                        inputType2="textarea"
                    >
                        <AdminInput
                            subTitle={"Design Name"}
                        />
                        <AdminInput
                            subTitle={"Design Description"}
                            type={"textarea"}
                        />
                    </ProductsItem>

                    <ProductsItem
                        title="Detail Design"
                    >
                        <AdminInput
                            subTitle={"Price"}
                            type={'number'}
                        />
                        <AdminInput
                            subTitle={"Start"}
                            type={'date'}
                        />
                        <AdminInput
                            subTitle={"Finish"}
                            type={"date"}
                        />

                    </ProductsItem>

                    <ProductsItem
                        title="Catergory"
                    >
                        <AdminInput
                            subTitle={"Category"}
                        />
                        <AdminInput
                            subTitle={"Style"}
                        />
                    </ProductsItem>

                    <ProductsItem
                        title={'Product Image'}
                    >

                        <AdminInput
                            type={'file'}
                        />
                    </ProductsItem>

                    <div className="w-full h-12 gap-5 flex">
                        <button className="px-5 py-2 border font-medium rounded-lg bg-red-500 text-white">Discard</button>
                        <button className="px-5 py-2 border font-medium rounded-lg bg-primary text-white">Add Product</button>
                    </div>
                </div>
            </div>
        </>
    )
}