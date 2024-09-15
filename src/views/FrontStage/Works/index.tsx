import { useRef, useState, useEffect } from 'react'
import Card from '../../../components/Works/Card'
import ExperienceCard from '../../../components/Works/ExperienceCard'
import Pagination from '../../../components/Works/Pagination'
import Modal from '@/components/common/Modal'
import ModalContent from '../../../components/Works/ModalContent'
import { useAttractions } from '@/api/attraction'

const EXPERIENCES = [
  {
    title: '2B經驗',
    content: ['內部監控系統', '庫存系統', '採購系統', '行銷整合系統'],
  },
  {
    title: '2C經驗',
    content: ['跨國美妝保養電商', '個人品牌網站', '醫美網站', '電子商務'],
  },
]

const WORKS = [
  {
    imgLink: 'https://i.imgur.com/OehaZfu.jpeg',
    title: 'NFT GEL',
    description: '販售 NFT 網站的仿做，嘗試刻劃的練習作品',
    tags: ['切版', 'ejs', 'gulp', 'Bootstrap5'],
    gitHubUrl: 'https://github.com/Bruno-Yu/NFT_GEL.git',
    gitPageUrl: 'https://bruno-yu.github.io/NFT_GEL/',
    content:
      'STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。',
    imgUrl: 'https://i.imgur.com/OehaZfu.jpeg',
  },
  {
    imgLink: 'https://i.imgur.com/OJ9Edmt.jpeg',
    title: 'GrandMaSam Dine',
    description:
      '山姆大嬸餐館，獨樹一格的菜餚與經營方式，一定讓體驗過的您難以忘懷',
    tags: ['前後台', , 'Vue3', 'Vue_cli', 'Bootstrap5'],
    gitHubUrl: 'https://github.com/Bruno-Yu/GrandMaSam_Diner_renewed.git',
    gitPageUrl: 'https://bruno-yu.github.io/GrandMaSam_Diner_renewed/',
    content:
      '獨立專案，前後台分離架構，單頁應用（SPA），實現 CRUD 操作，響應式設計，內容管理功能，串接 RESTful AP。',
    imgUrl: 'https://i.imgur.com/OJ9Edmt.jpeg',
  },
  {
    imgLink: 'https://i.imgur.com/wYioffJ.jpeg',
    title: 'THE F2E 2022',
    description: 'THE F2E 2022 黑客松',
    tags: ['ejs', 'gulp', 'Tailwind', 'GSAP', 'AOS', 'Lottie'],
    gitHubUrl: 'https://github.com/Bruno-Yu/TheF2E_2022_week1.git',
    gitPageUrl: 'https://bruno-yu.github.io/TheF2E_2022_week1/',
    content:
      'STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。',
    imgUrl: 'https://i.imgur.com/wYioffJ.jpeg',
  },
  {
    imgLink: 'https://i.imgur.com/jSuGlRX.png',
    title: 'THE F2E 2022',
    description: 'THE F2E 2022 點點簽',
    tags: [
      'Vue 3',
      'Vue CLI',
      'Pinia',
      'Tailwind',
      'Tailwind Elements',
      'pdf.js',
      'fabric.js',
      'jspdf.js',
    ],
    gitHubUrl: 'https://github.com/Bruno-Yu/TheF2E_2022_DotSign.git',
    gitPageUrl: 'https://bruno-yu.github.io/TheF2E_2022_DotSign/#/',
    content:
      'STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。',
    imgUrl: 'https://i.imgur.com/jSuGlRX.png',
  },
]

export default function () {
  const dialog = useRef()
  const [dialogContent, setDialogContent] = useState({})
  const handleClick = (item) => {
    setDialogContent(item)
    dialog.current.open()
  }

  const attractionsApi = useAttractions()

  useEffect(() => {
    async function getAttractions() {
      const result = await attractionsApi.queryWorks()
      console.log('result', result)
    }
    getAttractions()
  }, [])
  return (
    <>
      <div className="container mx-auto min-[992px] max-w-[1296px] p-3">
        <div className="py-10">
          <p className="text-xl text-center leading-relaxed">
            透過不斷解決問題和精進自己，發現
            <span className="bg-[url('src/assets/images/mark.png')] bg-bottom bg-no-repeat p-0">
              自身的成長與價值
            </span>
          </p>
          <div></div>
          {/* <ul className="flex flex-col sm:flex-row sm:justify-between w-full gap-x-2 gap-y-4 sm:w-2/3 mx-auto pt-10">
              {EXPERIENCES.map((e, idx) => (
                <ExperienceCard key={idx} title={e.title} content={e.content} />
              ))}
            </ul> */}
        </div>
        {/* card list */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-10 py-10">
          {WORKS.map((item, idx) => (
            <Card key={idx} data={item} onClick={() => handleClick(item)} />
          ))}
        </ul>
        {/* pagination */}
        <Pagination currentPage={1} totalPage={3} />
      </div>
      <Modal ref={dialog}>
        <ModalContent content={dialogContent} />
      </Modal>
    </>
  )
}
