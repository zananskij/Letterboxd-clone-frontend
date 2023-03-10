import React, { useEffect, useState } from "react"
import Card from "./Card"
import Banner from "./Banner"
import Row from "./Row"
import { MediaCategory, MediaData } from "../results"
import WatchLater from "./watchlater"

// interface Props {
//   item: MediaData
//   watchLaterData: { media_id: number; user_id: number }[]
//   mediaData: MediaData[]
// }
interface MainProps {
  Data: MediaCategory
  watchLaterData: { media_id: number; user_id: number }[]
  mediaData: MediaData[]
}
// const Main = ({ Data }: { Data: MediaCategory }) => {
const Main = ({ Data, watchLaterData, mediaData }: MainProps) => {
  const [userId, setUserId] = useState(Number(localStorage.getItem("userId")) || 0)

  useEffect(() => {
    const retrievedUserId = localStorage.getItem("userId")
    if (retrievedUserId) {
      setUserId(Number(retrievedUserId))
    }
  }, [])

  return (
    <>
      <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h[140vh]">
        <Banner Data={Data} />
        <WatchLater watchLaterData={watchLaterData} mediaData={mediaData} />
        <Row
          title="Trending Now"
          data={Data.trending}
          render={(item) => <Card item={item} userId={userId !== null ? userId : 0} />}
        />

        <Row
          title="Netflix Originals"
          data={Data.netflixOriginals}
          render={(item) => <Card item={item} userId={userId} />}
        />
        <Row title="Top Rated" data={Data.topRated} render={(item) => <Card item={item} userId={userId} />} />
        <Row title="Horror" data={Data.horror} render={(item) => <Card item={item} userId={userId} />} />
        <Row title="Comedy" data={Data.comedy} render={(item) => <Card item={item} userId={userId} />} />
        <Row title="Action" data={Data.action} render={(item) => <Card item={item} userId={userId} />} />
        <Row title="Documenaties" data={Data.documentaries} render={(item) => <Card item={item} userId={userId} />} />
      </div>
    </>
  )
}
export default Main
