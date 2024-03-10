import React from "react"

function Order() {
    return (
        <>
            <div className='my-3 bg-[#FFF3E3] p-6 shadow-lg border'>
                <h3 className='uppercase font-bold text-xl text-center text-[#EE4D2D]'>Điền thông tin để mua ngay!</h3>
                <div className="space-y-3 p-6 flex flex-col items-center justify-center">
                    <div className="w-full">
                        <input className='px-3 py-2 w-full border focus:border-transparent outline-none text-sm' type="text" name="name" placeholder='Họ và tên'/>
                    </div>
                    <div className="w-full">
                        <input className='px-3 py-2 w-full border focus:border-transparent outline-none text-sm' type="text" name="phone" placeholder='Số điện thoại'/>
                    </div>
                    <div className="w-full">
                        <input className='px-3 py-2 w-full border focus:border-transparent outline-none text-sm' type="text" name="address" placeholder='Địa chỉ'/>
                    </div>
                    <div className="w-full">
                        <input className='px-3 py-2 w-full border focus:border-transparent outline-none text-sm' type="text" name="quantity" placeholder='Số lượng'/>
                    </div>
                </div>
                <div className="mt-2 text-center">
                    <a href='' type='button' className='bg-[#EE4D2D] text-white font-semibold px-3 py-2 rounded'>Mua ngay để nhận ưu đãi</a>
                </div>

            </div>
        </>

    )
}

export default Order
