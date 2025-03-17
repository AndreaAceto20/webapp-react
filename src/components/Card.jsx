import { NavLink, Link } from "react-router-dom"


export default function Card(props) {
    const movie = props.props;
    // console.log(movie);


    return (
        <>
            <div className="card col-4" key={movie.id}>
                <img src={movie.img} alt={movie.title} />
                <p>{movie.title}</p>
                <p>{movie.director}</p>
                <p>{movie.genre}</p>
                <p>{movie.abstract}</p>
                <NavLink to={`/${movie.id}`}>See More</NavLink>
            </div>
        </>
    )
}