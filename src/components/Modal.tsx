import React from "react"
import { MediaData } from "../results"

interface Props {
  movie: MediaData
  handleClose: () => void
}

const Modal: React.FC<Props> = ({ movie, handleClose }) => {
  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose()
        }
      }}
    >
      <div className="modal-content w-[70vh] h-[60vh]">
        <p className="text-center py-4  text-4xl font-bold">{movie.name || movie.title}</p>
        <div className="flex justify-between pt-2 px-2 text-1xl">
          <p>Release Date: {movie.first_air_date || movie.release_date}</p>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
        </div>
        <p className="py-8 px-2 text-2xl">{movie.overview}</p>
        <div className="flex justify-end pr-8 ">
          <button className="modal-btn mr-6">+ Watchlater</button>
          <button className="modal-btn mr-6">+ MyList</button>
          <button className="modal-btn mr-6" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
