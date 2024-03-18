import React, {useEffect, useState, useRef} from "react";
import Slider from 'react-slick';
import CustomPrevArrow from "./CustomPrevArrow";
import CustomNextArrow from "./CustomNextArrow";
import './carousel.css';
import './slide.css'
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import BoltIcon from '@mui/icons-material/Bolt';
import BoxTime from "../BoxTime/BoxTime";
import {formatMoney, getPriceSale} from "../../functions/helperFunctions";
function Slide(props) {
    const {data} = props;
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
            <div className="mx-auto w-full">
                <div className="w-full">
                    <Slider {...settingsNav1} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                        {
                            data?.urlList?.map((item) => {
                              return(
                                  <div>
                                      <img className={"w-full max-w-[475px] h-[400px] object-cover"}
                                           src={item}/>
                                  </div>
                              )
                            })
                        }
                    </Slider>
                </div>

                <div className="w-full xxs:grid grid-cols-2 relative -mt-4">
                    <div className="h-16 bg-[#A62100] p-2 relative">
                        <div className="ml-2">
                            <p className='text-xl text-white font-bold text-center xxs:text-start'><span><LoyaltyIcon/></span>{formatMoney(data?.price)}</p>
                        </div>
                        <div className="ml-1 flex items-center justify-center xxs:justify-start">
                            <p className='text-white line-through decoration-white'>{getPriceSale(data?.price, data?.percentSale)}</p>
                            <div className="h-5 w-8 bg-red-500 ml-2"><p
                                className='text-center text-sm text-white font-semibold'>{data?.percentSale}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-16 bg-yellow-400 relative">
                        <div className="absolute w-[50%] -left-2 h-20 inset-0 bg-yellow-400 transform xxs:-skew-x-12"></div>
                        <div className="z-10 mx-auto absolute w-full">
                            <div className="text-center">
                                <p className='font-bold text-lg fade-in-out'>
                                    <span><BoltIcon/></span>Ưu đãi giờ vàng</p>
                            </div>
                            <div className="text-center flex items-center justify-center">
                                <p className=''>Kết thúc sau</p>
                                <BoxTime initialMinutes={48} initialSeconds={39} />
                            </div>

                        </div>
                    </div>

                </div>

                <Slider
                    {...settingsNav2}
                    asNavFor={nav1}
                    ref={slider => (sliderRef2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {
                        data?.urlList?.map((item) => {
                            return(
                                <div>
                                    <img className="w-[120px] h-[120px] object-cover"
                                         src={item}/>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Slide;
