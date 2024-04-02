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
        // responsive: [
        //     {
        //         breakpoint: 374,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     }
        // ]
    };
    const products = data
        ?.filter(product => product?._id !== id)
        .map(product => ({
            id: product?._id,
            name: product?.name,
            image: product?.urlList[0],
            price: product?.price,
            salePrice: product?.priceSale,
            soldQuantity: product?.soldQuantity
        }));
    // console.log(products, id)
    return (
        <>
            {/*<div className="grid grid-cols-2">*/}
            <div className="max-w-[475px] w-full">
                <Slider {...settings}>
                    {products?.map((product, index) => (
                        <ProductSuggestCard
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            originalPrice={product.price}
                            salePrice={product.salePrice}
                            soldQuantity={product.soldQuantity}
                        />
                    ))}
                </Slider>

            </div>
        </>
    )
}

export default ProductSuggest
