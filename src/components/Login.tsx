import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

interface Props {
  handleLogin: (user: { username: string; password: string }) => void
}
interface State {
  user: {
    username: string
    password: string
  }
  error: string | null
}

const Login: React.FC<Props> = (props) => {
  const [user, setUser] = useState<State["user"]>({ username: "", password: "" })
  const [error, setError] = useState<State["error"]>(null)

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      // const { data } =
      await axios.post("/login", user)
      // localStorage.setItem("token", data.token)
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
