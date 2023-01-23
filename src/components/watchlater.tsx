import React from "react"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { MediaData } from "../results"

interface Props {
  watchLaterData: { media_id: number; user_id: number }[]
  mediaData: MediaData[]
}

const baseURL = "https://image.tmdb.org/t/p/w500"
// const image = `https://image.tmdb.org/t/p/w500${mediaItem?.backdrop_path || mediaItem?.poster_path}`

const WatchLater: React.FC<Props> = ({ watchLaterData, mediaData }) => {
  const [watchLaterImages, setWatchLaterImages] = useState<string[]>([])

  useEffect(() => {
    // Find the media in the API data that matches the media_id from the watch later data
    const watchLaterImages = watchLaterData.map((watchLaterItem) => {
      const mediaItem = mediaData.find((media) => media.id === watchLaterItem.media_id)
      return `${baseURL}${mediaItem?.backdrop_path || mediaItem?.poster_path}`
    })
    setWatchLaterImages(watchLaterImages)
  }, [watchLaterData, mediaData])

  return (
    <div>
      <div>
        <p>Watch Later</p>
      </div>
      <div style={{ width: "200px", height: "150px", flexShrink: 0, flexBasis: 0 }}>
        {watchLaterImages.map((image, index) => (
          <img key={index} src={image} alt="Watch later" />
        ))}
      </div>
    </div>
  )
}

export default WatchLater
