import React, { createContext, useState, Dispatch, SetStateAction } from "react"

interface User {
  id: number | null
  username: string
  password: string
}

export interface WatchLaterData {
  user_id: number
  media_id: number
}

interface UserContext {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  watchLaterData: WatchLaterData[]
  setWatchLaterData: React.Dispatch<React.SetStateAction<WatchLaterData[]>>
}

interface UserProviderProps {
  children: React.ReactNode
  value: {
    user: User
    setUser: Dispatch<SetStateAction<User>>
    watchLaterData: WatchLaterData[]
    setWatchLaterData: Dispatch<SetStateAction<WatchLaterData[]>>
  }
}

export const UserContext = createContext<UserContext>({
  user: { id: null, username: "", password: "" },
  setUser: () => {},
  watchLaterData: [],
  setWatchLaterData: () => {},
})

const UserProvider: React.FC<UserProviderProps> = ({ children, value }) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
