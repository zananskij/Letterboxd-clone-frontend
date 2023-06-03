// import React, { createContext, useState, useEffect } from "react"
// import axios from "axios"

// interface WatchLaterContextProps {
//   watchLaterList: { media_id: number; user_id: number }[]
//   setWatchLaterList: React.Dispatch<React.SetStateAction<{ media_id: number; user_id: number }[]>>
//   refreshWatchLaterList: () => void
// }

// interface WatchLaterProviderProps {
//   children: React.ReactNode
// }

// export const WatchLaterContext = createContext<
//   [WatchLaterData[], React.Dispatch<React.SetStateAction<WatchLaterData[]>>]
// >([[], () => {}])

// export const WatchLaterProvider: React.FC<WatchLaterProviderProps> = ({ children }) => {
//   const [userId, setUserId] = useState(Number(localStorage.getItem("userId")) || 0)
//   const [watchLaterList, setWatchLaterList] = useState<{ media_id: number; user_id: number }[]>([])

//   const refreshWatchLaterList = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/watchlater/${userId}`)
//       setWatchLaterList(response.data)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   useEffect(() => {
//     const retrievedUserId = localStorage.getItem("userId")
//     if (retrievedUserId) {
//       setUserId(Number(retrievedUserId))
//       refreshWatchLaterList()
//     }
//   }, [])

//   return (
//     <WatchLaterContext.Provider value={{ watchLaterList, setWatchLaterList, refreshWatchLaterList }}>
//       {children}
//     </WatchLaterContext.Provider>
//   )
// }

import React, { createContext, useState, Dispatch, SetStateAction } from "react"

export interface WatchLaterData {
  media_id: number
  user_id: number
}

interface WatchLaterContextProps {
  children: React.ReactNode
  value: [WatchLaterData[], Dispatch<SetStateAction<WatchLaterData[]>>]
}

export const WatchLaterContext = createContext<
  [WatchLaterData[], React.Dispatch<React.SetStateAction<WatchLaterData[]>>]
>([[], () => {}])

const WatchLaterProvider: React.FC<WatchLaterContextProps> = ({ children, value }) => {
  const [watchLaterData, setWatchLaterData] = useState<WatchLaterData[]>(value[0])

  return <WatchLaterContext.Provider value={[watchLaterData, setWatchLaterData]}>{children}</WatchLaterContext.Provider>
}

export default WatchLaterProvider
