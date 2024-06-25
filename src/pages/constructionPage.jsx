import Layout from "../components/layouts/Layout";
import Index from "../components/layouts/construction/Index";
import {Footer} from "../components/layouts/Footer"
import { Header } from "../components/fragments/Header";

export default function ConstructionPage(){
    return(
        <>
        <Header/>
        <Layout>
            <Index/>
        </Layout>
        <Footer/>
        </>
    )
}