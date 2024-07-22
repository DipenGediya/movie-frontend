import React from 'react'
import { Link, useParams } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { CastCard, MovieCard } from '../components/moviesCarousel/MovieCard';


const MoviePage = () => {
    let { id } = useParams();

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

    let moviesData = {
        backgroundImage: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/hindustani-2-et00402649-1720515789.jpg",
        image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hindustani-2-et00402649-1720515789.jpg",
        title: "Hindustani 2",
        rating: "8.5",
        halls: [
            "2D",
            "3D"
        ],
        language: [
            "English",
            "Hindi",
        ],
        duration: "3h",
        type: "Action/Drama/Thriller",
        relaseDate: "30/7/204",
        cast: [
            {
                _id: "1",
                name: "Kamal Hasan",
                role: "Actor",
                image: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kamal-haasan-2886-24-03-2017-17-54-38.jpg"
            },
            {
                _id: "1",
                name: "Kamal Hasan",
                role: "Actor",
                image: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kamal-haasan-2886-24-03-2017-17-54-38.jpg"
            }
        ],
        crew: [
            {
                _id: "1",
                name: "Kamal Hasan",
                role: "Actor",
                image: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shankar-shanmugham-1052281-24-03-2017-17-34-41.jpg"
            },
            {
                _id: "1",
                name: "Kamal Hasan",
                role: "Actor",
                image: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shankar-shanmugham-1052281-24-03-2017-17-34-41.jpg"
            },
        ],
        about: "In this sequel to the 1996 film Hindustani, Kamal Hassan reprises his role as Senapathy, an ex-freedom fighter turned vigilante who fights against corruption. Senapathy returns to the country to aid a young man who has been exposing corrupt politicians in the country through videos on the internet."

    }

    let city = "surat"
    return (
        <>
            <div className="moivePage">
                <div className="movie-data py-4" style={{ background: ` linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%),url(${moviesData.backgroundImage})`, backgroundPosition: 'center', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-4">
                                        <img src={moviesData.image} className='rounded' alt="" />
                                    </div>
                                    <div className="col-5 text-light fw-semibold ps-3">
                                        <div className="title">
                                            <h1>{moviesData.title}</h1>
                                        </div>
                                        <div className="rating-section d-flex
                                    justify-content-between">
                                            <div className="rating">
                                                <i class="fa-solid fa-star pe-2"></i>{moviesData.rating}/10
                                            </div>
                                            <div className="rate">
                                                <button>Rate Now</button>
                                            </div>
                                        </div>
                                        <div className="theater mt-3 d-flex">
                                            <p>
                                                {moviesData.halls.map((val, index) => {
                                                    return (
                                                        <>
                                                            <span key={index} className='pe-2'>{val}</span>
                                                        </>
                                                    )
                                                })}
                                            </p>
                                            <p className='ms-2'>
                                                {moviesData.language.map((val, index) => {
                                                    return (
                                                        <>
                                                            <span className='pe-2'>{val}</span>
                                                        </>
                                                    )
                                                })}
                                            </p>
                                        </div>
                                        <div className="duration mb-5 d-flex justify-content-between">
                                            <div className="dur">
                                                {moviesData.duration}
                                            </div>
                                            <div className="type">
                                                {moviesData.type}
                                            </div>
                                            <div className="relase-date">
                                                {moviesData.relaseDate}
                                            </div>
                                        </div>
                                        <Link to={`/${city}/movies/${moviesImages.title}/buyTicket`} className='ticket-btn rounded p-2 text-light fw-semibold border-0'>Book Tickets</Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                                <div className="share d-flex text-light justify-content-between align-items-center">
                                    <i class="fa-solid fa-share-nodes text-light"></i>
                                    <p className='mb-0'>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="movie-cast bg-light">
                        <h3 className='fw-bold'>About The Movies</h3>
                        <p>{moviesData.about}</p>
                        <hr />
                        <div className="cast">
                            <h3 className="fw-bold">Cast</h3>
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
                                    moviesData.cast.map((val, index) => {
                                        return (
                                            <>
                                                <SwiperSlide key={index}>
                                                    <CastCard name={val.name} image={val.image} role={val.role} />
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                        <hr />
                        <div className="crew">
                            <h3 className="fw-bold">Crew</h3>
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
                                    moviesData.crew.map((val, index) => {
                                        return (
                                            <>
                                                <SwiperSlide key={index}>
                                                    <CastCard name={val.name} image={val.image} role={val.role} />
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                        <hr />
                        <div className="more-movie">
                            <h3 className='fw-bold'>You Also Like This</h3>
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
                                        return (
                                            <>
                                                <SwiperSlide key={index}>
                                                    <MovieCard title={val.title} image={val.image} _id={val._id} moviesRating={val.moviesRating} type={val.type} />
                                                    <Link to={`/${val._id}`}>more</Link>
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MoviePage