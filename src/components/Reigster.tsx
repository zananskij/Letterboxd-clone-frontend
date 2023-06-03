import React, { useState, useContext } from "react"
import { UserContext } from "../context"

import axios from "axios"

import { useNavigate } from "react-router-dom"

// interface Props {
//   handleRegister: (user: { username: string; password: string }) => void
// }
interface User {
  id: number | null
  username: string
  password: string
}

const Register: React.FC = () => {
  const { user, setUser } = useContext(UserContext)

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  // previously
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   try {
  //     const { data } = await axios.post("http://localhost:8000/register", {
  //       username: user.username,
  //       password: user.password,
  //     })
  //     localStorage.setItem("token", data.token)
  //     console.log(`username: ${user.username} , password: ${user.password}`)
  //     navigate("/")
  //   } catch (error) {
  //     // check error
  //   }
  // }

  // new
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const { data } = await axios.post("http://localhost:8000/register", {
        username: user.username,
        password: user.password,
      })
      localStorage.setItem("token", data.token)
      console.log(`userId: ${data.user.id}`)
      console.log(`username: ${data.user.username}`)
      navigate("/")
    } catch (error) {
      // Handle error
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <h3>Register Page</h3>
        <div className="register-form">
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
              <button type="submit" className="register-btn">
                Register
              </button>
              <span>
                Already have an account?
                <button className="cursor-pointer text-white hover:underline" onClick={() => navigate("/login")}>
                  Login here
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
