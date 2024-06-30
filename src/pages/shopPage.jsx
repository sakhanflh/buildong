import { Link } from "react-router-dom";
import { Header } from "../components/fragments/Header";
import Layout from "../components/layouts/Layout";
import { FaChevronLeft } from "react-icons/fa";

export default function ShopPage(){
    return(
        <>
        <Header/>
        <Layout>
            <div className="text-2xl flex justify-center items-center gap-4 h-[600px] p-[5%]">
                <div className="w-96">
                    <h1 className="text-9xl text-neutral-300 font-bold mb-4">503</h1>
                    <h1 className="font-bold text-3xl">Oops...</h1>
                    <h1>sorry this page is under development, wait until next update</h1>
                    <Link to={'/'} className="text-base text-primary flex  items-center border-b-2 w-max gap-2 mt-5 font-medium">
                    <FaChevronLeft/>
                    Back to home
                    </Link>
                </div>
                <div className="w-96">
                    <img src="/svg/developer.svg" alt="" />
                </div>
            </div>
        </Layout>
        </>
    )
}