import { Header } from "../components/fragments/Header";
import Layout from "../components/layouts/Layout";
import { Index } from "../components/layouts/cart/Index";

export default function CartPage() {
    return (
        <>
        <Header/>
            <Layout>
                <Index/>
            </Layout>
        </>
    )
}