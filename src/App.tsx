import React from "react"
import "./App.css"
import { useEffect, useState, useMemo } from "react"
import axios from "axios"
import { Route, Routes, Link, useNavigate, RouteProps, useLocation } from "react-router-dom"
import { MediaCategory } from "./results"
import { MediaData } from "./results"
import Login from "./components/Login"
import Register from "./components/Reigster"
import Main from "./components/Main"
import Header from "./components/Header"
import UserProvider from "./context"
import { WatchLaterData } from "./context"

import { Dispatch, SetStateAction } from "react"

interface User {
  id: number | null
  username: string
  password: string
}

interface UserProviderProps {
  children: React.ReactNode
  value: {
    user: User
    setUser: Dispatch<SetStateAction<User>>
    watchLaterData: WatchLaterData[]
    setWatchLaterData: Dispatch<SetStateAction<WatchLaterData[]>>
  }
}

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
  const [watchLaterData, setWatchLaterData] = useState<WatchLaterData[]>([])
  const [mediaData, setMediaData] = useState([])

  const navigate = useNavigate()

  let location = useLocation()
  const showHeader = !["/login", "/register"].includes(location.pathname)

  // const [user, setUser] = useState({ id: null, username: "", password: "" })
  const [user, setUser] = useState<User>({ id: null, username: "", password: "" })
  const value = useMemo(() => ({ user, setUser, watchLaterData, setWatchLaterData }), [user, watchLaterData])

  // const handleRegister = async () => {
  //   const { data } = await axios.post("http://localhost:8000/register", user)
  //   localStorage.setItem("token", data.token)
  //   navigate("/login")
  // }

  // const handleLogin = async () => {
  //   try {
  //     const { data } = await axios.post("http://localhost:8000/login", user)
  //     setUser({ id: data.userId, username: data.username, password: user.password }) // Assuming the login response has userId and username

  //     // Fetch the watch later data for the user after successful login
  //     const watchLaterResponse = await axios.get(`http://localhost:8000/users/${data.username}/watchlater`)
  //     setWatchLaterData(watchLaterResponse.data)
  //   } catch (error) {
  //     console.error("Error during login: ", error)
  //   }
  // }

  useEffect(() => {
    axios
      // .get("https://letterboxd-clone-backend.herokuapp.com/")
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
    <UserProvider value={{ user, setUser, watchLaterData, setWatchLaterData }}>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Main Data={data} watchLaterData={watchLaterData} mediaData={mediaData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UserProvider>
  )
}

export default App
