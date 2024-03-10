import React from "react"
import Slide from "../../component/Slide/Slide";
import HeaderTiktok from "../../component/HeaderTiktok/HeaderTiktok";
import Review from "../../component/Review/Review";
import InfoShop from "../../component/InfoShop/InfoShop";
import ProductDetail from "../../component/ProductDetail/ProductDetail";
import ProductSuggestCard from "../../component/ProductSuggest/ProductSuggestCard";
import ProductSuggest from "../../component/ProductSuggest/ProductSuggest";
import Order from "../../component/Order/Order";

function HomePage(){
    return (
        <>
            <div className="mx-auto w-[420px] p-3">
                <Slide/>
                <HeaderTiktok/>
                <Review/>
                <InfoShop/>
                <ProductDetail/>
                <Order/>
                <ProductSuggest/>
            </div>
        </>
    )
}

export default HomePage
