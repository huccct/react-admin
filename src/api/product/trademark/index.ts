import request from '@/utils/request'
import { TradeMark, TradeMarkResponseData } from './type'

enum API {
  TRADEMARK_URL = '/admin/product/baseTrademark/',
  ADDTRADEMARK_URL = '/admin/product/baseTrademark/save',
  UPDATETRADEMARK_URL = '/admin/product/baseTrademark/update',
  DELETE_URL = '/admin/product/baseTrademark/remove/'
}

export const reqHasTradeMark = (page: number, limit: number) =>
  request.get<any, TradeMarkResponseData>(
    API.TRADEMARK_URL + `${page}/${limit}`
  )

export const reqAddOrUpdateTrademark = (data: TradeMark) => {
  if (data.id) {
    return request.put<any, any>(API.UPDATETRADEMARK_URL, data)
  } else {
    return request.post<any, any>(API.ADDTRADEMARK_URL, data)
  }
}

export const reqDeleteTrademark = (id: number) =>
  request.delete<string, any>(API.DELETE_URL + id)
