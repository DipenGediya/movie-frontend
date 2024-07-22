import React from 'react'

const MovieCard = ({ title, image, _id, moviesRating, type }) => {
    return (
        <div className='movieCard'>
            <div class="card border-0">
                <img src={image} class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text mb-1">Rating :- {moviesRating}</p>
                    <p class="card-text">Geners :- {type}</p>
                </div>
            </div>
        </div>
    )
}

let CastCard = ({image,name,role}) => {
    return (
        <>
            <div className="cast-card">
                <div class="card border-0">
                    <img src={image}  class="card-img-top rounded-circle" alt="" />
                    <div class="card-body text-center">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text mb-1">{role}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export { MovieCard ,CastCard }
