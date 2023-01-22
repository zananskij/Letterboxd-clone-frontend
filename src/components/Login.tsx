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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const { data } = await axios.post("http://localhost:8000/login", user)
      localStorage.setItem("token", data.token)
      setUser(data.user)
      navigate("/")
    } catch (error) {}
  }

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
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  )
}

export default Login

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
