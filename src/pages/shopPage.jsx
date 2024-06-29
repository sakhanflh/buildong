import { Header } from "../components/fragments/Header";
import SideFilter from "../components/fragments/SideFilter";
import Layout from "../components/layouts/Layout";
import Index from "../components/layouts/shop/Index";

export default function ShopPage(){
    return(
        <>
        <Header/>
        <Layout>
            <Index/>
        </Layout>
        </>
    )
}