import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { Route, Routes, Link } from "react-router-dom"
import Header from "./components/Header"
import { Movie } from "./results"
import requests from "./requests"
import Row from "./components/Row"
import "./App.css"

interface Data {
  trending: {
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      first_air_date: string
      genre_ids: number[]
      id: number
      media_type: string
      name?: string
      title?: string
      origin_country: string[]
      original_language: string
      original_name: string
      overview: string
      popularity: number
      poster_path: string
      vote_average: number
      vote_count: number
    }>
  }
}

const App = () => {
  const [trending, setTrending] = useState<Data>({ trending: { page: 0, results: [] } })

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get("http://localhost:8000/test")
      .then((response) => {
        console.log(response.data)
        setTrending(response.data)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [])

  return (
    <>
      <Header />
      {/* {error && <div>{error}</div>} */}
      {/* <div className="object-fill inline-flex items-center relative"> */}
      {/* <div
        className="object-fill flex items-center overflow-y-scroll relative flex-wrap"
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      > */}
      {/* <div
        className="overflow-x-auto"
        style={{
          height: "200px",
          display: "grid",
          gridAutoColumns: "1fr",
          gridAutoFlow: "column",
          overflowX: "scroll",
        }}
      >
        {trending.trending.results.map((item) => (
          <Row
            key={item.id}
            id={item.id}
            name={item.name}
            title={item.title}
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
          />
        ))}
      </div> */}

      {/* // {trending.trending.results.map((item) => <div key={item.id}>{item.name || item.title}</div>)}
      )} */}

      <div className="media-scroller grid grid-flow-col" style={{ overflowX: "scroll" }}>
        {trending.trending.results.map((item) => (
          <Row
            key={item.id}
            id={item.id}
            name={item.name}
            title={item.title}
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
          />
        ))}
      </div>
    </>
  )
}

export default App
