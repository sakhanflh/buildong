import { useEffect, useState } from "react";
import { AdminInput } from "../../fragments/AdminInput";
import { ProductsItem } from "../../fragments/ProductsItem";
import axios from "axios";

export function Voucher() {
    const [newData, setNewData] = useState({
        title: "",
        description: "",
        minimum_order: "",
        user_level: "",
        discount_type: "",
        total_discount: "",
    });

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        console.log(newData);
    }, [newData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setIsError(false);
        setMsg('');

        try {
            const response = await axios.post('https://buildong-api.vercel.app/vouchers', newData)
            console.log(response)
            setMsg('Voucher created successfully!');
            setTimeout(() => {
                window.location.reload();
            }, 1500)
        } catch (error) {
            setIsError(true);
            setMsg('Failed to create voucher');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-5 xl:gap-10">
            <div>
                <h1 className="text-xl flex justify-center xl:justify-normal xl:text-3xl font-medium text-font-gray">Add Voucher</h1>
            </div>

            <form onSubmit={handleSubmit} className="grid xl:grid-cols-2 gap-5">
                <ProductsItem title="Detail Discount">
                    <AdminInput
                        subTitle="Title"
                        name="title"
                        value={newData.title}
                        onChange={(e) => setNewData({ ...newData, title: e.target.value })}
                    />
                    <AdminInput
                        subTitle="Description"
                        type="textarea"
                        name="description"
                        value={newData.description}
                        onChange={(e) => setNewData({ ...newData, description: e.target.value })}
                    />
                    <AdminInput
                        subTitle="Minimum Order"
                        name="minimum_order"
                        value={newData.minimum_order}
                        onChange={(e) => setNewData({ ...newData, minimum_order: e.target.value })}
                    />
                </ProductsItem>

                <ProductsItem title="Discount">
                    <AdminInput
                        subTitle="Select Rank"
                        type="select"
                        options={["Bronze", "Silver", "Gold", "Diamond"]}
                        name="user_level"
                        value={newData.user_level}
                        onChange={(e) => setNewData({ ...newData, user_level: e.target.value.toLowerCase() })}
                    />
                    <AdminInput
                        subTitle="Select Discount"
                        type="select"
                        options={["Shipping Cost", "Discounts"]}
                        name="discount_type"
                        value={newData.discount_type}
                        onChange={(e) => setNewData({ ...newData, discount_type: e.target.value })}
                    />
                    <AdminInput
                        subTitle="Total Discount"
                        name="total_discount"
                        value={newData.total_discount}
                        onChange={(e) => setNewData({ ...newData, total_discount: e.target.value })}
                    />
                </ProductsItem>

                <div className="w-full h-12 gap-5 flex">
                    <button
                        type="button"
                        className="px-5 py-2 border font-medium rounded-lg bg-red-500 text-white"
                        onClick={() => setNewData({
                            title: "",
                            description: "",
                            minimum_order: "",
                            user_level: "",
                            discount_type: "",
                            total_discount: "",
                        })}
                    >
                        Discard
                    </button>
                    <button
                        type="submit"
                        className="px-5 py-2 border font-medium rounded-lg bg-primary text-white"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Add Discount'}
                    </button>
                </div>
            </form>

            {msg && (
                <div className={`mt-4 p-2 ${isError ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}`}>
                    {msg}
                </div>
            )}
        </div>
    );
}
