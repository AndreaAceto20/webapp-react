import axios from "axios"
import { useState, useEffect, useContext } from "react"
import Card from "../components/Card"
import GlobalContext from "../../Context/GlobalContext"


export default function HomePage() {
    const { movies } = useContext(GlobalContext)
    return (
        <>
            <div className="row">
                {movies.map((movie) => (
                    <Card props={movie}></Card>
                ))

                }
            </div>

        </>
    )
}