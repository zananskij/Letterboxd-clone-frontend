import React from "react"
import Data from "../App"

interface Props {
  id: number
  name?: string
  title?: string
  backdrop_path?: string
  poster_path?: string
}

const Row: React.FC<Props> = ({ id, name, title, backdrop_path, poster_path }) => {
  const image = `https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`
  return (
    <div className="media-element" style={{ width: "250px", flexShrink: 0, flexBasis: 0 }}>
      <img src={image} alt={name || title} />
    </div>
  )
}

export default Row
