import { Icon } from '@iconify/react'
import { Fragment } from 'react/jsx-runtime'
import { getImageUrl } from '../../../utils/index'
import { IoLogoGithub, IoMailOutline, IoLogoLinkedin } from 'react-icons/io5'
//  <HiOutlineExclamationCircle className="text-7xl text-red-600" />
const imgList = [
  {
    name: 'ig',
    icon: 'mdi:instagram',
  },
  {
    name: 'fb',
    icon: 'mdi:facebook',
  },
  {
    name: 'yt',
    icon: 'mdi:youtube',
  },
]
const SELF_CONTENT = {
  siteName: 'Bruno',
  briefIntro: 'Hi! 我是 Bruno',
  // content: '是名前端開發者',
  // content:
  //   '我是余俊毅（Bruno Yu），來自臺南市的前端開發工程師，擁有近兩年的前端開發與專案管理經驗。我的技術專長涵蓋 Vue3、Nuxt3、Pinia 以及 React 等前端框架，並且熱衷於探索最新的技術與工具。作為團隊中的一員，我積極參與專案開發，具備出色的溝通協作能力，並樂於分享知識，幫助團隊在有限時間內成功交付專案。',
  about:
    '來自臺南市的前端開發工程師，擁有近兩年的前端開發與專案管理經驗。我的技術專長涵蓋 Vue3、Nuxt3、Pinia 以及 React 等前端框架，並且熱衷於探索最新的技術與工具。我認為，技術應該是解決問題的工具，而非目標。因此，我不僅追求寫出乾淨的程式碼，還不斷思考如何以更聰明的方式解決複雜的問題。',
  // about: '具有 2 年經驗的前端工程師\n熱衷於優化使用者的網頁體驗 ',
  hashTags: ['WEB DEVELOPMENT', 'FRONTEND DEVELOPER'],
  // avatar: {
  //   pc: `${imgPath}/images/avatar.webp`,
  //   mobile: `${imgPath}/images/avatar.webp`,
  // },
}
// 我是余俊毅（Bruno Yu），來自臺南市的前端開發工程師，擁有近兩年的前端開發與專案管理經驗。我的技術專長涵蓋 Vue3、Nuxt3、Pinia 以及 React 等前端框架，並且熱衷於探索最新的技術與工具。作為團隊中的一員，我積極參與專案開發，具備出色的溝通協作能力，並樂於分享知識，幫助團隊在有限時間內成功交付專案。

// 我專注於建立直觀且高效的使用者體驗，無論是響應式網站設計、性能優化還是狀態管理，都力求達到最佳實踐。我認為，技術應該是解決問題的工具，而非目標。因此，我不僅追求寫出乾淨的程式碼，還不斷思考如何以更聰明的方式解決複雜的問題。

const ICONS = {
  Github: IoLogoGithub,
  Email: IoMailOutline,
  Linkedin: IoLogoLinkedin,
}

// common
const SOCIAL_MEDIA = [
  {
    name: 'Github',
    link: 'https://github.com/Bruno-Yu',
  },
  {
    name: 'Email',
    link: 'mailto:jackhellowin@gmail.com',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/bruno-yu-357415253',
  },
]
function Banner() {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row  sm:justify-between">
        <div className="flex flex-col justify-center items-center sm:w-2/5 sm:px-2.5 ">
          <div>
            <h1 className="text-2xl text-center sm:text-left font-bold mb-2.5">
              {SELF_CONTENT.briefIntro}
            </h1>
            <p className="text-[#5B5B5B] text-left text-sm mb-2 whitespace-pre-wrap">
              {SELF_CONTENT.about}
            </p>
            <p className="text-[#C1C1C1] text-center sm:text-left text-xs mb-5">
              {SELF_CONTENT.hashTags.join(' / ')}
            </p>
            <div className="flex justify-center sm:justify-start gap-3">
              {SOCIAL_MEDIA.map((media) => {
                const IconComponent = ICONS[media.name]
                return (
                  <Fragment key={media.name}>
                    <a href={media.link} className="block">
                      {IconComponent && (
                        <IconComponent className="text-[#5B5B5B] w-6 h-6" />
                      )}
                    </a>
                  </Fragment>
                )
              })}
            </div>
          </div>
        </div>

        <img
          className="hidden sm:block w-3/5 h-auto"
          src={getImageUrl('hero-lg')}
          alt="hero-lg"
        />
        <img
          className="block sm:hidden w-full h-auto"
          src={getImageUrl('hero-sm')}
          alt="hero-sm"
        />
      </div>
    </>
  )
}

export default Banner
