import { observable, action, computed } from 'mobx'
import { reqLogin } from '@/api/user'
const createUserStore = () => {
  const store = observable({
    token: '',
    username: '',
    avatar: '',
    userLogin: action(async (data: any) => {
      let res = await reqLogin(data)
      console.log(res)
    })
  })
  return store
}

export default createUserStore
