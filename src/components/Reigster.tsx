import React, { useState } from "react"
// import axios, { AxiosError } from "axios"
// import { error } from "axios"
// import { useNavigate } from "react-router-dom"

// interface Props {
//   handleRegister: (user: { username: string; password: string }) => void
// }

// const Register: React.FC<Props> = (props) => {
//   const [user, setUser] = useState({ username: "", password: "" })
//   const [error, setError] = useState("")
//   // state to store error message

//   const navigate = useNavigate()

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUser({ ...user, [event.target.name]: event.target.value })
//   }

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     try {
//       await axios.post("http://localhost:5432/register", {
//         username: user.username,
//         password: user.password,
//       })
//       console.log(`username: ${user.username} , password: ${user.password}`)
//       navigate("/")
//     } catch (error: any) {
//       if (error.response && error.response.data) {
//         setError(error.response.data.message)
//       } else {
//         setError("An unknown error occurred. Please try again later.")
//       }
//     }
//   }
//   return (
//     <div className="register-page">
//       <div className="register-container">
//         <h3>Register</h3>
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

//             {error && <div className="error-message">{error}</div>}
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register

// {
//   /* <form onSubmit={handleSubmit}>
// <input type="text" name="username" value={user.username} placeholder="Username" onChange={handleChange} />

// <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />

// <button type="submit">Register</button>
// </form> */
// }

// import axios from "axios"
// import { useNavigate } from "react-router-dom"

// interface Props {
//   handleRegister: (user: { username: string; password: string }) => void
// }

// const Register: React.FC<Props> = (props) => {
//   const [user, setUser] = useState({ username: "", password: "" })
//   const [errorMessage, setErrorMessage] = useState("") // state to store error message

//   const navigate = useNavigate()

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUser({ ...user, [event.target.name]: event.target.value })
//   }

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     try {
//       await axios.post("https://letterboxd-clone-backend.herokuapp.com/register", user)
//       console.log(`username: ${user.username} , password: ${user.password}`)
//       navigate("/")
//     } catch (error) {
//       setErrorMessage("Error creating account. Please try again.") // set error message
//     }
//   }

// return (
//   <div className="register-page">
//     <div className="register-container">
//       <h3>Register</h3>
//       <div className="register-form">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             value={user.username}
//             placeholder="Username"
//             required
//             onChange={handleChange}
//           />

//           <br />
//           <br />
//           <input
//             type="password"
//             name="password"
//             value={user.password}
//             placeholder="Password"
//             required
//             onChange={handleChange}
//           />

//           <br />
//           <div className="options-container">
//             <button type="submit" className="register-btn">
//               Register
//             </button>
//             <span>
//               Already have an account?
//               <button className="cursor-pointer text-white hover:underline" onClick={() => navigate("/login")}>
//                 Login here
//               </button>
//             </span>
//           </div>
//           {error && <div className="error-message">{error}</div>}
//         </form>
//       </div>
//     </div>
//   </div>
// )

// hahaha
// Register.tsx

interface Props {
  registerData: {
    username: string
    password: string
  }
  setRegisterData: React.Dispatch<
    React.SetStateAction<{
      username: string
      password: string
    }>
  >
  handleRegister: (data: { username: string; password: string }) => void
}

const Register: React.FC<Props> = ({ registerData, setRegisterData, handleRegister }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleRegister(registerData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={registerData.username}
          onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={registerData.password}
          onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  )
}

export default Register
