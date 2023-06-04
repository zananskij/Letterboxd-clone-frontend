// interface Props {
//   handleLogin: (user: { username: string; password: string }) => void
// }
// interface State {
//   user: {
//     username: string
//     password: string
//   }
//   error: string | null
// }

import React, { useState, useContext } from "react"
import { UserContext } from "../context"
import axios from "axios"
import { useNavigate } from "react-router-dom"

interface User {
  id: number | null
  username: string
  password: string
}

const Login: React.FC = () => {
  const { user, setUser } = useContext(UserContext)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const { watchLaterData, setWatchLaterData } = useContext(UserContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  // worked but advised to revise
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const { data } = await axios.post("http://localhost:8000/login", user)
      localStorage.setItem("token", data.token)
      console.log(`userId: ${data.user.id}`)
      console.log(`username: ${data.user.username}`)

      // Update user information in the context
      setUser({
        id: data.user.id,
        username: data.user.username,
        password: data.user.password, // It's not recommended to store the password in the context. I'll elaborate on this below.
      })

      // Fetch the watch later data for the user after successful login
      axios
        .get(`http://localhost:8000/users/${data.user.username}/watchlater`)
        .then((response) => {
          console.log("Watch later response data: ", response.data) // Add this line
          setWatchLaterData(response.data) // Please ensure that you have defined setWatchLaterData in your context and imported it here.
          console.log("Watch later state data: ", watchLaterData) // Add this line
        })
        .catch((error) => {
          console.error("Error fetching watch later data: ", error)
        })

      navigate("/")
    } catch (error) {
      // Handle error
    }
  }
  // worked but advised to revise
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   try {
  //     const response = await axios.post("http://localhost:8000/login", user)
  //     console.log(response) // This will log the full response object

  //     const { data } = response
  //     console.log(data) // This will log the data object in the response

  //     if (!data.user) {
  //       console.error("No user data returned from login endpoint")
  //       return
  //     }

  //     console.log(`userId: ${data.user.id}`)
  //     console.log(`username: ${data.user.username}`)

  //     setUser({
  //       id: data.user.id,
  //       username: data.user.username,
  //       password: "", // I suggest not storing the password in the context. Set it to an empty string here.
  //     })

  //     try {
  //       const watchLaterResponse = await axios.get(`http://localhost:8000/users/${data.user.username}/watchlater`)
  //       console.log(watchLaterResponse) // Log the full response from the watch later endpoint
  //       console.log("Watch later response data: ", response.data) // Add this line
  //       setWatchLaterData(watchLaterResponse.data)
  //     } catch (error) {
  //       console.error("Error fetching watch later data: ", error)
  //     }

  //     navigate("/")
  //   } catch (error) {
  //     console.error("Error during login: ", error)
  //   }
  // }

  return (
    <div className="login-page">
      <div className="login-container">
        <h3>Login</h3>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={user.username}
              placeholder="Username"
              required
              onChange={handleChange}
            />

            <br />
            <br />
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              required
              onChange={handleChange}
            />

            <br />
            <div className="options-container">
              <button type="submit" className="login-btn">
                Login
              </button>
              <span>
                Don't have an account?
                <button className="cursor-pointer text-white hover:underline" onClick={() => navigate("/register")}>
                  Sign up!
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
// new
// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault()
//   try {
//     const { data } = await axios.post("http://localhost:8000/login", user)
//     localStorage.setItem("token", data.token)
//     console.log(`userId: ${data.user.id}`)
//     console.log(`username: ${data.user.username}`)
//     navigate("/")
//   } catch (error) {
//     // Handle error
//   }
// }

// old but worked, before the new change
// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault()
//   try {
//     const { data } = await axios.post("http://localhost:8000/login", user)
//     localStorage.setItem("token", data.token)
//     console.log(`userId: ${data.user.id}`)
//     console.log(`username: ${data.user.username}`)

//     // Update user information in the context
//     setUser({
//       id: data.user.id,
//       username: data.user.username,
//       password: data.user.password, // It's not recommended to store the password in the context. I'll elaborate on this below.
//     })

//     navigate("/")
//   } catch (error) {
//     // Handle error
//   }
// }
// old but worked, before the new change

// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault()
//   try {
//     if (user.id) {
//       const { data } = await axios.post("http://localhost:8000/login", {
//         username: user.username,
//         password: user.password,
//       })
//       localStorage.setItem("token", data.token)
//       setUser(data.user)
//       navigate("/")

// previously
// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault()
//   try {
//     const { data } = await axios.post("http://localhost:8000/login", user)
//     localStorage.setItem("userId", data.userId)
//     localStorage.setItem("token", data.token)
//     // setUser(data.user)
//     // console.log(data.token)
//     console.log(data.userId)
//     console.log(user.username)

//     navigate("/")
//   } catch (error) {}
// }
