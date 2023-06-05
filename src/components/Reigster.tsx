import React, { useState, useContext } from "react"
import { UserContext } from "../context"
import axios from "axios"
import { useNavigate } from "react-router-dom"

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
    } catch (error) {}
  }

  //   return (
  //     <div className="register-page">
  //       <div className="register-container">
  //         <h3>Register Page</h3>
  //         <div className="register-form">
  //           <form onSubmit={handleSubmit}>
  //             <input
  //               type="text"
  //               name="username"
  //               value={user.username}
  //               placeholder="Username"
  //               required
  //               onChange={handleChange}
  //             />

  //             <br />
  //             <br />
  //             <input
  //               type="password"
  //               name="password"
  //               value={user.password}
  //               placeholder="Password"
  //               required
  //               onChange={handleChange}
  //             />

  //             <br />
  //             <div className="options-container">
  //               <button type="submit" className="register-btn">
  //                 Register
  //               </button>
  //               <span>
  //                 Already have an account?
  //                 <button className="cursor-pointer text-white hover:underline" onClick={() => navigate("/login")}>
  //                   Login here
  //                 </button>
  //               </span>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  // export default Register
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] text-white">
      <div className="w-96 bg-gray-800 p-10 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-8 text-center">Register</h3>
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

          <button
            type="submit"
            className="shiny-button shiny-button-blue py-2 px-4 rounded-md text-white font-bold w-full"
          >
            Register
          </button>

          <div className="flex justify-center items-center mt-4">
            <span className="text-sm">
              Have an account?
              <button className="text-blue-500 hover:text-blue-400 underline ml-1" onClick={() => navigate("/login")}>
                Login here
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
