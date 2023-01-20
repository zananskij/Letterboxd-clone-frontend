import React, { useState, useEffect } from "react"
import { MediaCategory } from "../results"
import { MediaData } from "../results"

const baseURL = "https://image.tmdb.org/t/p/original"

interface Props {
  Data: MediaCategory
}

function Banner({ Data }: Props) {
  const [movie, setMovie] = useState<MediaData | null>(null)

  useEffect(() => {
    const randomData = Data.trending.data[Math.floor(Math.random() * Data.trending.data.length)]
    setMovie(randomData)
  }, [Data])

  return movie ? (
    <div>
      Banner Section
      <div>
        <img src={`${baseURL}${movie?.backdrop_path || movie?.poster_path}`} alt="#" />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default Banner
