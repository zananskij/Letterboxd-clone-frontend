import React from "react"
import { useState } from "react"
import { MediaData } from "../results"

interface Props {
  item: MediaData
}

const Card: React.FC<Props> = ({ item }) => {
  const image = `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`

  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
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
              <button className="modal-btn mr-6">+ Watchlater</button>
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

// import React, { useState } from "react"
// import { MediaData } from "../results"

// interface Props {
//   item: MediaData
// }

// const Card: React.FC<Props> = ({ item }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [watchLaterList, setWatchLaterList] = useState(
//     JSON.parse(localStorage.getItem("watchLaterList")) || []
//   )
//   const image = `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }

//   const addToWatchLaterList = () => {
//     setWatchLaterList([...watchLaterList, item])
//     localStorage.setItem("watchLaterList", JSON.stringify(watchLaterList))
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
//         <div className="modal-overlay">
//           <div className="modal-content">
//             {item.name || item.title}
//             <button onClick={addToWatchLaterList}>Add to Watch Later</button>
//             <button onClick={toggleModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Card

// In this example, when the user clicks the "Add to Watch Later" button, the addToWatchLaterList function is called, which adds the current movie to the watchLaterList state, and then it is saved to the client's local storage using localStorage.setItem().
// Also, you might want to add a condition to check if the movie is already in the watch later list, so you can prevent adding the same movie multiple times.

// Keep in mind that the localStorage is not a secure way to store data and should not be used for sensitive information. For storing sensitive information, you should use a server-side database.

// SAVE TO DATABASE BELOW
// SAVE TO DATABASE BELOW
// SAVE TO DATABASE BELOW
// SAVE TO DATABASE BELOW
// SAVE TO DATABASE BELOW
// SAVE TO DATABASE BELOW
// To save the user's watch later list in a backend/PostgreSQL database, you would need to do the following:

// Create a new table in the database to store the user's watch later list. This table should have at least two columns: one for the user's ID (a foreign key referencing the user's table) and one for the movie's ID (a foreign key referencing the movie's table).
// Modify your API endpoint to handle requests to add a movie to the user's watch later list. When a client sends a request to add a movie to the watch later list, the API should insert a new record into the watch later list table with the user's ID and the movie's ID.
// Modify your frontend code to send a request to the API when the user clicks the "Add to Watch Later" button. This request should include the user's ID and the movie's ID.
// When the user logs in, you can fetch the watch later list from the database based on the user's ID and display it on the frontend.
// Here is an example of how the watch later list table would look like in the database:

// Copy code
// CREATE TABLE watch_later_list (
//   id SERIAL PRIMARY KEY,
//   user_id INTEGER REFERENCES users(id),
//   movie_id INTEGER REFERENCES movies(id)
// );
// This table has a primary key id and two foreign keys, user_id and movie_id that references the user's table and the movie's table respectively.

// You would also need to set up an API endpoint that can handle requests to add a movie to the watch later list. This endpoint would take in the user's ID and the movie's ID, and insert a new record into the watch later list table.

// You can use a library like Axios to make the HTTP request from your frontend code to the API endpoint, passing the user's ID and movie's ID as part of the request.

// Keep in mind that you would also need to handle authentication and authorization so that only the correct user can add movies to their watch later list.

// Also, you might want to keep track of the user's watch history, so you can recommend other movies based on what the user has watched.

// REQUESTS FOR BACK AND FRONTEND FOR WATCHLATERLIST
// REQUESTS FOR BACK AND FRONTEND FOR WATCHLATERLIST
// REQUESTS FOR BACK AND FRONTEND FOR WATCHLATERLIST
// REQUESTS FOR BACK AND FRONTEND FOR WATCHLATERLIST
// REQUESTS FOR BACK AND FRONTEND FOR WATCHLATERLIST
// REQUESTS FOR BACK AND FRONTEND FOR WATCHLATERLIST
// REQUESTS FOR BACK AND FRONTEND FOR WATCHLATERLIST
// Yes, you would need to add a POST request in your backend to handle adding movies to the user's watch later table. This endpoint would take in the user's ID and the movie's ID as part of the request and insert a new record into the watch later list table.

// Here is an example of what that might look like in a Node.js backend using Express:

// Copy code
// app.post("/watch-later", async (req, res) => {
//     try {
//         const {user_id, movie_id} = req.body;
//         const insertQuery = `INSERT INTO watch_later_list (user_id, movie_id) VALUES ($1, $2)`;
//         await pool.query(insertQuery, [user_id, movie_id]);
//         res.status(200).json({success: true});
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
// });
// And for retrieving the watch later list from the database you would need to add a GET request in your frontend that sends a request to the backend for the watch later list for the current user.

// Here is an example of what that might look like in your frontend using Axios:

// const getWatchLaterList = async (user_id) => {
//   try {
//       const response = await axios.get(`/watch-later/${user_id}`);
//       const watchLaterList = response.data;
//       // You can use the watchLaterList data to update the state or pass it down as a prop to other components
//   } catch (error) {
//       console.error(error.message);
//   }
// }
// This function uses the user_id passed as parameter to send a GET request to the endpoint /watch-later/:user_id, where the :user_id is replaced by the user_id passed as parameter.
// The response data which is the watchLaterList is saved in a variable and you can use it to update the state or pass it down as a prop to other components.

// You would need to set up the corresponding endpoint in your backend to handle the GET request and retrieve the watch later list from the database based on the user_id, you should also make sure to handle authentication and authorization so that only the correct user can retrieve their watch later list.

// Also, you might want to consider pagination for the watch later list if the list gets too large, so that you don't retrieve all the movies at once.
