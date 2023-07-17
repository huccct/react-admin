import { observable } from 'mobx'

const createSettingStore = () => {
  const store = observable({
    isCollapse: false,
    refsh: false,
    dark: false,
    colorPrimary: '#00b96b'
  })

  return store
}

export default createSettingStore
