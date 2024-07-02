import { Link } from "react-router-dom";
import { Header } from "../components/fragments/Header";
import Layout from "../components/layouts/Layout";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SideFilter from "../components/fragments/SideFilter";
import { FiChevronDown } from "react-icons/fi";
import ActiveFilter from "../components/layouts/construction/ActiveFilter";
import SkeletonLoading from "../components/fragments/SkeletonLoading";
import Card from "../components/fragments/Card";
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