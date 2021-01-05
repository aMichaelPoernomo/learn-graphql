import { createContext } from 'react'

interface AppContext {
  userProfile: any
  setUserProfile: (id: number) => void
}

export default createContext<AppContext>({
  userProfile: 0,
  setUserProfile: (id: number) => {},
})
