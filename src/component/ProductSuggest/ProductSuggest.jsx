import React from "react"
import ProductSuggestCard from "./ProductSuggestCard";
import {getPriceSale} from "../../functions/helperFunctions";
import Slider from "react-slick";
import {useParams} from "react-router-dom";

function ProductSuggest(props) {
    const data = props?.data;
    const {id} = useParams()
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    const products = data
        ?.filter(product => product?._id !== id)
        .map(product => ({
            id: product?._id,
            name: product?.name,
            image: product?.urlList[0],
            price: product?.price,
            salePrice: getPriceSale(product?.price, product?.percentSale),
            soldQuantity: "26.8k"
        }));
    // console.log(products, id)
    return (
        <>
            {/*<div className="grid grid-cols-2">*/}
            <div className="slider-container">
                <Slider {...settings}>
                    {products?.map((product, index) => (
                        <ProductSuggestCard
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            originalPrice={product.salePrice}
                            salePrice={product.price}
                            soldQuantity={product.soldQuantity}
                        />
                    ))}
                </Slider>

            </div>
        </>
    )
}

export default ProductSuggest
