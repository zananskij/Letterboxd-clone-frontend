import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { Route, Routes, Link } from "react-router-dom"
import Header from "./components/Header"
import Row from "./components/Row"
import "./App.css"
import RowTitle from "./components/RowTitle"
interface Trending {
  trending: {
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      first_air_date?: string
      release_date?: string
      video?: boolean
      genre_ids: number[]
      id: number
      media_type: string
      name?: string
      title?: string
      origin_country: string[]
      original_language: string
      original_name: string
      original_title?: string
      overview: string
      popularity: number
      poster_path: string
      vote_average: number
      vote_count: number
    }>
  }
}
interface netflixOriginals {
  netflixOriginals: {
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      first_air_date?: string
      release_date?: string
      video?: boolean
      genre_ids: number[]
      id: number
      media_type: string
      name?: string
      title?: string
      origin_country: string[]
      original_language: string
      original_name: string
      original_title?: string
      overview: string
      popularity: number
      poster_path: string
      vote_average: number
      vote_count: number
    }>
  }
}
interface Horror {
  horror: {
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      first_air_date?: string
      release_date?: string
      video?: boolean
      genre_ids: number[]
      id: number
      media_type: string
      name?: string
      title?: string
      origin_country: string[]
      original_language: string
      original_name: string
      original_title?: string
      overview: string
      popularity: number
      poster_path: string
      vote_average: number
      vote_count: number
    }>
  }
}

const App = () => {
  const [trending, setTrending] = useState<Trending>({ trending: { page: 0, results: [] } })
  const [netflixOriginals, setNetflixOriginals] = useState<netflixOriginals>({
    netflixOriginals: { page: 0, results: [] },
  })
  const [horror, setHorror] = useState<Horror>({
    horror: { page: 0, results: [] },
  })

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get("http://localhost:8000/test")
      .then((response) => {
        console.log(response.data)
        setTrending(response.data)
        setNetflixOriginals(response.data)
        setHorror(response.data)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [])

  return (
    <>
      <Header />
      {/* <RowTitle /> */}
      <h2 className="row-title" style={{ position: "absolute" }}>
        Trending Now
      </h2>
      <div className="media-scroller grid grid-flow-col pt-7" style={{ overflowX: "scroll", position: "relative" }}>
        {trending.trending.results.map((item) => (
          <Row
            key={item.id}
            id={item.id}
            name={item.name}
            title="Trending Now"
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
          />
        ))}
      </div>
      {/* <RowTitle /> */}
      <div className="media-scroller grid grid-flow-col pt-7" style={{ overflowX: "scroll", position: "relative" }}>
        <h2 className="row-title" style={{ position: "absolute" }}>
          Netflix Originals
        </h2>
        {netflixOriginals.netflixOriginals.results.map((item) => (
          <Row
            key={item.id}
            id={item.id}
            name={item.name}
            title="Netflix Originals"
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
          />
        ))}
      </div>
      {/* <RowTitle /> */}
      <div className="media-scroller grid grid-flow-col pt-7" style={{ overflowX: "scroll", position: "relative" }}>
        <h2 className="row-title" style={{ position: "absolute" }}>
          Horror
        </h2>
        {horror.horror.results.map((item) => (
          <Row
            key={item.id}
            id={item.id}
            name={item.name}
            title="Horror"
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
          />
        ))}
      </div>
    </>
  )
}

export default App
