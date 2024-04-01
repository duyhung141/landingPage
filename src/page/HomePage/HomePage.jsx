import React, {useEffect, useRef, useState} from "react"
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
import './homepage.css'

function HomePage() {
    const {id} = useParams();
    const [products, setProducts] = useState();
    const [product, setProduct] = useState();
    const [reviews, setReviews] = useState();
    const spaceRightWindow = Math.abs(window.innerWidth - 500) / 2;
    const [showButton, setShowButton] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const orderRef = useRef(null);
    const hideButtonTimeoutRef = useRef(null);
    const fadeOutTimeoutRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            setShowButton(true);
            setOpacity(1); // Reset opacity khi bắt đầu cuộn

            if (hideButtonTimeoutRef.current) {
                clearTimeout(hideButtonTimeoutRef.current);
            }

            if (fadeOutTimeoutRef.current) {
                clearTimeout(fadeOutTimeoutRef.current);
            }

            hideButtonTimeoutRef.current = setTimeout(() => {
                // Bắt đầu giảm opacity
                setOpacity(0);

                // Sau khi opacity giảm xuống, ẩn nút sau 0.5 giây (thời gian cho transition)
                fadeOutTimeoutRef.current = setTimeout(() => {
                    setShowButton(false);
                }, 500); // Đồng bộ với thời gian transition

            }, 2000); // Thời gian trước khi bắt đầu mờ dần
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            clearTimeout(hideButtonTimeoutRef.current);
            clearTimeout(fadeOutTimeoutRef.current);
        };
    }, []);

    const goToComponent = () => {
        orderRef.current?.scrollIntoView({behavior: 'smooth'});
    };


    useEffect(() => {
        const fetchData = async () => {
            const product = await ProductService.show(id);
            setProduct(product?.data);

            const products = await ProductService.getAll();
            setProducts(products?.data);

            const reviews = await ReviewService.show(id);
            setReviews(reviews);
        }
        fetchData();

    }, [id]);
    return (
        <>
            {product &&
                <>
                    <div className="mx-auto w-full max-w-[475px] relative">
                        <Slide data={product}/>
                        <HeaderTiktok data={product}/>
                        <Review data={reviews}/>
                        <InfoShop/>
                        <ProductDetail data={product}/>
                        <div ref={orderRef} className="my-10">
                            <Order productId={id} productPrice={product?.price}/>
                        </div>
                        <ProductSuggest data={products}/>
                        <button
                            onClick={goToComponent}
                            style={{right: spaceRightWindow, display: showButton ? 'block' : 'none', opacity: opacity}}
                            className="fixed bottom-10 mx-auto bg-[#EE4D2D] hover:bg-[#EE4D2D]/80 text-white font-bold py-2 px-4 rounded fade-button"
                        >
                            Mua ngay
                        </button>


                    </div>
                </>
            }
        </>
    )
}

export default HomePage
