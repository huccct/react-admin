import { observable } from 'mobx'

const createSettingStore = () => {
  const store = observable({
    isCollapse: false,
    refsh: false
  })

  return store
}

export default createSettingStore
