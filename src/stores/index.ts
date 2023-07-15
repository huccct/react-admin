import React from 'react'
import createUserStore from './modules/user'
import createSettingStore from './modules/setting'
const createRootStore = () => {
  const userStore = createUserStore()
  const settingStore = createSettingStore()
  return {
    userStore,
    settingStore
  }
}
const store = createRootStore()
const context = React.createContext(store)
const useStore = () => React.useContext(context)

export default useStore
