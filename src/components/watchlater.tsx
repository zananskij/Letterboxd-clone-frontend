// working before new proposed solution / simplifed / moved to main.tsx
// working before new proposed solution / simplifed / moved to main.tsx
// import React from "react"
// import { useEffect, useState, useContext } from "react"
// import axios from "axios"
// import { MediaData } from "../results"
// import Row from "./Row"
// import Card from "./Card"

// interface Props {
//   watchLaterData: { media_id: number; user_id: number }[]
//   mediaData: MediaData[]
// }

// const WatchLater: React.FC<Props> = ({ watchLaterData, mediaData }) => {
//   const [watchLaterMedia, setWatchLaterMedia] = useState<MediaData[]>([])

//   useEffect(() => {
//     console.log("Media Data:", mediaData)
//     console.log("Watch Later Data:", watchLaterData)

//     // Find the media in the API data that matches the media_id from the watch later data
//     const watchLaterMedia = watchLaterData
//       .map((watchLaterItem) => {
//         const mediaItem = mediaData.find((media) => media.id === watchLaterItem.media_id)
//         return mediaItem
//       })
//       .filter((item): item is MediaData => item !== undefined)

//     console.log("Watch Later Media:", watchLaterMedia)
//     setWatchLaterMedia(watchLaterMedia)
//     console.log("Watch later context data: ", watchLaterData) // Add this line 2
//   }, [watchLaterData, mediaData])

//   console.log("Rendered Watch Later Media:", watchLaterMedia)

//   return <Row title="Watch Later" data={{ page: 1, data: watchLaterMedia }} render={(item) => <Card item={item} />} />
// }

// export default WatchLater
// working before new proposed solution / simplifed / moved to main.tsx
// working before new proposed solution / simplifed / moved to main.tsx

// const baseURL = "https://image.tmdb.org/t/p/w500"
// // const image = `https://image.tmdb.org/t/p/w500${mediaItem?.backdrop_path || mediaItem?.poster_path}`

// const WatchLater: React.FC<Props> = ({ watchLaterData, mediaData }) => {
//   const [watchLaterImages, setWatchLaterImages] = useState<string[]>([])

//   useEffect(() => {
//     console.log("Media Data:", mediaData)
//     console.log("Watch Later Data:", watchLaterData)
//     // Find the media in the API data that matches the media_id from the watch later data
//     const watchLaterImages = watchLaterData.map((watchLaterItem) => {
//       const mediaItem = mediaData.find((media) => media.id === watchLaterItem.media_id)
//       if (!mediaItem) {
//         console.log(`Media not found for watchLaterItem with media_id ${watchLaterItem.media_id}`)
//       } else if (!mediaItem.backdrop_path && !mediaItem.poster_path) {
//         console.log(`Media found, but missing image paths for watchLaterItem with media_id ${watchLaterItem.media_id}`)
//       }
//       return `${baseURL}${mediaItem?.backdrop_path || mediaItem?.poster_path}`
//     })
//     console.log("Watch Later Images:", watchLaterImages)
//     setWatchLaterImages(watchLaterImages)
//   }, [watchLaterData, mediaData])

//   return (
//     <div>
//       <div>
//         <p>Watch Later</p>
//       </div>
//       <div style={{ width: "200px", height: "150px", flexShrink: 0, flexBasis: 0 }}>
//         {/* {watchLaterImages.map((image, index) => (
//           <img key={index} src={image} alt="Watch later" />
//         ))} */}
//         {watchLaterImages.map((image, index) => image && <img key={index} src={image} alt="Watch later" />)}
//       </div>
//     </div>
//   )
// }

// export default WatchLater

import React from "react"
import Row from "./Row"
import Card from "./Card"
import { MediaData } from "../results"

interface Props {
  watchLaterData: MediaData[]
}

const WatchLater: React.FC<Props> = ({ watchLaterData }) => {
  console.log("Rendered Watch Later Media:", watchLaterData)
  return <Row title="Watch Later" data={{ page: 1, data: watchLaterData }} render={(item) => <Card item={item} />} />
}

export default WatchLater
