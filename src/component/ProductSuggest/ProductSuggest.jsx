import React from "react"
import ProductSuggestCard from "./ProductSuggestCard";

function ProductSuggest() {
    const products = [
        {
            image: "https://down-vn.img.susercontent.com/file/vn-11134208-7r98o-ln9xao8mny4a50",
            name: "Sáp Dưỡng Ẩm Vaseline 100ml",
            description: "Mô tả ngắn gọn về sản phẩm.",
            originalPrice: "115000",
            salePrice: "106000",
            soldQuantity: "26.8k"
        },
        {
            image: "https://down-vn.img.susercontent.com/file/vn-11134208-7r98o-ln9xao8mny4a50",
            name: "Sáp Dưỡng Ẩm Vaseline 100ml",
            description: "Mô tả ngắn gọn về sản phẩm.",
            originalPrice: "115000",
            salePrice: "105000",
            soldQuantity: "26.8k"
        },
        {
            image: "https://down-vn.img.susercontent.com/file/vn-11134208-7r98o-ln9xao8mny4a50",
            name: "Sáp Dưỡng Ẩm Vaseline 100ml",
            description: "Mô tả ngắn gọn về sản phẩm.",
            originalPrice: "115000",
            salePrice: "177000",
            soldQuantity: "26.8k"
        },
        {
            image: "https://down-vn.img.susercontent.com/file/vn-11134208-7r98o-ln9xao8mny4a50",
            name: "Sáp Dưỡng Ẩm Vaseline 100ml",
            description: "Mô tả ngắn gọn về sản phẩm.",
            originalPrice: "115000",
            salePrice: "128000",
            soldQuantity: "26.8k"
        }
    ];
    return (
        <>
            <div className="grid grid-cols-2">
                {products?.map((product, index) => (
                    <ProductSuggestCard
                        image={product.image}
                        name={product.name}
                        originalPrice={product.originalPrice}
                        salePrice={product.salePrice}
                        soldQuantity={product.soldQuantity}
                    />
                ))}
            </div>
        </>
    )
}

export default ProductSuggest
