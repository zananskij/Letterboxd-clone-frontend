import React, { useState, useContext } from "react"
import { MediaData } from "../results"
import axios from "axios"
import { UserContext } from "../context"
import { WatchLaterContext, WatchLaterData } from "../WatchLaterContext"

interface Props {
  item: MediaData
}

const Card: React.FC<Props> = ({ item }) => {
  const { user } = useContext(UserContext)
  const [watchLaterData, setWatchLaterData] = useContext(WatchLaterContext)

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
      <div>{/* <div>{watchLaterMedia && <div>{watchLaterMedia}</div>}</div> */}</div>
      <div
        className="media-element rounded-sm md:hover:scale-105 transition duration-200 ease-out pl-2"
        style={{ width: "240px", flexShrink: 0, flexBasis: 0 }}
        onClick={toggleModal}
      >
        <img src={image} alt={item.name || item.title} />
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content w-[70vh] h-[60vh]">
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

              <button className="modal-btn mr-6">+ MyList</button>
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

// old before update
// import React from "react"
// import { useState, useEffect, useContext } from "react"
// import { MediaData } from "../results"
// import axios from "axios"
// import { UserContext } from "../context"
// import { useContext } from "react"
// import { WatchLaterContext } from "../WatchLaterContext"

// interface Props {
//   item: MediaData
//   userId: number
// }

// const Card: React.FC<Props> = ({ item, userId }) => {
//   const image = `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`

//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }

//   // based on new backend
//   const [watchLaterData, setWatchLaterData] = useContext(WatchLaterContext)

//   const handleWatchLater = async () => {
//     try {
//       const data = { media_id: item.id, user_id: userId }
//       const response = await axios.post("http://localhost:8000/watchlater", data)

//       if (response.status === 200) {
//         setWatchLaterData([...watchLaterData, data])
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <>
//       <div>{/* <div>{watchLaterMedia && <div>{watchLaterMedia}</div>}</div> */}</div>
//       <div
//         className="media-element rounded-sm md:hover:scale-105 transition duration-200 ease-out pl-2"
//         style={{ width: "240px", flexShrink: 0, flexBasis: 0 }}
//         onClick={toggleModal}
//       >
//         <img src={image} alt={item.name || item.title} />
//       </div>
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content w-[70vh] h-[60vh]">
//             <p className="text-center py-4  text-4xl font-bold">{item.name || item.title}</p>
//             <div className="flex justify-between pt-2 px-2 text-1xl">
//               <p>{item.media_type}</p>
//               <p>{item.first_air_date || item.release_date}</p>
//               <p>{item.vote_average * 10}%</p>
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

// OLD
// const [watchLaterList, setWatchLaterList] = useState([])
//  v43434
// const [watchLaterList, setWatchLaterList] = useState<{ media_id: number; user_id: number }[]>([])

// const [watchLaterMedia, setWatchLaterMedia] = useState()
// useEffect(() => {
//   // Make the GET request to the backend, passing the user's ID
//   axios
//     .get(`http://localhost:8000/watchlater/${userId}`)
//     .then((response) => {
//       setWatchLaterList(response.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }, [userId])
// v43434

// const handleWatchLater = async () => {
//   try {
//     const data = { media_id: item.id, user_id: userId }
//     const response = await axios.post("http://localhost:8000/watchlater", data)
//     console.log(response.data)
//   } catch (error) {
//     console.log(error)
//   }
// }

// previously
// const handleWatchLater = async () => {
//   try {
//     const data = { media_id: item.id, user_id: userId }
//     const response = await axios.post("http://localhost:8000/watchlater", data)
//     console.log(response.data)

//     // Update the watchLaterList state
//     // setWatchLaterList([...watchLaterList, data])
//   } catch (error) {
//     console.log(error)
//   }
// }
