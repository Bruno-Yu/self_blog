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
  content: '是名前端開發者',
  about: '具有 2 年經驗的前端工程師\n熱衷於優化使用者的網頁體驗 ',
  hashTags: ['WEB DEVELOPMENT', 'FRONTEND'],
  // avatar: {
  //   pc: `${imgPath}/images/avatar.webp`,
  //   mobile: `${imgPath}/images/avatar.webp`,
  // },
}

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
