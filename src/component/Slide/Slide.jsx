import React, {useEffect, useState, useRef} from "react";
import Slider from 'react-slick';
import CustomPrevArrow from "./CustomPrevArrow";
import CustomNextArrow from "./CustomNextArrow";
import './carousel.css';
import './slide.css'
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import BoltIcon from '@mui/icons-material/Bolt';
import BoxTime from "../BoxTime/BoxTime";
function Slide() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const settingsNav1 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>,
    };
    const settingsNav2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <div>
            <div className="mx-auto w-[420px]">
                {/*<h2>Slider Syncing (AsNavFor)</h2>*/}
                {/*<h4>First Slider</h4>*/}
                <div className="w-full">
                    <Slider {...settingsNav1} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                        <div>
                            <img className={"w-[420px] h-[400px] object-cover"}
                                 src={'https://w.ladicdn.com/s750x750/5c7362c6c417ab07e5196b05/ngon-2-20231115070435-rbkkw.jpg'}/>
                        </div>
                        <div>
                            <img className={"w-[420px] h-[400px] object-cover"}
                                 src="https://w.ladicdn.com/s750x750/5c7362c6c417ab07e5196b05/ngon-3-20231115070435-1xbhj.jpg"
                                 alt=""/>
                        </div>
                        <div>
                            <img className={"w-[420px] h-[400px] object-cover"}
                                 src="https://w.ladicdn.com/s750x750/5c7362c6c417ab07e5196b05/ngon-4-20231115070435-g36lc.jpg"
                                 alt=""/>
                        </div>
                        <div>
                            <img className={"w-[420px] h-[400px] object-cover"}
                                 src="https://w.ladicdn.com/s750x750/5e2112886defce3c604…w52-resize-jpeg_800_800-20231103073402-r7djk.jpeg"
                                 alt=""/>
                        </div>

                    </Slider>
                </div>
                {/*<div className="w-full bg-yellow-500 h-[100px] -mt-4">*/}

                {/*</div>*/}
                <div className="w-full grid grid-cols-2 relative -mt-4">
                    <div className="h-16 bg-[#A62100] p-2 relative">
                        <div className="ml-2">
                            <p className='text-xl text-white font-bold'><span><LoyaltyIcon/></span>199.000đ</p>
                        </div>
                        <div className="ml-1 flex items-center">
                            <p className='text-white line-through decoration-white'>299.000đ</p>
                            <div className="h-5 w-8 bg-red-500 ml-2"><p
                                className='text-center text-sm text-white font-semibold'>50%</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-16 bg-yellow-400 relative">
                        <div className="absolute w-[50%] -left-2 h-20 inset-0 bg-yellow-400 transform -skew-x-12"></div>
                        <div className="z-10 mx-auto absolute w-full">
                            <div className="text-center">
                                <p className='font-bold text-lg fade-in-out'>
                                    <span><BoltIcon/></span>Ưu đãi giờ vàng</p>
                            </div>
                            <div className="text-center flex items-center">
                                <p className=''>Kết thúc sau</p>
                                <BoxTime initialMinutes={3} initialSeconds={10} />
                            </div>

                        </div>
                    </div>

                </div>


                {/*<h4>Second Slider</h4>*/}
                {/*Slide ở dưới*/}
                <Slider
                    {...settingsNav2}
                    asNavFor={nav1}
                    ref={slider => (sliderRef2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    <div>
                        <img className="w-[120px] h-[120px] object-cover"
                             src={'https://w.ladicdn.com/s750x750/5c7362c6c417ab07e5196b05/ngon-2-20231115070435-rbkkw.jpg'}/>
                    </div>
                    <div>
                        <img className="w-[120px] h-[120px] object-cover"
                             src="https://w.ladicdn.com/s750x750/5c7362c6c417ab07e5196b05/ngon-3-20231115070435-1xbhj.jpg"
                             alt=""/>
                    </div>
                    <div>
                        <img className="w-[120px] h-[120px] object-cover"
                             src="https://w.ladicdn.com/s750x750/5c7362c6c417ab07e5196b05/ngon-4-20231115070435-g36lc.jpg"
                             alt=""/>
                    </div>
                    <div>
                        <img className="w-[120px] h-[120px] object-cover"
                             src="https://w.ladicdn.com/s750x750/5e2112886defce3c604…w52-resize-jpeg_800_800-20231103073402-r7djk.jpeg"
                             alt=""/>
                    </div>
                </Slider>

            </div>

        </div>
    );
}

export default Slide;
