import React from 'react'
import createUserStore from './modules/user'

const createRootStore = () => {
  const userStore = createUserStore()
  return {
    userStore
  }
}
const store = createRootStore()
const context = React.createContext(store)
const useStore = () => React.useContext(context)

export default useStore
