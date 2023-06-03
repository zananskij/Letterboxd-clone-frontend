// ORIGINAL
// import React, { useEffect, useState, useContext } from "react"

// import Card from "./Card"
// import Banner from "./Banner"
// import Row from "./Row"
// import { MediaCategory, MediaData } from "../results"
// import WatchLater from "./watchlater"

// import { UserContext } from "../context"

// // const { user } = useContext(UserContext)

// // interface Props {
// //   item: MediaData
// //   watchLaterData: { media_id: number; user_id: number }[]
// //   mediaData: MediaData[]
// // }
// interface MainProps {
//   Data: MediaCategory
//   watchLaterData: { media_id: number; user_id: number }[]
//   mediaData: MediaData[]
// }
// // const Main = ({ Data }: { Data: MediaCategory }) => {
// const Main = ({ Data, watchLaterData, mediaData }: MainProps) => {
//   const [userId, setUserId] = useState(Number(localStorage.getItem("userId")) || 0)

//   useEffect(() => {
//     const retrievedUserId = localStorage.getItem("userId")
//     if (retrievedUserId) {
//       setUserId(Number(retrievedUserId))
//     }
//   }, [])

//   return (
//     <>
//       <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h[140vh]">
//         <Banner Data={Data} />
//         <WatchLater watchLaterData={watchLaterData} mediaData={mediaData} />
//         <Row
//           title="Trending Now"
//           data={Data.trending}
//           render={(item) => <Card item={item} userId={userId !== null ? userId : 0} />}
//         />

//         <Row
//           title="Netflix Originals"
//           data={Data.netflixOriginals}
//           render={(item) => <Card item={item} userId={userId} />}
//         />
//         <Row title="Top Rated" data={Data.topRated} render={(item) => <Card item={item} userId={userId} />} />
//         <Row title="Horror" data={Data.horror} render={(item) => <Card item={item} userId={userId} />} />
//         <Row title="Comedy" data={Data.comedy} render={(item) => <Card item={item} userId={userId} />} />
//         <Row title="Action" data={Data.action} render={(item) => <Card item={item} userId={userId} />} />
//         <Row title="Documenaties" data={Data.documentaries} render={(item) => <Card item={item} userId={userId} />} />
//       </div>
//     </>
//   )
// }
// export default Main
// ^^^^ORIGINAL

// updated with changes

// import React, { useEffect, useState, useContext } from "react"

// import Card from "./Card"
// import Banner from "./Banner"
// import Row from "./Row"
// import { MediaCategory, MediaData } from "../results"
// import WatchLater from "./watchlater"

// import { UserContext } from "../context"
// import { WatchLaterContext } from "../WatchLaterContext"

// const Main: React.FC = () => {
//   const { user } = useContext(UserContext)
//   // const [watchLaterData, setWatchLaterData] = useContext(WatchLaterContext)
//   const [watchLaterData] = useContext(WatchLaterContext)

//   const [userId, setUserId] = useState(Number(localStorage.getItem("userId")) || 0)

//   useEffect(() => {
//     const retrievedUserId = localStorage.getItem("userId")
//     if (retrievedUserId) {
//       setUserId(Number(retrievedUserId))
//     }
//   }, [])

//   return (
//     <>
//       <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h[140vh]">
//         <Banner />
//         <WatchLater />
//         <Row title="Trending Now" data={Data.trending} render={(item) => <Card item={item} />} />
//       </div>
//     </>
//   )
// }

// export default Main

import React, { useEffect, useState, useContext } from "react"
import Card from "./Card"
import Banner from "./Banner"
import Row from "./Row"
import { MediaCategory, MediaData } from "../results"
import WatchLater from "./watchlater"
import { UserContext } from "../context"
import { WatchLaterData } from "../WatchLaterContext"

interface MainProps {
  Data: MediaCategory
  watchLaterData: WatchLaterData[]
  mediaData: MediaData[]
}

const Main: React.FC<MainProps> = ({ Data, watchLaterData, mediaData }) => {
  console.log(Data)
  const { user } = useContext(UserContext)
  const [userId, setUserId] = useState(Number(localStorage.getItem("userId")) || 0)

  useEffect(() => {
    const retrievedUserId = localStorage.getItem("userId")
    if (retrievedUserId) {
      setUserId(Number(retrievedUserId))
    }
  }, [])

  // return (
  //   <>
  //     <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h[140vh]">
  //       <Banner Data={Data} />
  //       <WatchLater watchLaterData={watchLaterData} mediaData={mediaData} />
  //       <Row
  //         title="Trending Now"
  //         data={Data.trending.data}
  //         render={(item) => <Card item={item} userId={userId !== null ? userId : 0} />}
  //       />
  //       <Row
  //         title="Netflix Originals"
  //         data={Data.netflixOriginals.data}
  //         render={(item) => <Card item={item} userId={userId} />}
  //       />
  //       <Row title="Top Rated" data={Data.topRated.data} render={(item) => <Card item={item} userId={userId} />} />
  //       <Row title="Horror" data={Data.horror.data} render={(item) => <Card item={item} userId={userId} />} />
  //       <Row title="Comedy" data={Data.comedy.data} render={(item) => <Card item={item} userId={userId} />} />
  //       <Row title="Action" data={Data.action.data} render={(item) => <Card item={item} userId={userId} />} />
  //       <Row
  //         title="Documentaries"
  //         data={Data.documentaries.data}
  //         render={(item) => <Card item={item} userId={userId} />}
  //       />
  //     </div>
  //   </>
  // )
  return (
    <>
      <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h[140vh]">
        <Banner Data={Data} />
        <WatchLater watchLaterData={watchLaterData} mediaData={mediaData} />
        <Row
          title="Trending Now"
          data={{ page: 1, data: Data.trending.data }}
          render={(item) => <Card item={item} />}
        />

        <Row
          title="Netflix Originals"
          data={{ page: 1, data: Data.netflixOriginals.data }}
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
      </div>
    </>
  )
}

export default Main
