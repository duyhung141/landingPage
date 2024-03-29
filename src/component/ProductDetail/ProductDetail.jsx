import React from 'react'

function ProductDetail(props) {
    const {data} = props;
    const productImgs = data?.urlList;
    return (
        <>
            <div className="mt-2">
                <h2 className='font-bold uppercase text-lg my-1'>Chi tiết sản phẩm</h2>
                <div className="">
                    {/*Product Image*/}
                    <div className="">
                        {productImgs?.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={'product image - ' + index}
                                className="h-full w-full"
                            />
                        ))}
                    </div>
                    {/*EndProduct Image*/}

                    {/*Product Info*/}
                    <div className="mt-2">
                        <h2 className='font-bold uppercase text-lg my-1'>Mô tả sản phẩm</h2>
                        <article className='text-pretty'>
                            <p dangerouslySetInnerHTML={{ __html: data?.description }}></p>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
