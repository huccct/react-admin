import { observable, action, runInAction } from 'mobx'
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user'
import type {
  LoginFormData,
  LoginResponseData,
  userInfoResponseData,
  LogoutResponseData
} from '@/api/user/type'
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token'
import { constantRoute, asyncRoute, anyRoute } from '@/routes/routes'

// @ts-ignore
import cloneDeep from 'lodash/cloneDeep'
import { useRoutes } from 'react-router-dom'

function filterAsyncRoute(asyncRoute: any, routes: any) {
  return asyncRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}

const createUserStore = () => {
  const store = observable({
    token: GET_TOKEN()!,
    menuRoutes: [] as any,
    username: '',
    avatar: '',
    buttons: [],
    userLogin: action(async (data: LoginFormData) => {
      let res: LoginResponseData = await reqLogin(data)

      if (res.code === 200) {
        runInAction(() => {
          store.token = res.data as string
        })

        // data persistence
        SET_TOKEN(res.data as string)

        return 'ok'
      } else {
        return Promise.reject(new Error(res.data as string))
      }
    }),
    userInfo: action(async () => {
      let res: userInfoResponseData = await reqUserInfo()
      if (res.code === 200) {
        let userAsyncRoute = filterAsyncRoute(
          cloneDeep(asyncRoute),
          res.data.routes
        )
        runInAction(() => {
          store.menuRoutes = constantRoute
          store.username = res.data.name as string
          store.avatar = res.data.avatar as string
          store.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute]
          ;[...userAsyncRoute, anyRoute].forEach((route: any) => {
            constantRoute.push(route)
          })
        })

        return 'ok'
      } else {
        return Promise.reject(new Error(res.message))
      }
    }),
    userLogout: action(async () => {
      let res: LogoutResponseData = await reqLogout()
      if (res.code === 200) {
        runInAction(() => {
          store.token = ''
          store.username = ''
          store.avatar = ''
        })
        REMOVE_TOKEN()
      } else {
        return Promise.reject(new Error(res.message))
      }
    })
  })
  return store
}

export default createUserStore
