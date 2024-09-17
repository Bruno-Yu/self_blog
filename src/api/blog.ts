import { request } from '@/api/request'

/**
 *
 * api 接口集合
 * @method query 查詢景點
 */

export function useBlog() {
  return {
    query: () => {
      return request({
        url: '/attractions',
        method: 'get',
      })
    },
    querySelfContent: () => {
      return request({
        url: '/self-content',
        method: 'get',
      })
    },
    querySocialMedia: () => {
      return request({
        url: '/social-media',
        method: 'get',
      })
    },
    querySkills: () => {
      return request({
        url: '/skills',
        method: 'get',
      })
    },
    queryWorks: () => {
      return request({
        url: '/works',
        method: 'get',
      })
    },
  }
}
