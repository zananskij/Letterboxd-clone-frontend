import React from "react"
import "./App.css"
import { useEffect, useState, useMemo } from "react"
import axios from "axios"
import { Route, Routes, Link, useNavigate, RouteProps } from "react-router-dom"
import { MediaCategory } from "./results"
import { MediaData } from "./results"
import Login from "./components/Login"
import Register from "./components/Reigster"
import Main from "./components/Main"
import Header from "./components/Header"
import UserProvider from "./context"
import WatchLaterProvider from "./WatchLaterContext"
import { WatchLaterData } from "./WatchLaterContext"

import { Dispatch, SetStateAction } from "react"

interface User {
  id: number | null
  username: string
  password: string
}

// interface UserProviderProps {
//   value: { user: User; setUser: Dispatch<SetStateAction<User>> }
//   children: React.ReactNode
// }
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
  // const [watchLaterData, setWatchLaterData] = useState<{ media_id: number; user_id: number }[]>([])
  // const [mediaData, setMediaData] = useState<MediaData[]>([])
  // const [watchLaterData, setWatchLaterData] = useState([])
  const [watchLaterData, setWatchLaterData] = useState<WatchLaterData[]>([])
  const [mediaData, setMediaData] = useState([])

  const navigate = useNavigate()
  // const [user, setUser] = useState({ id: null, username: "", password: "" })
  const [user, setUser] = useState<User>({ id: null, username: "", password: "" })

  const value = useMemo(() => ({ user, setUser, watchLaterData, setWatchLaterData }), [user, watchLaterData])

  const handleRegister = async () => {
    const { data } = await axios.post("http://localhost:8000/register", user)
    localStorage.setItem("token", data.token)
    navigate("/login")
  }

  // const handleLogin = async () => {
  //   const { data } = await axios.post("http://localhost:8000/login", user)
  //   localStorage.setItem("token", data.token)
  //   setUser({ id: data.userId, username: data.username, password: user.password }) // Assuming the login response has userId and username

  //   // Fetch the watch later data for the user after successful login
  //   axios
  //     .get(`http://localhost:8000/users/${data.username}/watchlater`)
  //     .then((response) => {
  //       setWatchLaterData(response.data)
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching watch later data: ", error)
  //     })

  //   navigate("/")
  // }
  const handleLogin = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/login", user)
      setUser({ id: data.userId, username: data.username, password: user.password }) // Assuming the login response has userId and username

      // Fetch the watch later data for the user after successful login
      const watchLaterResponse = await axios.get(`http://localhost:8000/users/${data.username}/watchlater`)
      setWatchLaterData(watchLaterResponse.data)
    } catch (error) {
      console.error("Error during login: ", error)
    }
  }

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
      {/* <WatchLaterProvider value={[watchLaterData, setWatchLaterData]}> */}
      <Header />
      <Routes>
        <Route path="/" element={<Main Data={data} watchLaterData={watchLaterData} mediaData={mediaData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* </WatchLaterProvider> */}
    </UserProvider>
  )
}

export default App

// axios
//   .get("http://localhost:8000/watchLaterData")
//   .then((response) => {
//     setWatchLaterData(response.data)
//   })
//   .catch((error) => {
//     console.log("Error fetching watch later data:", error)
//   })
// axios
//   .get("http://localhost:8000/mediaData")
//   .then((response) => {
//     setMediaData(response.data)
//   })
//   .catch((error) => {
//     console.log("Error fetching media data:", error)
//   })

// OLD USEEFFECT THAT WORKED BUT WASNT EFFICIENT

// useEffect(() => {
//   if (user.username) {
//     // run all requests concurrently with Promise.all
//     Promise.all([
//       axios.get("http://localhost:8000/"),
//       axios.get(`http://localhost:8000/users/${user.username}/watchlater`),
//       axios.get("http://localhost:8000/mediaData"),
//     ])
//       .then(([mainResponse, watchLaterResponse, mediaDataResponse]) => {
//         // the responses array will contain the responses in the same order as the requests
//         console.log(mainResponse, watchLaterResponse, mediaDataResponse)

//         // process mainResponse
//         setData({
//           trending: {
//             page: mainResponse.data.trending.page,
//             data: mainResponse.data.trending.results,
//           },
//           netflixOriginals: {
//             page: mainResponse.data.netflixOriginals.page,
//             data: mainResponse.data.netflixOriginals.results,
//           },
//           topRated: {
//             page: mainResponse.data.topRated.page,
//             data: mainResponse.data.topRated.results,
//           },
//           horror: {
//             page: mainResponse.data.horror.page,
//             data: mainResponse.data.horror.results,
//           },
//           comedy: {
//             page: mainResponse.data.comedy.page,
//             data: mainResponse.data.comedy.results,
//           },
//           action: {
//             page: mainResponse.data.action.page,
//             data: mainResponse.data.action.results,
//           },
//           documentaries: {
//             page: mainResponse.data.documentaries.page,
//             data: mainResponse.data.documentaries.results,
//           },
//         })

//         // process watchLaterResponse and mediaDataResponse
//         setWatchLaterData(watchLaterResponse.data)
//         setMediaData(mediaDataResponse.data)
//       })
//       .catch((error) => {
//         setError(error.message)
//       })
//   }
// }, [user.username]) // added user.username as dependency

// OLD USEEFFECT THAT WORKED BUT WASNT EFFICIENT
// useEffect(() => {
//   const categories = ["trending", "netflixOriginals", "topRated", "action", "comedy", "horror", "documentaries"]
//   const fetchData = async () => {
//     try {
//       let newData: MediaCategory = { ...data } // Clone existing data
//       for (let category of categories) {
//         const response = await axios.get(`http://localhost:8000/${category}`)
//         newData[category as keyof MediaCategory] = {
//           page: response.data.page,
//           data: response.data.data,
//         }
//       }
//       setData(newData) // Update the state
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         setError(error.message)
//       } else {
//         setError("An unknown error occurred")
//       }
//     }
//   }
//   fetchData()
// }, [data])
