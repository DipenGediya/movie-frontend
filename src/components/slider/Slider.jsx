import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Slider = () => {
    let sliderImages = [
        {
            image: "https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg"
        },
        {
            image: "https://assets-in.bmscdn.com/promotions/cms/creatives/1720701337708_keyvisual1240x300.jpg"
        }
    ]
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {
                    sliderImages.map((val, index) => {
                        return (
                            <>
                                <SwiperSlide key={index}>
                                    <img src={val.image} className='w-100' />
                                </SwiperSlide>
                            </>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default Slider