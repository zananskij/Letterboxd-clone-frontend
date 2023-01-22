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
    topRated: { page: 0, data: [] },
    horror: { page: 0, data: [] },
    comedy: { page: 0, data: [] },
    action: { page: 0, data: [] },
    documentaries: { page: 0, data: [] },
  })
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()
  const [user, setUser] = useState({ id: null, username: "", password: "" })

  // interface RegisterData {
  //   username: any
  //   password: any
  // }

  // const [registerData, setRegisterData] = useState<RegisterData>({
  //   username: "",
  //   password: "",
  // })

  // const handleRegister = async (data: RegisterData) => {
  //   try {
  //     await axios.post("https://letterboxd-clone-backend.herokuapp.com/register", data)
  //     console.log("Successfully registered")
  //     console.log(data)
  //     navigate("/")
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
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

  // const handleRegister = async () => {
  //   await axios.post("https://letterboxd-clone-backend.herokuapp.com/register", user)
  //   // localStorage.setItem("token", data.token)
  //   navigate("/")
  // }
  // const handleRegister = async () => {
  //   try {
  //     const res = await axios.post("/register", {
  //       username: user.username,
  //       password: user.password,
  //     })
  //     console.log(res.data)
  //     navigate("/")
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // const handleRegister = async (username: string, password: string) => {
  //   try {
  //     const res = await axios.post("http://localhost:5432/register", {
  //       username,
  //       password,
  //     })
  //     console.log(res.data)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // handleRegister("test_username", "test_password")

  // const handleLogin = async () => {
  //   await axios.post("https://letterboxd-clone-backend.herokuapp.com//login", user)

  //   navigate("/")
  // }

  useEffect(() => {
    axios
      .get("https://letterboxd-clone-backend.herokuapp.com/")
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
          topRated: {
            page: response.data.topRated.page,
            data: response.data.topRated.results,
          },
          horror: {
            page: response.data.horror.page,
            data: response.data.horror.results,
          },
          comedy: {
            page: response.data.comedy.page,
            data: response.data.comedy.results,
          },
          action: {
            page: response.data.action.page,
            data: response.data.action.results,
          },
          documentaries: {
            page: response.data.documentaries.page,
            data: response.data.documentaries.results,
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
        {/* <Route path="/register" element={<Register handleRegister={handleRegister} />} /> */}
        <Route path="/register" element={<Register handleRegister={handleRegister} />} />
      </Routes>
    </>
  )
}

export default App
