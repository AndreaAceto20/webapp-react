import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import DefaulLayout from './components/DefaultLayout'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import GlobalContext from '../Context/GlobalContext'
import axios from 'axios'


function App() {
  const [movies, SetMovies] = useState([])
  function fetchMovies() {
    axios.get("http://localhost:3000/movies")
      .then((res) => {
        // console.log(res.data);

        SetMovies(res.data)
      })
  }

  useEffect(fetchMovies, [])

  return (
    <>
      <GlobalContext.Provider value={{ movies }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaulLayout} >
              <Route index Component={HomePage}></Route>
              <Route path=':id' Component={DetailPage}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>

    </>
  )
}

export default App
