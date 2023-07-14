import { observable, action } from 'mobx'
import { reqLogin, reqUserInfo } from '@/api/user'
import type {
  LoginFormData,
  LoginResponseData,
  userInfoResponseData
} from '@/api/user/type'
import { SET_TOKEN } from '@/utils/token'
const createUserStore = () => {
  const store = observable({
    token: '',
    username: '',
    avatar: '',
    userLogin: action(async (data: LoginFormData) => {
      let res = await reqLogin(data)
      if (res.code === 200) {
        store.token = res.data as string
        // data persistence
        SET_TOKEN(res.data as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data as string))
      }
    }),
    userInfo: action(async () => {
      let res: userInfoResponseData = await reqUserInfo()
      console.log(res)
    })
  })
  return store
}

export default createUserStore
