// import React, { useEffect, useState, useContext } from "react"
// import { Link, Route, Routes } from "react-router-dom"
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
// import { UserIcon } from "@heroicons/react/24/outline"
// import userEvent from "@testing-library/user-event"
// import { UserContext } from "../context"

// const Header = () => {
//   const [scroll, setScroll] = useState(false)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const { user = { id: null, username: "", password: "" }, setUser } = useContext(UserContext)

//   // const [user, setUser] = useState({ id: null, username: "", password: "" })

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setScroll(true)
//       } else {
//         setScroll(false)
//       }
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   return (
//     <header className={`${scroll && "bg-black"}`}>
//       <div className="flex justify-between space-x-2 md:space-x-10">
//         <ul className="space-x-4 sm:flex">
//           <li className="headerLink">
//             <a href="/">Home</a>
//           </li>
//           <li className="headerLink">
//             <a href="/login">Login</a>
//           </li>
//           <li className="headerLink px-5">{user.username && `Welcome back, ${user.username}`}</li>
//         </ul>
//         <div className="flex justify-end space-x-4 text-sm">
//           <Link to={isLoggedIn ? "//login" : "/register"}>
//             <UserIcon className=" headerLink h-7 w-7 text-white" />
//           </Link>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header

import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { UserIcon } from "@heroicons/react/24/solid"
import { UserContext } from "../context"
import { Link as ScrollLink } from "react-scroll"

const Header = () => {
  const [scroll, setScroll] = useState(false)
  const { user = { id: null, username: "", password: "" } } = useContext(UserContext)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`${scroll && "bg-black transition-colors duration-200 ease-in-out"} py-4 px-8 sm:px-16`}>
      <div className="flex justify-between items-center space-x-2 md:space-x-10">
        <ul className="space-x-4 sm:flex">
          <li className="text-white text-shadow text-lg hover:text-blue-400 hover:underline">
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="text-white text-shadow text-lg hover:text-blue-400 hover:underline">
            <ScrollLink to="watchLater" smooth={true} duration={500}>
              Watch Later
            </ScrollLink>
          </li>
          {/* Uncomment these lines if you have the relevant pages
            <li className="text-white text-lg hover:text-gray-300 hover:underline">
              <Link to="/categories">
                Categories
              </Link>
            </li>
            <li className="text-white text-lg hover:text-gray-300 hover:underline">
              <Link to="/trending">
                Trending
              </Link>
            </li>
          */}
        </ul>
        {/* This could be your search bar, uncomment if you have a search page
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search..." className="rounded-md px-3 py-2 bg-gray-800 text-white" />
            <button type="submit" className="text-white bg-red-500 rounded-md px-3 py-2 hover:bg-red-600">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
        */}
        <div className="flex items-center space-x-4">
          <Link to={user?.username ? "/login" : "/register"}>
            <UserIcon className="h-7 w-7 text-white text-shadow hover:text-blue-400 hover:scale-105 transition-transform" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
