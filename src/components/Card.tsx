import React, { useState, useContext } from "react"
import { MediaData } from "../results"
import axios from "axios"
import { UserContext, WatchLaterData } from "../context"
import Modal from "./Modal"

interface Props {
  item: MediaData
}

const Card: React.FC<Props> = ({ item }) => {
  const { user } = useContext(UserContext)
  const { watchLaterData, setWatchLaterData } = useContext(UserContext)

  const image = `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleWatchLater = async () => {
    // Check if user or user.id is null
    if (user && user.id !== null) {
      try {
        const data = { media_id: item.id, user_id: user.id }
        // const response = await axios.post(`http://localhost:8000/users/${user.username}/watchlater`, data)
        const response = await axios.post(
          `https://letterboxd-clone-backend.herokuapp.com/users/${user.username}/watchlater`,
          data
        )

        if (response.status === 200) {
          setWatchLaterData([...watchLaterData, data])
          console.log("Watch later context data: ", watchLaterData)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      // Handle the case when user or user.id is null
      console.log("User or user.id is null")
    }
  }

  return (
    <>
      <div
        className="relative overflow-hidden rounded-md group cursor-pointer transition-transform duration-200 transform hover:scale-105"
        style={{ width: "240px" }}
        onClick={toggleModal}
      >
        <img src={image} alt={item.name || item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-bg-opacity duration-200 flex items-center justify-center">
          <p className="text-white  text-shadow text-lg font-bold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {item.name || item.title}
          </p>
        </div>
      </div>
      {isModalOpen && <Modal movie={item} handleClose={toggleModal} />}
    </>
  )
}

export default Card
