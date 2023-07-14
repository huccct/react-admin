export interface LoginFormData {
  username?: string
  password?: string
}

export interface ResponseData {
  code?: number
  message?: string
  ok?: boolean
}

export interface LoginResponseData extends ResponseData {
  data?: string
}

export interface userInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}

export interface LogoutResponseData extends ResponseData {
  data?: string
}
