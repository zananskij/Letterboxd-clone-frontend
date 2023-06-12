import React, { useState, useEffect } from "react"
import { MediaCategory, MediaData } from "../results"
import Modal from "./Modal"

const baseURL = "https://image.tmdb.org/t/p/original"

interface Props {
  Data: MediaCategory
}

function Banner({ Data }: Props) {
  const [movie, setMovie] = useState<MediaData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const randomData = Data.trending.data[Math.floor(Math.random() * Data.trending.data.length)]
    setMovie(randomData)
  }, [Data])

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div
      className="relative py-2 bg-cover bg-center bg-no-repeat lg:h-[65vh] lg:py-12 bg-black"
      style={{ backgroundImage: `url(${baseURL}${movie?.backdrop_path || movie?.poster_path})` }}
    >
      <div className="banner-description relative px-8 py-4 pt-12 space-y-4 lg:space-y-6 lg:px-16 bg-transparent hover:bg-black hover:bg-opacity-50 rounded-md transition-all duration-500 ease-in-out">
        <h1 className="text-2xl font-bold text-white md:text-4xl lg:text-6xl text-shadow">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="overview-text text-xs text-white max-w-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow">
          {movie?.overview}
        </p>
        <div>
          <button
            onClick={handleOpenModal}
            className="shiny-button shiny-button-blue more-info px-5 py-1 text-sm font-semibold bg-blue-500 rounded hover:bg-blue-800 transition-colors duration-200 ease-in-out md:py-2.5 md:px-8 md:text-xl text-shadow"
          >
            More Info
          </button>
        </div>
      </div>
      {isModalOpen && movie && <Modal movie={movie} handleClose={handleCloseModal} />}
    </div>
  )
}

export default Banner
