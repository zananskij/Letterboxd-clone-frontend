// import React, { useState, useContext } from "react"
// import { MediaData } from "../results"
// import axios from "axios"
// import { UserContext, WatchLaterData } from "../context"
// import Modal from "./Modal"

// interface Props {
//   item: MediaData
// }

// const Card: React.FC<Props> = ({ item }) => {
//   const { user } = useContext(UserContext)
//   const { watchLaterData, setWatchLaterData } = useContext(UserContext)

//   const image = `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }

//   const handleWatchLater = async () => {
//     // Check if user or user.id is null
//     if (user && user.id !== null) {
//       try {
//         const data = { media_id: item.id, user_id: user.id }
//         const response = await axios.post(`http://localhost:8000/users/${user.username}/watchlater`, data)

//         if (response.status === 200) {
//           setWatchLaterData([...watchLaterData, data])
//           console.log("Watch later context data: ", watchLaterData) // Add this line 3
//         }
//       } catch (error) {
//         console.log(error)
//       }
//     } else {
//       // Handle the case when user or user.id is null
//       console.log("User or user.id is null")
//     }
//   }

//   return (
//     <>
//       <div
//         className="media-element rounded-sm md:hover:scale-105 transition duration-200 ease-out pl-2"
//         style={{ width: "240px", flexShrink: 0, flexBasis: 0 }}
//         onClick={toggleModal}
//       >
//         <img src={image} alt={item.name || item.title} />
//       </div>
//       {isModalOpen && (
//         <div
//           className="modal-overlay"
//           onClick={(e) => {
//             // Check if the user clicked outside of the modal-content
//             if (e.target === e.currentTarget) {
//               toggleModal()
//             }
//           }}
//         >
//           <div className="modal-content w-[70vh] h-[60vh]">
//             <p className="text-center py-4  text-4xl font-bold">{item.name || item.title}</p>
//             <div className="flex justify-between pt-2 px-2 text-1xl">
//               {/* <p>{item.media_type}</p> */}
//               <p>Release Date: {item.first_air_date || item.release_date}</p>
//               <p>User Score: {Math.round(item.vote_average * 10)}%</p>
//             </div>
//             <p className="py-8 px-2 text-2xl">{item.overview}</p>
//             <div className="flex justify-end pr-8 ">
//               <button className="modal-btn mr-6" onClick={handleWatchLater}>
//                 + Watchlater
//               </button>

//               <button className="modal-btn mr-6">+ MyList</button>
//               <button className="modal-btn mr-6" onClick={toggleModal}>
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Card
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
        const response = await axios.post(`http://localhost:8000/users/${user.username}/watchlater`, data)

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
