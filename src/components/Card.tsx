import React from "react"
import { MediaData } from "../results"

interface Props {
  item: MediaData
}

const Card: React.FC<Props> = ({ item }) => {
  const image = `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`
  return (
    <div
      className="media-element rounded-sm md:hover:scale-105 transition duration-200 ease-out pl-2"
      style={{ width: "240px", flexShrink: 0, flexBasis: 0 }}
    >
      <img src={image} alt={item.name || item.title} />
    </div>
  )
}

export default Card

// interface Props {
//   item: MediaData
// }
