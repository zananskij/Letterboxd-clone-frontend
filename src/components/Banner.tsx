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

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <img className="object-fill" src={`${baseURL}${movie?.backdrop_path || movie?.poster_path}`} alt="#" />
      </div>
      <div className="banner-description relative pl-4 pb-20 lg:space-y-24 lg:pl-16">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="overview-text max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {movie?.overview}
        </p>
        <div>
          <button className="rounded px-5 py-1 text-sm font-semibold md:py-2.5 md:px-8 md:text-xl bg-[gray]/70">
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
