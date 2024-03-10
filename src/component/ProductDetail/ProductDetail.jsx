import React from 'react'

function ProductDetail() {
    const productImgs = [
        'https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lqh91p0t6ypjcc_tn',
        'https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lqh91p0t6ypjcc_tn',
        'https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lqh91p0t6ypjcc_tn',
        'https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lqh91p0t6ypjcc_tn',
        'https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lqh91p0t6ypjcc_tn',
    ]
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
                                alt={'product'}
                                className="h-full w-full"
                            />
                        ))}
                    </div>
                    {/*EndProduct Image*/}

                    {/*Product Info*/}
                    <div className="mt-2">
                        <h2 className='font-bold uppercase text-lg my-1'>Mô tả sản phẩm</h2>
                        <h3 className="text-lg font-semibold">Bột giặt OMO 3.6kg</h3>
                        <article className='text-pretty'>
                            Cao
                            LEWD LADY SHOP
                            4.9
                            128862
                            126
                            100%
                            82%
                            Mặt hàngĐã bánTỷ lệ trả lời 24 giờXuất kho trong 48hThông tin sản phẩm
                            Xem thêm
                            Cửa hà...
                            Trò chu...
                            THÔNG SỐ KỸ THUẬT
                            - Dòng sản phẩm: loa bluetooth mini
                            - Bluetooth: v5.0
                            - Khoảng cách kết nối: 10m
                            - Nguồn: Type-C 5V
                            *HIỆU ỨNG ĐÈN LED
                            - Tự động đổi màu theo giai điệu của âm nhạc
                            - Ngoài ra nhiều chế độ đèn led với màu sắc ma mị khác nhau để có thể thay đổi và lựa chọn
                            *ÂM THANH VÒM 3600
                            -MÀNG RUNG CÔNG SUẤT CAO
                            -Tăng chất lượng âm thanh sống động
                        </article>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductDetail
