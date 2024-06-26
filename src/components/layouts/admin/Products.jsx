import { AdminInput } from "../../fragments/AdminInput";
import { ProductsItem } from "../../fragments/ProductsItem";

export function Products() {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div>
                    <h1 className="text-3xl">Add New Product</h1>
                </div>
                <div className="grid xl:grid-cols-2 gap-5">
                    <ProductsItem
                        title={"Description"}
                    >
                        <AdminInput
                            subTitle={"Add New Product"}
                        />
                        <AdminInput
                            subTitle={"Business Description"}
                            type={'textarea'}
                        />
                    </ProductsItem>

                    <ProductsItem
                        title={"Category"}
                    >
                        <AdminInput
                            subTitle={"Category"}
                        />
                        <AdminInput
                            subTitle={"Materials"}
                        />
                        <AdminInput
                            subTitle={"Brand"}
                        />
                    </ProductsItem>

                    <ProductsItem
                        title={"Product Details"}
                    >
                        <AdminInput
                            subTitle={'Price'}
                            type={'number'}
                        />

                        <AdminInput
                            subTitle={'Stock'}
                            type={'number'}
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