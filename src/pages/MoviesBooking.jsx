import React from 'react'
import DatePicker from 'react-horizontal-datepicker';
import { Link } from 'react-router-dom';

const MoviesBooking = () => {
    let movie = {
        name: "Hindustani 2",
        date: new Date(),
        language: "Hindi",
        type: "Action/Drama",
        screens: [
            {
                name: "screen 1",
                location: "Rajhansh Cinemas , croma ,kamrej"
            },
            {
                name: "screen 2",
                location: "Rajhansh Cinemas , croma ,kamrej"
            },
            {
                name: "screen 3",
                location: "Rajhansh Cinemas , croma ,kamrej"
            },
        ]
    }
    const selectedDay = (val) => {
        console.log(val)
    };
    return (
        <>
            <section className="allAbout-movies">
                <div className="about-movie">
                    <div className="movie-head">
                        <h2>{movie.name} - {movie.language} </h2>
                        <h4>{movie.type}</h4>
                    </div>
                    <div className="movie-date">
                        <DatePicker getSelectedDay={selectedDay}
                            endDate={100}
                            selectDate={new Date("2020-04-30")}
                            labelFormat={"MMMM"}
                            color={"rgb(248, 68, 100)"}
                        />
                    </div>
                </div>
                <div className="movie-screen p-4 mt-4">
                    {
                        movie.screens.map((val, index) => {
                            let city = "surat"
                            return (
                                <div className='screen mb-3 d-flex justify-content-between align-items-center border-bottom' key={index}>
                                    <div>
                                        <h5>{val.name}</h5>
                                        <h6 className='mb-3'>{val.location}</h6>
                                    </div>
                                    <Link to={`/${city}/movies/${movie.name}/buyTicket/${val.name}`} className='ticket-btn rounded p-2 text-light fw-semibold'>Select</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default MoviesBooking