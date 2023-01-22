import React, { useEffect, useState, useContext } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/outline"
import userEvent from "@testing-library/user-event"
import { UserContext } from "../context"

const Header = () => {
  const [scroll, setScroll] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { user = { id: null, username: "", password: "" }, setUser } = useContext(UserContext)

  // const [user, setUser] = useState({ id: null, username: "", password: "" })

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
    <header className={`${scroll && "bg-red-500"}`}>
      <div className="flex justify-between space-x-2 md:space-x-10">
        <ul className="space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">My List</li>
          <li className="headerLink">Watchlater</li>
          <li className="headerLink">Trending</li>
          <li className="headerLink">{user.username && `Welcome back, ${user.username}`}</li>
        </ul>
        <div className="flex justify-end space-x-4 text-sm">
          <MagnifyingGlassIcon className="hidden h-5 w-5 sm:inline text-white" />
          <Link to={isLoggedIn ? "/profile" : "/login"}>
            <UserIcon className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
