import React from "react"
import StarIcon from '@mui/icons-material/Star';

function HeaderTiktok(props) {
    const {data} = props;
    return (
        <>
            <div className="">
                <div className="flex items-center">
                    <h1 className='uppercase font-bold text-2xl ml-1'>
                        <span
                            className='w-[100px] h-fit mr-1 p-2 bg-[#FF2B79] rounded-xl text-xs text-white font-semibold italic'>Sale sốc!!!</span>
                        {data?.name}
                    </h1>
                </div>
                <div className="flex items-center justify-between mt-1">
                    <div className="flex items-end">
                        <h3><StarIcon style={{color: "#FFDE59"}}/><span className='font-semibold'>4.9/5</span></h3>
                        <p className='ml-1 text-gray-400'>| Đã bán <span
                            className='text-black font-semibold'>954</span></p>
                    </div>
                    <div className="flex items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" preserveAspectRatio="none"
                             viewBox="0 0 24 24" className="" fill="rgba(92, 225, 230, 1)">
                            <path
                                d="M3,4A2,2 0 0,0 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8H17V4M10,6L14,10L10,14V11H4V9H10M17,9.5H19.5L21.47,12H17M6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z"></path>
                        </svg>
                        <span className="ml-1 font-semibold" style={{color: "rgba(92, 225, 230, 1)"}}>Miễn phí vận chuyển</span>
                    </div>
                </div>

                <div className="text-[#9D7132] bg-[#F9F5F3] h-10 flex items-center gap-2 p-2">
                    <div className="flex items-center gap-1 truncate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="none"
                             viewBox="0 0 1664 1896.0833" className="" fill="rgba(157, 113, 50, 1)">
                            <path
                                d="M458 883q-74-162-74-371H128v96q0 78 94.5 162T458 883zm1078-275v-96h-256q0 209-74 371 141-29 235.5-113t94.5-162zm128-128v128q0 71-41.5 143t-112 130-173 97.5T1122 1023q-42 54-95 95-38 34-52.5 72.5T960 1280q0 54 30.5 91t97.5 37q75 0 133.5 45.5T1280 1568v64q0 14-9 23t-23 9H416q-14 0-23-9t-9-23v-64q0-69 58.5-114.5T576 1408q67 0 97.5-37t30.5-91q0-51-14.5-89.5T637 1118q-53-41-95-95-113-5-215.5-44.5t-173-97.5-112-130T0 608V480q0-40 28-68t68-28h288v-96q0-66 47-113t113-47h576q66 0 113 47t47 113v96h288q40 0 68 28t28 68z"></path>
                        </svg>
                        <span className='font-bold '>Sản phẩm hàng đầu</span>
                    </div>
                    <div className="truncate w-[50%]">
                        <span className='w-full'>{data?.name}</span>
                    </div>
                </div>

                <div className="h-10 flex items-center justify-around gap-2 m-2 text-xs">
                    <div className="flex items-center gap-1 truncate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" preserveAspectRatio="none"
                             viewBox="0 0 1920 1896.0833" className="" fill="#FED169">
                            <path
                                d="M768 1152h384v-96h-128V608H910L762 745l77 80q42-37 55-57h2v288H768v96zm512-256q0 70-21 142t-59.5 134-101.5 101-138 39-138-39-101.5-101-59.5-134-21-142 21-142 59.5-134T822 519t138-39 138 39 101.5 101 59.5 134 21 142zm512 256V640q-106 0-181-75t-75-181H384q0 106-75 181t-181 75v512q106 0 181 75t75 181h1152q0-106 75-181t181-75zm128-832v1152q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V320q0-26 19-45t45-19h1792q26 0 45 19t19 45z"></path>
                        </svg>
                        <span className=''>Thanh toán bảo mật</span>
                    </div>
                    <div className="flex items-center gap-1 truncate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" preserveAspectRatio="none"
                             viewBox="0 0 1792 1896.0833" className="" fill="rgba(254, 209, 105, 1)">
                            <path
                                d="M640 896q0-53-37.5-90.5T512 768t-90.5 37.5T384 896t37.5 90.5T512 1024t90.5-37.5T640 896zm384 0q0-53-37.5-90.5T896 768t-90.5 37.5T768 896t37.5 90.5T896 1024t90.5-37.5T1024 896zm384 0q0-53-37.5-90.5T1280 768t-90.5 37.5T1152 896t37.5 90.5 90.5 37.5 90.5-37.5T1408 896zm384 0q0 174-120 321.5t-326 233-450 85.5q-110 0-211-18-173 173-435 229-52 10-86 13-12 1-22-6t-13-18q-4-15 20-37 5-5 23.5-21.5T198 1654t23.5-25.5 24-31.5 20.5-37 20-48 14.5-57.5T313 1382q-146-90-229.5-216.5T0 896q0-174 120-321.5t326-233T896 256t450 85.5 326 233T1792 896z"></path>
                        </svg>
                        <span className=''>Đội ngũ hỗ trợ 24/7</span>
                    </div>
                </div>

                <div className="h-16 m-2 border-b ">
                    <h5 className='font-bold'>Hình thức thanh toán</h5>
                    <p className='mt-1 text-sm text-[#A6A6A6]'><span
                        className='mr-1 bg-[#4FAB7D] p-1 rounded text-white font-medium text-xs'>COD</span>Thanh toán
                        bằng tiền mặt (COD)</p>
                </div>

                <div className="h-24 m-2 border-b">
                    <h5 className='font-bold'>Vận chuyển</h5>
                    <p className='mt-1'>
                        <span className='mr-1 text-[#5CE1E6] border border-[#5CE1E6] py-1 px-2 font-medium text-xs'>Voucher giảm phí vẫn chuyển</span>
                        Miễn phí ship toàn quốc. Áp dụng cho mọi đơn hàng
                    </p>
                </div>

                <div className="h-16 m-2 border-b">
                    <h5 className='font-bold'>Chính sách đổi trả</h5>
                    <p className='mt-1 text-xs text-[#A6A6A6]'>
                        Trả hàng trong vòng 7 ngày - Hủy đơn dễ dàng - Hoàn toàn miễn phí
                    </p>
                    {/*<a href="" type='button' className='mt-2 bg-[#F22666] uppercase text-white font-bold px-4 py-3 rounded'>Mua ngay</a>*/}
                </div>
            </div>
        </>
    )
}

export default HeaderTiktok
