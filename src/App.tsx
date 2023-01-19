import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { Route, Routes, Link, useNavigate, RouteProps } from "react-router-dom"
import Header from "./components/Header"
import Row from "./components/Row"
import "./App.css"
import { MovieData } from "./results"
import CategoryContainer from "./components/CategoryContainer"
import Login from "./components/Login"
import Register from "./components/Reigster"

const App = () => {
  const [data, setData] = useState<MovieData>({
    trending: { page: 0, results: [] },
    netflixOriginals: { page: 0, results: [] },
    horror: { page: 0, results: [] },
  })
  const [error, setError] = useState<string | null>(null)

  // interface Props {
  //   handleLogin: (user: { username: string; password: string }) => void
  //   handleRegister: (user: { username: string; password: string }) => void
  // }
  // interface State {
  //   user: {
  //     username: string
  //     password: string
  //   }
  //   error: string | null
  // }
  const navigate = useNavigate()
  const [user, setUser] = useState({ id: null, username: "", password: "" })

  const handleRegister = async () => {
    const { data } = await axios.post("http://localhost:8000/register", user)
    localStorage.setItem("token", data.token)
    navigate("/login")
  }

  const handleLogin = async () => {
    const { data } = await axios.post("http://localhost:8000/login", user)
    localStorage.setItem("token", data.token)
    navigate("/test")
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/main")
      .then((response) => {
        setData({
          trending: {
            page: response.data.trending.page,
            results: response.data.trending.results,
          },
          netflixOriginals: {
            page: response.data.netflixOriginals.page,
            results: response.data.netflixOriginals.results,
          },
          horror: {
            page: response.data.horror.page,
            results: response.data.horror.results,
          },
        })
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [])

  return (
    <>
      <Header />
      <CategoryContainer
        title="Trending Now"
        data={data.trending}
        render={(item) => (
          <Row
            key={item.id}
            id={item.id}
            name={item.name}
            title="Trending Now"
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
          />
        )}
      />
      <CategoryContainer
        title="Netflix Originals"
        data={data.netflixOriginals}
        render={(item) => (
          <Row
            key={item.id}
            id={item.id}
            name={item.name}
            title="Netflix Originals"
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
          />
        )}
      />
      <CategoryContainer
        title="Horror"
        data={data.horror}
        render={(item) => (
          <Row
            key={item.id}
            id={item.id}
            name={item.name}
            title="Horror"
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
          />
        )}
      />
      <Routes>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register handleRegister={handleRegister} />} />
      </Routes>
    </>
  )
}

export default App
