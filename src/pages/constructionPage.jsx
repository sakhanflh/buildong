import Layout from "../components/layouts/Layout";
import { Navbar } from "../components/layouts/Navbar";
import Index from "../components/layouts/construction/Index";

export default function ConstructionPage(){
    return(
        <>
        <Navbar/>
        <Layout>
            <Index/>
        </Layout>
        </>
    )
}