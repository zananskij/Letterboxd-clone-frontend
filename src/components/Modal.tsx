import React from "react"
import { MediaData } from "../results"

interface Props {
  movie: MediaData
  handleClose: () => void
}

const Modal: React.FC<Props> = ({ movie, handleClose }) => {
  const imageUrlBase = "https://image.tmdb.org/t/p/w500/"

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose()
        }
      }}
    >
      <div className="modal-content w-full h-full md:w-[70vh] md:h-[85vh] flex flex-col justify-between">
        <p className="text-sm md:text-3xl lg:text-4xl py-2 md:py-6 font-bold text-center mb-2">
          {movie.name || movie.title}
        </p>

        <div className="flex flex-col md:flex-row justify-between px-2 text-1xl">
          <span className="font-bold modal-span mb-2">
            <span style={{ color: "red" }}>Release Date:&nbsp;&nbsp;</span>
            <span>{movie.first_air_date || movie.release_date}</span>
          </span>

          <span className="font-bold modal-span">
            <span style={{ color: "red" }}>User Score:&nbsp;&nbsp;</span>
            <span> {Math.round(movie.vote_average * 10)}%</span>
          </span>
        </div>
        <div className="flex-grow overflow-auto">
          <div className="flex flex-col md:flex-row h-full">
            <img
              src={`${imageUrlBase}${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-2/3 md:h-full md:w-1/2 object-cover object-center"
            />
            <div className="w-full md:w-1/2 p-4 overflow-auto">
              <p className="py-2 text-1xl">{movie.overview}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-end pr-4 pt-4 space-y-2 md:space-y-0 md:space-x-6">
          <button className="modal-btn">+ Watchlater</button>
          {/* <button className="modal-btn">+ MyList</button> */}
          <button className="modal-btn" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
