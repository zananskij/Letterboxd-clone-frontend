import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

interface Props {
  handleRegister: (user: { username: string; password: string }) => void
}

const Register: React.FC<Props> = (props) => {
  const [user, setUser] = useState({ username: "", password: "" })

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await axios.post("https://letterboxd-clone-backend.herokuapp.com/register", user)
      console.log(`username: ${user.username} , password: ${user.password}`)
      navigate("/")
    } catch (error) {
      // handle error
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <h3>Register</h3>
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

{
  /* <form onSubmit={handleSubmit}>
<input type="text" name="username" value={user.username} placeholder="Username" onChange={handleChange} />

<input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />

<button type="submit">Register</button>
</form> */
}
