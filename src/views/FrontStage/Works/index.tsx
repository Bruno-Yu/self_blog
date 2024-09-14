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
    imgLink: 'work-image1',
    title: '星際旅遊訂票平台',
    description: '悠遊宇宙的夢想',
    tags: ['網頁', '響應', 'Bootstrap'],
    gitHubUrl: 'https://github.com/',
    gitPageUrl: 'https://github.com/',
    content:
      'STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。',
    imgUrl: 'modal-image1',
  },
  {
    imgLink: 'work-image2',
    title: '理財App',
    description: '連動帳戶與行動支付，讓 AI 提供您最好的理財建議',
    tags: ['APP設計', 'iOS', 'React'],
    gitHubUrl: 'https://github.com/',
    gitPageUrl: 'https://github.com/',
    content:
      'STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。',
    imgUrl: 'modal-image1',
  },
  {
    imgLink: 'work-image3',
    title: '醫美診所官網',
    description: '永保青春的秘密，從粹究開始',
    tags: ['網頁設計', '響應式設計', 'ＷordPress'],
    gitHubUrl: 'https://github.com/',
    gitPageUrl: 'https://github.com/',
    content:
      'STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。',
    imgUrl: 'modal-image1',
  },
  {
    imgLink: 'work-image4',
    title: '美美美早餐店 POS 機 UI Design',
    description: '訂單送單一目瞭然，自動報表分析好輕鬆',
    tags: ['UI 設計', '前端開發', 'Wix'],
    gitHubUrl: 'https://github.com/',
    gitPageUrl: 'https://github.com/',
    content:
      'STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。',
    imgUrl: 'modal-image1',
  },
  {
    imgLink: 'work-image5',
    title: '電影院訂票系統',
    description: '三步驟完成訂票，電腦手機都支援',
    tags: ['前端開發', '後端支援', 'Vue'],
    gitHubUrl: 'https://github.com/',
    gitPageUrl: 'https://github.com/',
    content:
      'STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。',
    imgUrl: 'modal-image1',
  },
  {
    imgLink: 'work-image6',
    title: '巧克巧克形象官網設計',
    description: '三步驟完成訂票，電腦手機都支援',
    tags: ['UI設計', '設計系統', '網路電商'],
    gitHubUrl: 'https://github.com/',
    gitPageUrl: 'https://github.com/',
    content:
      'STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。',
    imgUrl: 'modal-image1',
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
        <div className="py-20 sm:py-32">
          <p className="text-xl text-center leading-relaxed">
            讓使用者在觀賞與使用的旅程中，發現
            <span className="bg-[url('src/assets/images/mark.png')] bg-bottom bg-no-repeat p-0">
              設計的價值
            </span>
          </p>
          <p className="text-xl text-center leading-relaxed">
            而我在設計與開發的過程中，看見
            <span className="bg-[url('src/assets/images/mark.png')] bg-bottom bg-no-repeat p-0">
              自己的價值
            </span>
          </p>
          <div></div>
          <ul className="flex flex-col sm:flex-row sm:justify-between w-full gap-x-2 gap-y-4 sm:w-2/3 mx-auto pt-10">
            {EXPERIENCES.map((e, idx) => (
              <ExperienceCard key={idx} title={e.title} content={e.content} />
            ))}
          </ul>
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
