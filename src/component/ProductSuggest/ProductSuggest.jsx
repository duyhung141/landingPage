import React from "react"
import ProductSuggestCard from "./ProductSuggestCard";
import {getPriceSale} from "../../functions/helperFunctions";

function ProductSuggest(props) {
    const data = props?.data;
    const products = data?.map((product) => ({
        id: product?._id,
        name: product?.name,
        image: product?.urlList[0],
        price: product?.price,
        salePrice: getPriceSale(product?.price, product?.percentSale),
        soldQuantity: "26.8k"
    }));
    return (
        <>
            <div className="grid grid-cols-2">
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
            </div>
        </>
    )
}

export default ProductSuggest
