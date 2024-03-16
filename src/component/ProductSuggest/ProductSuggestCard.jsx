import React from "react"
import {formatMoney} from "../../functions/helperFunctions";
import {Link} from "react-router-dom";

function ProductSuggestCard({id, image, name, originalPrice, salePrice, soldQuantity}) {
    return (
        <a href={"/product/" + id}>
            <div className="max-w-sm m-1 rounded overflow-hidden shadow-lg bg-white rounded-lg">
                <img className="w-[190px] h-[190px] object-cover" src={image} alt={name}/>
                <div className="px-6 py-2">
                    <div className="font-bold mb-2">{name}</div>
                </div>
                <div className="px-6 pt-1 pb-2 flex">
                <span
                    className="inline-block bg-red-200 rounded-full px-3 py-1 text-xs font-semibold text-red-700 mr-2 mb-2">Giảm giá</span>
                </div>
                <div className="px-6 pt-1 pb-2">
                    <span className="font-bold text-red-600 mr-1">{formatMoney(salePrice)}</span>
                    <span className="text-sm line-through text-gray-500">{originalPrice}</span>
                </div>
                <div className="px-6 pt-1 pb-2">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Đã bán {soldQuantity}</span>
                </div>
            </div>
        </a>
    );
}

export default ProductSuggestCard
