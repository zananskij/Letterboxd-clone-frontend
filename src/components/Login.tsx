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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      // const { data } = await axios.post("http://localhost:8000/login", user)
      const { data } = await axios.post("https://letterboxd-clone-backend.herokuapp.com/login", user)
      localStorage.setItem("token", data.token)
      console.log(`userId: ${data.user.id}`)
      console.log(`username: ${data.user.username}`)

      // Update user information in the context
      setUser({
        id: data.user.id,
        username: data.user.username,
        password: data.user.password,
      })

      // Fetch the watch later data for the user after successful login
      axios
        // .get(`http://localhost:8000/users/${data.user.username}/watchlater`)
        .get(`https://letterboxd-clone-backend.herokuapp.com/users/${data.user.username}/watchlater`)
        .then((response) => {
          console.log("Watch later response data: ", response.data)
          setWatchLaterData(response.data)
          console.log("Watch later state data: ", watchLaterData)
        })
        .catch((error) => {
          console.error("Error fetching watch later data: ", error)
        })

      navigate("/")
    } catch (error) {}
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] text-white">
      <div className="w-96 bg-gray-800 p-10 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-8 text-center">Login</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="Username"
            required
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <div className="space-y-4">
            <button
              type="submit"
              className="shiny-button shiny-button-blue py-2 px-4 rounded-md text-white font-bold w-full"
            >
              Login
            </button>
            <button
              // onClick={handleDemoLogin}
              className="shiny-button shiny-button-green py-2 px-4 rounded-md text-white font-bold w-full"
            >
              Demo Login
            </button>
            <span className="text-sm text-center">
              Don't have an account?
              <button
                className="text-blue-500 hover:text-blue-400 underline ml-1"
                onClick={() => navigate("/register")}
              >
                Sign up!
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
