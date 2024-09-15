import { useEffect } from 'react'
import Banner from './Banner'
import Carousel from './Carousel'
import ServiceList from './ServiceList'
import { useAttractions } from '@/api/attraction'

export default function () {
  const attractionsApi = useAttractions()

  useEffect(() => {
    async function getAttractions() {
      const result = await attractionsApi.query()
      console.log('result', result)
    }
    getAttractions()
  }, [])
  return (
    <>
      <Banner />
      <ServiceList />
      {/* <Carousel /> */}
    </>
  )
}
