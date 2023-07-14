import request from '@/utils/request'
import type {
  LoginFormData,
  LoginResponseData,
  userInfoResponseData
} from './type'

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout'
}

export const reqLogin = (data: LoginFormData) =>
  request.post<string, LoginResponseData>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
  request.get<string, userInfoResponseData>(API.USERINFO_URL)
