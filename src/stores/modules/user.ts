import { observable, action, computed } from 'mobx'
const createUserStore = () => {
  const store = observable({
    a: '123'
  })
  return store
}

export default createUserStore
