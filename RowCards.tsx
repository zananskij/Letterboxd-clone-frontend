import React from "react"

// function RowCards({ title, movies }: Props) {
//   return (
//     <div>
//       <h2>{title}</h2>

//       <div className="card-thumbnail flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
//         {movies.map((movie) => (
//           <Thumbnail key={movie.id} />
//         ))}
//       </div>
//     </div>
//   )
// }

// function RowCards({ title, movies }: Props) {
//   return (
//     <div className="h-40 space-y-0.5 md:space-y-2">
//       <h2>{title}</h2>
//       <div className="card-thumbnail flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
//         {movies && movies.map((movie) => <Thumbnail key={movie.id} />)}
//       </div>
//     </div>
//   )
// }

// import { Movie } from "../results"
// import Thumbnail from "./Thumbnail"

// interface Props {
//   title: string
//   movies: Movie[]
// }
// function RowCards({ title, movies }: Props) {
//   // console.log("movies: ", movies)
//   return (
//     <div className="h-40 space-y-0.5 md:space-y-2">
//       <h2>{title}</h2>
//       <div className="flex items-center h-28 min-w-[180px] space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
//         {movies && movies.map((movie) => <Thumbnail key={movie.id} movie={movie} />)}
//       </div>
//     </div>
//   )
// }

// export default RowCards
