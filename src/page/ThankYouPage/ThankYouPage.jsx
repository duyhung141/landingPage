import React from "react";
import logo from "../../assets/img/logo.webp";
import './ThankYou.css';
import FacebookIcon from '../../assets/img/icons8-facebook-48.svg';
import ShopeeIcon from '../../assets/img/icons8-shopee-48.svg';
import Google from '../../assets/img/icons8-google.svg';

function ThankYouPage() {
    return (
        <>
            <div className="mx-auto w-[420px] bg-[#E86930]">
                <div className="p-4">
                    <img className='mx-auto' src="https://w.ladicdn.com/57b167c9ca57d39c18a1c57c/icon-gio-hang.png"
                         alt="shopping-icon"/>
                </div>
                <div className="text-center text-white p-4 space-y-2">
                    <h1 className='text-3xl font-bold uppercase skewed-text'>THANK YOU!!!</h1>
                    <h3 className=''>Cảm ơn bạn đã mua hàng và tin tưởng Anh Watch!</h3>
                    <p>Hãy đợi chiếc đồng hồ bling bling đến với bạn trong vài ngày tới ♥♥♥</p>
                    <p>Anh Watch sẽ luôn đợi bạn ở những sản phẩm tiếp theo</p>
                </div>
            </div>
            <footer className='bg-[#B06930] w-[420px] p-4 mx-auto text-white font-semibold'>
                <div className="flex items-center gap-2 py-1">
                    <div className="">
                        <img className='w-[150px] rounded-lg object-cover'
                             src={logo}
                             alt=""/>
                    </div>
                    <div className="space-y-1">
                        <p>Thông Tin Liên Hệ Hotline/ Zalo: 𝟎𝟗𝟔𝟔𝟓𝟔𝟐𝟒𝟎𝟒</p>
                        <p>Địa Chỉ: 52 Thanh Nhàn. Quân Hai Bà Trưng. Hà Nội</p>
                    </div>
                </div>
            </footer>
            <div className="my-2 w-[420px] mx-auto border-b">
                <div className="flex justify-center gap-2">
                    <div className="">
                        <a href="https://www.facebook.com/anhwatchchuyendongholuxurycaocap" target="_blank">
                            <img className="rounded-full" src={FacebookIcon}/>
                        </a>
                    </div>
                    <div className="">
                        <a href="https://shopee.vn/anhwatch_1998" target='_blank'>
                            <img className="rounded-full" src={ShopeeIcon}/>
                        </a>
                    </div>
                    <div className="">
                        <img className="rounded-full" src={Google}/>
                    </div>
                </div>
                <h2 className='my-2 text-center text-lg'>Kết nối với chúng tôi trên cộng đồng</h2>
            </div>

        </>
    );
}

export default ThankYouPage;
