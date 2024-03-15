import React, {useEffect, useState} from "react"
import Slide from "../../component/Slide/Slide";
import HeaderTiktok from "../../component/HeaderTiktok/HeaderTiktok";
import Review from "../../component/Review/Review";
import InfoShop from "../../component/InfoShop/InfoShop";
import ProductDetail from "../../component/ProductDetail/ProductDetail";
import ProductSuggest from "../../component/ProductSuggest/ProductSuggest";
import Order from "../../component/Order/Order";
import * as ProductService from "../../services/ProductService";
import * as ReviewService from "../../services/ReviewService";
import {useMutationHooks} from "../../hooks/useMutationHooks";
import {useParams} from "react-router-dom";

function HomePage() {
    const {id} = useParams();
    const [products, setProducts] = useState();
    const [product, setProduct] = useState();
    const [reviews, setReviews] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const product = await ProductService.show(id);
            setProduct(product?.data);

            const products = await ProductService.getAll();
            setProducts(products?.data);

            const reviews = await ReviewService.getAll();
            setReviews(reviews);
        }
        fetchData();

    }, [id]);
    return (
        <>
            <div className="mx-auto w-[420px] p-3">
                <Slide data={product}/>
                <HeaderTiktok data={product}/>
                <Review data={reviews}/>
                <InfoShop/>
                <ProductDetail data={product}/>
                <Order productId={id}/>
                <ProductSuggest data={products}/>
            </div>
        </>
    )
}

export default HomePage
