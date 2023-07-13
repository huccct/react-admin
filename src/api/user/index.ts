import request from '@/utils/request'

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout'
}

export const reqLogin = (data: any) =>
  request.post<any, any>(API.LOGIN_URL, data)
