import { IoIosArrowDown } from "react-icons/io";
import { ItemCard } from "../../fragments/ItemCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { ShopLoading } from "../../fragments/ShopLoading";

export function MainShop() {    
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://buildong-api.vercel.app/products')
                setData(response.data.products)
                console.log(response.data.products)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="w-full flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-lg ">Showing 1-15  of 300 result</h1>
                    </div>
                    <div className="flex items-center gap-5">
                        <p>Short by:</p>
                        <div className="flex flex-col">
                            <div className="py-2 px-3 border flex rounded-3xl items-center gap-2">
                                <p>Default Sorting</p>
                                <IoIosArrowDown />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="py-2 px-3 border flex rounded-3xl items-center gap-2">
                                <p>Size</p>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                </div>
                {loading ? (<ShopLoading/>) : (
                    <div className="flex gap-5 flex-wrap">
                        {
                            data?.map((dt, index) => (
                                <div key={index}>
                                    <ItemCard key={index}
                                        loading={loading}
                                        brand={dt.brand}
                                        category={dt.category}
                                        desc={dt.desc}
                                        image={dt.image}
                                        name={dt.name}
                                        published_at={dt.published_at}
                                        item_sold={dt.item_sold}
                                        reviews={dt.reviews}
                                        unit_price={dt.unit_price}
                                    />
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </>
    )
}