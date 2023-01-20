import React from "react"
import { MediaData } from "../results"

interface Props {
  item: MediaData
}

const Row: React.FC<Props> = ({ item }) => {
  const image = `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`
  return (
    <div className="media-element" style={{ width: "250px", flexShrink: 0, flexBasis: 0 }}>
      <img src={image} alt={item.name || item.title} />
    </div>
  )
}

export default Row

// interface Props {
//   item: MediaData
// }
