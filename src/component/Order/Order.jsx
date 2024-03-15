import React, {useEffect} from "react"
import {useMutationHooks} from "../../hooks/useMutationHooks";
import * as OrderService from "../../services/OrderService";
import {useNavigate} from "react-router-dom";

function Order(props) {
    const {productId} = props;
    const history = useNavigate();
    const mutationCreateOrder = useMutationHooks(async (data) => {
        const res = await OrderService.create(data);
        return res
    })
    const submitOrder = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const quantity = e.target.quantity.value;
        const data = {
            name,
            phone,
            address,
            quantity,
            productId
        }
        await mutationCreateOrder.mutate(data);
    }

    const {error, isLoading, isSuccess, isError} = mutationCreateOrder;
    useEffect(() => {
        if (!error && isSuccess) {
            history('/thank-you')
        }
    }, [isSuccess])
    return (
        <>
            <div className='my-3 bg-[#FFF3E3] p-6 shadow-lg border'>
                <h3 className='uppercase font-bold text-xl text-center text-[#EE4D2D]'>Điền thông tin để mua ngay!</h3>
                <div className="space-y-3 p-6 flex flex-col items-center justify-center">
                    <div className="w-full">
                        <input className='px-3 py-2 w-full border focus:border-transparent outline-none text-sm'
                               type="text" name="name" placeholder='Họ và tên' required/>
                    </div>
                    <div className="w-full">
                        <input className='px-3 py-2 w-full border focus:border-transparent outline-none text-sm'
                               type="text" name="phone" placeholder='Số điện thoại' required/>
                    </div>
                    <div className="w-full">
                        <input className='px-3 py-2 w-full border focus:border-transparent outline-none text-sm'
                               type="text" name="address" placeholder='Địa chỉ' required/>
                    </div>
                    <div className="w-full">
                        <input className='px-3 py-2 w-full border focus:border-transparent outline-none text-sm'
                               type="text" name="quantity" placeholder='Số lượng' required/>
                    </div>
                </div>
                <div className="mt-2 text-center">
                    <button className='bg-[#EE4D2D] text-white font-semibold px-3 py-2 rounded' onClick={submitOrder}>Mua
                        ngay để nhận ưu đãi
                    </button>
                </div>

            </div>
        </>

    )
}

export default Order
