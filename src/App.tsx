import React from "react"
import Axios from "axios"
import { Route, Routes, Link } from "react-router-dom"
import Mainpage from "./components/Mainpage"
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </>
  )
}

export default App
