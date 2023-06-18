import React, { useEffect, useState, useContext } from "react"
import axios from "axios"
import Card from "./Card"
import Banner from "./Banner"
import Row from "./Row"
import Footer from "./Footer"
import { MediaCategory, MediaData } from "../results"
import WatchLater from "./watchlater"
import { UserContext } from "../context"
import { WatchLaterData } from "../context"

import { Element as ScrollElement } from "react-scroll"

interface MainProps {
  Data: MediaCategory
  watchLaterData: WatchLaterData[]
  mediaData: MediaData[]
}

const Main: React.FC<MainProps> = ({ Data, watchLaterData, mediaData }) => {
  console.log(Data)
  const { user } = useContext(UserContext)
  const [userId, setUserId] = useState(Number(localStorage.getItem("userId")) || 0)
  const [detailedWatchLaterData, setDetailedWatchLaterData] = useState<MediaData[]>([])

  console.log("Watch Later Data:", watchLaterData) // Log the watch later data

  useEffect(() => {
    const retrievedUserId = localStorage.getItem("userId")
    if (retrievedUserId) {
      setUserId(Number(retrievedUserId))
    }
  }, [])

  useEffect(() => {
    const fetchWatchLaterDetails = async () => {
      const detailedDataPromises = watchLaterData.map(async (watchLaterItem) => {
        // Replace the URL with your media service URLL
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${watchLaterItem.media_id}?api_key=5362af18e253afee869b7687fe3b6941`
        )
        return response.data
      })
      const detailedData = await Promise.all(detailedDataPromises)
      setDetailedWatchLaterData(detailedData)
    }

    fetchWatchLaterDetails()
  }, [watchLaterData])

  console.log("Detailed Watch Later Data:", detailedWatchLaterData) // Log the detailed watch later data

  return (
    <>
      <ScrollElement name="home">
        <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h[140vh]">
          <Banner Data={Data} />
          <Row
            title="Trending Now"
            data={{ page: 1, data: Data.trending.data }}
            render={(item) => <Card item={item} />}
          />
          <Row title="Top Rated" data={{ page: 1, data: Data.topRated.data }} render={(item) => <Card item={item} />} />

          <Row title="Horror" data={{ page: 1, data: Data.horror.data }} render={(item) => <Card item={item} />} />
          <Row title="Comedy" data={{ page: 1, data: Data.comedy.data }} render={(item) => <Card item={item} />} />
          <Row title="Action" data={{ page: 1, data: Data.action.data }} render={(item) => <Card item={item} />} />
          <Row
            title="Documentaries"
            data={{ page: 1, data: Data.documentaries.data }}
            render={(item) => <Card item={item} />}
          />
          <Row
            title="Originals"
            data={{ page: 1, data: Data.netflixOriginals.data }}
            render={(item) => <Card item={item} />}
          />
          <ScrollElement name="watchLater">
            <WatchLater key={watchLaterData.length} watchLaterData={detailedWatchLaterData} />
          </ScrollElement>
          <div style={{ height: "300px" }} />
          <Footer />
        </div>
      </ScrollElement>
    </>
  )
}

export default Main
