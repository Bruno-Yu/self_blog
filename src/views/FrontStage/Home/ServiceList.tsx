import { FunctionComponent } from 'react'
import ServiceCard from '../../../components/Home/ServiceCard'
import Title from '../../../components/Home/Title'
import { LiaReact, LiaVuejs } from 'react-icons/lia'

const ICONS = {
  Vue: LiaVuejs,
  React: LiaReact,
  Web_Layout: LiaVuejs,
  Others: LiaReact,
}

const SERVICES = [
  {
    title: 'Vue',
    icon: 'price-item-visual',
    details: ['Vue3/Vue2', 'Nuxt3/Nuxt2', 'Vite', 'Pinia/Vuex'],
  },
  {
    title: 'React',
    icon: 'price-item-ui',
    details: ['React 18', 'Vite', 'Redux', 'React Query'],
  },
  {
    title: 'Web Layout',
    icon: 'service-item-html&css',
    details: [
      'CSS/SCSS ',
      'RWD',
      'Tailwind CSS',
      'Bootstrap 5',
      'Element Plus',
      'GSAP',
    ],
  },
  {
    title: 'Others',
    icon: 'service-item-front-end',
    details: ['Git', 'Figma', 'Basic unit test', 'Basic Linux', 'Basic SQL'],
  },
]

// const SERVICES = [
//   {
//     title: '平面設計',
//     imgUrl: 'price-item-visual',
//   },
//   {
//     title: 'UI設計',
//     imgUrl: 'price-item-ui',
//   },
//   {
//     title: '切版服務',
//     imgUrl: 'service-item-html&css',
//   },
//   {
//     title: '前端開發',
//     imgUrl: 'service-item-front-end',
//   },
// ]

export type ServiceListType = {
  className?: string
}

const ServiceList: FunctionComponent<ServiceListType> = ({
  className = '',
}) => {
  return (
    // bg-[url('@/assets/images/homepage-services-bg.png')]
    <div className="py-5  ">
      {/* <Title title={'技術/能力'} /> */}
      {/* service list */}
      <div
        className={`container mx-auto min-[992px] max-w-[1296px] p-3 ${className}`}
      >
        <div className="flex-1 mx-auto flex justify-center flex-wrap content-start gap-6 max-w-full z-[1]">
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              details={service.details}
            />
          ))}
        </div>
      </div>
      {/* button */}
      {/* <div className="flex justify-center mt-12">
        <p className=" leading-[34px] font-semibold text-2xl mq450:leading-[27px] mb-10">
          想要合作或瞭解更多？
        </p>
      </div>
      <div className="flex items-center justify-center ">
        <button
          type="button"
          className=" leading-[30px] font-semibold text-white text-xl bg-black py-3 px-4 rounded"
        >
          詳細內容與合作流程
        </button>
      </div> */}
    </div>
  )
}

export default ServiceList
