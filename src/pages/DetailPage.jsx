import GlobalContext from "../../Context/GlobalContext"
import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import ReviewCard from "../components/ReviewCard"

export default function DetailPage() {
    // const { movies } = useContext(GlobalContext)
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    function fetchMovie() {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => {
                setMovie(res.data)
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }


    useEffect(
        () => fetchMovie(),
        [id]
    )

    function renderReviews() {
        return movie.review?.map(
            review => <ReviewCard props={review}></ReviewCard>
        )
        console.log(movie.review);
    }





    return (
        <>
            <div className="d-flex">
                <img src={movie.img} alt={movie.title} />
                <div>
                    <h2>{movie.title}</h2>
                    <h4>{movie.director}</h4>
                    <p>{movie.abstract}</p>
                    <div>
                        {renderReviews()}
                    </div>
                </div>
            </div >
        </>
    )
}