import React from "react"
import StarIcon from '@mui/icons-material/Star';
import logo from '../../assets/img/logo.webp'
function InfoShop(){
    const totalProducts= 126;
    const totalSoldProducts= '3427';
    return(
        <>
            <div className="mt-1 p-2">
                <div className="flex items-center gap-2">
                    <img
                        src={logo}
                        // src='https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lqh91p0t6ypjcc_tn'
                        alt={'Hải nam'}
                        className="h-16 w-16 rounded-full"/>
                    <div className="font-semibold">
                        <p className='font-bold uppercase text-lg'>Anh Watch Luxury</p>
                        <p className="text-yellow-500 text-sm flex items-center"><StarIcon/> <span className='text-black font-semibold'>4.9</span></p>
                    </div>
                </div>
                
                <div className="mt-2 grid grid-cols-3">
                    <div className="text-[#A6A6A6] text-xs border-r m-2">
                        <p className='text-black font-semibold text-base'>{totalProducts}</p>
                        Sản phẩm
                    </div>
                    <div className="text-[#A6A6A6] text-xs border-r m-2">
                        <p className='text-black font-semibold text-base'>{totalSoldProducts}</p>
                        Đã bán
                    </div>
                    <div className="text-[#A6A6A6] text-xs m-2">
                        <p className='text-black text-base flex items-start font-semibold'>100%<span className='ml-1 bg-red-200 text-red-500 text-xs rounded-sm'>Cao</span></p>
                        Phản hồi trong 1 giờ
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoShop
