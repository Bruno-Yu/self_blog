import { request } from '@/api/request'

/**
 *
 * api 接口集合
 * @method query 查詢景點
 */

export function useAttractions() {
  return {
    query: () => {
      return request({
        url: '/attractions',
        method: 'get',
      })
    },
    queryWorks: () => {
      return request({
        url: '/WORKS',
        method: 'get',
      })
    },
  }
}
