import React, { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/outline"

const Header = () => {
  // updating scroll state
  const [scroll, setScroll] = useState(false)

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
    // add empty array to prevent from always being run when rendered
  }, [])
  return (
    <header className={`${scroll && "bg-red-500"}`}>
      <div className="flex justify-between space-x-2 md:space-x-10">
        {/* <img src="#"/> */}
        <ul className="space-x-4 md:flex">
          {/* make UL hamburger drop or popout on mobile */}
          <li className="headerLink">Home</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">Shows</li>
          <li className="headerLink">Trending</li>
          <li className="headerLink">My List</li>
        </ul>
        <div className="flex justify-end space-x-4 text-sm">
          <MagnifyingGlassIcon className="hidden h-5 w-5 sm:inline text-white" />
          <Link to="/profile">
            <UserIcon className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
