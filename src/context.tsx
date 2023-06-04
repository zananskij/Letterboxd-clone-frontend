// import React, { createContext, useState } from "react"

// export const UserContext = createContext({})

// function UserProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState({})

//   return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
// }

// export default UserProvider

// UserProvider.tsx
// import React, { createContext, useState } from "react"

// interface User {
//   id: number | null
//   username: string
//   password: string
// }

// interface UserProviderProps {
//   value: { user: User; setUser: Dispatch<SetStateAction<User>> }
//   children: React.ReactNode
// }

// export const UserContext = createContext<{ user: User; setUser: React.Dispatch<React.SetStateAction<User>> }>({
//   user: { id: null, username: "", password: "" },
//   setUser: () => {},
// })

// function UserProvider({ value, children }: UserProviderProps) {
//   return <UserContext.Provider value={value}>{React.Children.only(children)}</UserContext.Provider>
// }

// import { createContext, useState } from "react"

// previously
// import React from "react"
// import { createContext, useState, useContext } from "react"
// import { Dispatch, SetStateAction } from "react"

// interface User {
//   id: number | null
//   username: string
//   password: string
// }

// interface UserProviderProps {
//   value: { user: User; setUser: Dispatch<SetStateAction<User>> }
//   children: React.ReactNode
// }

// export const UserContext = createContext<{ user: User; setUser: React.Dispatch<React.SetStateAction<User>> }>({
//   user: { id: null, username: "", password: "" },
//   setUser: () => {},
// })

// function UserProvider({ value, children }: UserProviderProps) {
//   return (
//     <UserContext.Provider value={value}>
//       <div>{children}</div>
//     </UserContext.Provider>
//   )
// }

// export default UserProvider

// new backend, no errors
// import React, { createContext, useState, Dispatch, SetStateAction } from "react"

// interface User {
//   id: number | null
//   username: string
//   password: string
// }

// interface UserContextProps {
//   user: User
//   setUser: Dispatch<SetStateAction<User>>
//   children?: React.ReactNode // Make children prop optional
// }

// export const UserContext = createContext<UserContextProps | null>(null)

// const UserProvider: React.FC<UserContextProps> = ({ user, setUser, children }) => {
//   return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
// }

// export default UserProvider

// new backend 4.
import React, { createContext, useState, Dispatch, SetStateAction } from "react"

interface User {
  id: number | null
  username: string
  password: string
}

interface WatchLaterData {
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
  const [user, setUser] = useState<User>(value.user)
  const [watchLaterData, setWatchLaterData] = useState<WatchLaterData[]>(value.watchLaterData) // Update this line

  return (
    <UserContext.Provider value={{ user, setUser, watchLaterData, setWatchLaterData }}>{children}</UserContext.Provider>
  )
}

export default UserProvider
