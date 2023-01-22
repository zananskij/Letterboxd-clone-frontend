import React from "react"
import { useState, useEffect } from "react"
import { MediaData } from "../results"

interface Props {
  item: MediaData
  userId: string
}

const Card: React.FC<Props> = ({ item }) => {
  const image = `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`

  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleWatchLater = async () => {
    try {
      const data = { media_id: item.id, user_id: userId }
      const response = await fetch("/watchlater", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      console.log(result)
      console.log("Media added to watch later list")
    } catch (error) {
      console.error(error)
    }
  }
  const [userId, setUserId] = useState("")

  useEffect(() => {
    setUserId(userId)
  }, [userId])

  return (
    <>
      <div
        className="media-element rounded-sm md:hover:scale-105 transition duration-200 ease-out pl-2"
        style={{ width: "240px", flexShrink: 0, flexBasis: 0 }}
        onClick={toggleModal}
      >
        <img src={image} alt={item.name || item.title} />
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content w-[60vh] h-[50vh]">
            <p className="text-center py-4  text-4xl font-bold">{item.name || item.title}</p>
            <div className="flex justify-between pt-2 px-2 text-1xl">
              <p>{item.media_type}</p>
              <p>{item.first_air_date || item.release_date}</p>
              <p>{item.vote_average * 10}%</p>
            </div>
            <p className="py-8 px-2 text-2xl">{item.overview}</p>
            <div className="flex justify-end pr-8 ">
              <button className="modal-btn mr-6" onClick={handleWatchLater}>
                + Watchlater
              </button>

              <button className="modal-btn mr-6">+ Watched</button>
              <button className="modal-btn mr-6" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
