import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { MovieCard } from './MovieCard';

const MovieCarousel = () => {
    let moviesImages = [
        {
            title: "Hindusatani 2",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NS43LzEwICA0LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00402649-gfrrlpdvkp-portrait.jpg",
            _id: "1",
            moviesRating: 8.5,
            type: "Action/Drama/Thriller"
        },
        {
            title: "Hindusatani 2",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NS43LzEwICA0LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00402649-gfrrlpdvkp-portrait.jpg",
            _id: "2",
            moviesRating: 8.5,
            type: "Action/Drama/Thriller"
        },
        {
            title: "Hindusatani 2",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NS43LzEwICA0LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00402649-gfrrlpdvkp-portrait.jpg",
            _id: "3",
            moviesRating: 8.5,
            type: "Action/Drama/Thriller"
        },
        {
            title: "Hindusatani 2",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NS43LzEwICA0LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00402649-gfrrlpdvkp-portrait.jpg",
            _id: "4",
            moviesRating: 8.5,
            type: "Action/Drama/Thriller"
        },
        {
            title: "Hindusatani 2",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NS43LzEwICA0LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00402649-gfrrlpdvkp-portrait.jpg",
            _id: "5",
            moviesRating: 8.5,
            type: "Action/Drama/Thriller"
        },
        {
            title: "Hindusatani 2",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NS43LzEwICA0LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00402649-gfrrlpdvkp-portrait.jpg",
            _id: "6",
            moviesRating: 8.5,
            type: "Action/Drama/Thriller"
        },
    ]
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    moviesImages.map((val, index) => {
                        let city = "surat"
                        return (
                            <>
                                <SwiperSlide key={index}>
                                    <MovieCard title={val.title} image={val.image} _id={val._id} moviesRating={val.moviesRating} type={val.type} />
                                    <Link to={`/${city}/movies/${val.title}`} className='ms-3'>more</Link>
                                </SwiperSlide>
                            </>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default MovieCarousel