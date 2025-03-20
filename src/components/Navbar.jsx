import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <nav>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/movies/create">Aggiungi film</NavLink>
            </nav>
        </>
    )
}