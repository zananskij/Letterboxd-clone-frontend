import React from "react"

import Header from "./Header"
import TitleCard from "./TitleCard"

const Mainpage = () => {
  return (
    <div className="entire-page-container relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Header />
      <nav>{/* logo / home / catagories | search / profile */}</nav>
      <main>
        <TitleCard />
        <section>{/* card rows  */}</section>
      </main>
      {/* modal when card clicked on */}
    </div>
  )
}

export default Mainpage
