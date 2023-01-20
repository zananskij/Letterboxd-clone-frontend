import React from "react"
import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { Route, Routes, Link, useNavigate, RouteProps } from "react-router-dom"
import { MediaCategory } from "./results"
import Login from "./components/Login"
import Register from "./components/Reigster"
import Main from "./components/Main"
import Header from "./components/Header"

const App = () => {
  const [data, setData] = useState<MediaCategory>({
    trending: { page: 0, data: [] },
    netflixOriginals: { page: 0, data: [] },
    horror: { page: 0, data: [] },
  })
  const [error, setError] = useState<string | null>(null)

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
    navigate("/main")
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        console.log(response)
        setData({
          trending: {
            page: response.data.trending.page,
            data: response.data.trending.results,
          },
          netflixOriginals: {
            page: response.data.netflixOriginals.page,
            data: response.data.netflixOriginals.results,
          },
          horror: {
            page: response.data.horror.page,
            data: response.data.horror.results,
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
      <Routes>
        <Route path="/" element={<Main Data={data} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register handleRegister={handleRegister} />} />
      </Routes>
    </>
  )
}

export default App
