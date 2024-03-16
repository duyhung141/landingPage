import React, {useEffect, useState} from "react"
import {useMutationHooks} from "../../hooks/useMutationHooks";
import * as OrderService from "../../services/OrderService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import Toast from "../Toast/Toast";
import {isValidPhoneNumber} from "../../functions/helperFunctions";

function Order(props) {
    const {productId, productPrice} = props;
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [quantity, setQuantity] = useState();
    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    const toastId = React.useRef(null);

    const history = useNavigate();
    const mutationCreateOrder = useMutationHooks(async (data) => {
        const res = await OrderService.create(data);
        return res
    })
    const submitOrder = async (e) => {
        e.preventDefault();
        if(!name || !phone || !address || !quantity) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                    "Vui lòng điền đầy đủ thông tin",
                    Toastobjects
                );
            }
            return;
        }
        if (!isValidPhoneNumber(phone)) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                    "Số điện thoại không hợp lệ",
                    Toastobjects
                );
            }
            return;
        }
        const data = {
            customer: name,
            phoneCustomer: phone,
            addressCus: address,
            quantity: quantity,
            products: productId,
            totalPrice: (productPrice * quantity)
        };
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
            <Toast/>
            <div className='my-3 bg-[#FFF3E3] p-6 shadow-lg border'>
                <h3 className='uppercase font-bold text-xl text-center text-[#EE4D2D]'>Điền thông tin để mua ngay!</h3>
                <div className="space-y-3 p-6 flex flex-col items-center justify-center">
                    <div className="w-full">
                        <input className='px-3 py-2 w-full border focus:border-transparent outline-none text-sm'
                               onChange={(e) => setName(e.target.value)}
                               type="text" name="name" placeholder='Họ và tên' required/>
                    </div>
                    <div className="w-full">
                        <input className='px-3 py-2 w-full border focus:border-transparent outline-none text-sm'
                               onChange={(e) => setPhone(e.target.value)}
                               type="text" name="phone" placeholder='Số điện thoại' required/>
                    </div>
                    <div className="w-full">
                        <input className='px-3 py-2 w-full border focus:border-transparent outline-none text-sm'
                               onChange={(e) => setAddress(e.target.value)}
                               type="text" name="address" placeholder='Địa chỉ' required/>
                    </div>
                    <div className="w-full">
                        <input className='px-3 py-2 w-full border focus:border-transparent outline-none text-sm'
                               onChange={(e) => setQuantity(e.target.value)}
                               type="number" name="quantity" placeholder='Số lượng' required/>
                    </div>
                </div>
                <div className="mt-2 text-center">
                    <button className='bg-[#EE4D2D] text-white font-semibold px-3 py-2 rounded'
                            onClick={submitOrder}>
                        Mua ngay để nhận ưu đãi
                    </button>
                </div>

            </div>
        </>

    )
}

export default Order
