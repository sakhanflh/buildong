import { useEffect, useState } from "react";
import { AdminInput } from "../../fragments/AdminInput";
import { ProductsItem } from "../../fragments/ProductsItem";
import axios from "axios";

export function Products() {
    const [newData, setNewData] = useState({
        name: "",
        photo: [],
        desc: "",
        category: "",
        brand: "",
        stock: "",
        unit_price: "",
    })

    useEffect(() => {
        console.log(newData)
    }, [newData])

    async function handleUploadData() {
        const newForm = new FormData();
        for (let i = 0; i < newData.photo.length; i++) {
            newForm.append('photo', newData.photo[i]);
        }

        Object.keys(newData).forEach((key) => {
            newForm.append(key, newData[key]);
        })

        try {
            const res = await axios.post('https://buildong-api.vercel.app/products/upload', newForm, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="flex flex-col gap-5 xl:gap-10">
                <div>
                    <h1 className="text-xl flex justify-center xl:justify-normal xl:text-3xl font-medium text-font-gray">Add New Product</h1>
                </div>
                <div className="grid xl:grid-cols-2 gap-5">
                    <ProductsItem
                        title={"Description"}
                    >
                        <AdminInput
                            subTitle={"Add New Product"}
                            onChange={(e) => setTimeout(() => { setNewData({ ...newData, name: e.target.value }) }, 3000)}
                        />
                        <AdminInput
                            subTitle={"Business Description"}
                            type={'textarea'}
                            onChange={(e) => setTimeout(() => { setNewData({ ...newData, desc: e.target.value }) }, 3000)}
                        />
                    </ProductsItem>

                    <ProductsItem
                        title={"Category"}
                    >
                        <AdminInput
                            subTitle={"Category"}
                            onChange={(e) => setTimeout(() => { setNewData({ ...newData, category: e.target.value }) }, 3000)}
                        />
                        <AdminInput
                            subTitle={"Brand"}
                            onChange={(e) => setTimeout(() => { setNewData({ ...newData, brand: e.target.value }) }, 3000)}
                        />
                    </ProductsItem>

                    <ProductsItem
                        title={"Product Details"}
                    >
                        <AdminInput
                            subTitle={'Price'}
                            type={'number'}
                            onChange={(e) => setTimeout(() => { setNewData({ ...newData, unit_price: e.target.value }) }, 3000)}
                        />

                        <AdminInput
                            subTitle={'Stock'}
                            type={'number'}
                            onChange={(e) => setTimeout(() => { setNewData({ ...newData, stock: e.target.value }) }, 3000)}
                        />
                    </ProductsItem>

                    <ProductsItem
                        title={'Product Image'}
                    >

                        <AdminInput
                            type={'file'}
                            img={newData.photo}
                            onChange={(e) => setNewData({ ...newData, photo: [...newData.photo, e.target.files[0]] })}
                        />
                    </ProductsItem>

                    <div className="w-full h-12 gap-5 flex">
                        <button className="px-5 py-2 border font-medium rounded-lg bg-red-500 text-white">Discard</button>
                        <button className="px-5 py-2 border font-medium rounded-lg bg-primary text-white" onClick={handleUploadData}>Add Product</button>
                    </div>
                </div>
            </div>
        </>
    )
}