// IMPORTIAMO IL LINK DEL MODULO REACT-ROUTER

import { Link, useNavigate } from "react-router-dom"



import axios from 'axios'

import { useState } from "react"

const initialData = {
    title: "",
    director: "",
    image: null,
    abstract: ""
};

const endpointApi = "http://localhost:3000/movies";

const CreateMoviePage = () => {

    const navigate = useNavigate();


    const [formDataOgj, setFormDataOgj] = useState(initialData);

    const setFieldValue = (e) => {

        const { value, name } = e.target;

        if (name === "image") setFormDataOgj({
            ...formDataOgj,
            image: e.target.files[0]
        });
        else
            setFormDataOgj({
                ...formDataOgj,
                [name]: value
            });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(endpointApi, formDataOgj, { headers: { "Content-Type": "multipart/form-data" } })
            .then(
                () => { navigate("/") }
            )
            .catch((err) => {
                console.log(err);
            });

    }


    return (
        <>
            <h1>Add a new Movie</h1>

            <section>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input
                            name="title"
                            type="text"
                            value={formDataOgj.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <label>director:</label>
                        <input
                            name="director"
                            type="text"
                            value={formDataOgj.author}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <label>Image:</label>
                        <input
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div>
                        <label>Abstract:</label>
                        <textarea
                            value={formDataOgj.abstract}
                            name="abstract"
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <Link to="/">Back</Link>
                        <button>
                            Add Book
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CreateMoviePage