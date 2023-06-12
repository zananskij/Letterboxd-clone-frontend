import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { UserIcon } from "@heroicons/react/24/solid"
import { UserContext } from "../context"
import { Link as ScrollLink } from "react-scroll"
import SearchBar from "./SearchBar"

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
    <header
      className={`${scroll && "bg-black transition-colors duration-200 ease-in-out"} header py-4 px-4 md:px-8 lg:px-16`}
    >
      <div className="flex flex-wrap justify-between items-center md:space-x-10">
        <ul className="flex flex-wrap space-x-2 sm:space-x-4 w-full md:w-auto header-text">
          <div className="flex items-center space-x-4 user-icon">
            <Link to="/login">
              <UserIcon className="h-7 w-7 text-white text-shadow hover:text-blue-400 hover:scale-105 transition-transform" />
            </Link>
          </div>
          <li className="text-white text-shadow text-lg hover:text-blue-400 hover:underline header-text">
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="text-white text-shadow text-lg hover:text-blue-400 hover:underline header-text">
            <ScrollLink to="watchLater" smooth={true} duration={500}>
              Watch Later
            </ScrollLink>
          </li>
          <div className="search-input">
            <SearchBar />
          </div>
        </ul>
      </div>
    </header>
  )
}

export default Header
