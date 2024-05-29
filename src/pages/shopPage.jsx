import { Header } from "../components/fragments/Header";
import { AsideShop } from "../components/layouts/shop/AsideShop";
import { MainShop } from "../components/layouts/shop/MainShop";

export default function ShopPage() {
    return (
        <>
            <Header />
            <div className="w-full flex px-[5%] bg-background-color font-jost pt-24 justify-between">
                <div className="w-[20%] ">
                    <AsideShop />
                </div>

                <div className="w-[75%]">
                    <MainShop/>
                </div>
            </div>
        </>
    )
}