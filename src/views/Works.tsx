
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const experience = [
    {
        title: '2B經驗',
        content: ['內部監控系統','庫存系統', '採購系統','行銷整合系統'],
    },
    {
        title: '2C經驗',
        content: ['跨國美妝保養電商','個人品牌網站','醫美網站','電子商務']
    }
]



const cardList = [
    {
      imgLink:
        "src/assets/images/work-image1.png",
      title: "星際旅遊訂票平台",
      description: "悠遊宇宙的夢想",
      tags: ["網頁", "響應", "Bootstrap"]
    },
    {
      imgLink:
        "src/assets/images/work-image2.png",
      title: "理財App",
      description: "連動帳戶與行動支付，讓 AI 提供您最好的理財建議",
      tags: ["APP設計", "iOS", "React"]
    },
    {
      imgLink:
        "src/assets/images/work-image3.png",
      title: "醫美診所官網",
      description: "永保青春的秘密，從粹究開始",
      tags: ["網頁設計", "響應式設計", "ＷordPress"]
    },
    {
      imgLink:
        "src/assets/images/work-image4.png",
      title: "美美美早餐店 POS 機 UI Design",
      description: "訂單送單一目瞭然，自動報表分析好輕鬆",
      tags: ["UI 設計", "前端開發", "Wix"]
    },
    {
      imgLink:
        "src/assets/images/work-image5.png",
      title: "電影院訂票系統",
      description: "三步驟完成訂票，電腦手機都支援",
      tags: ["前端開發", "後端支援", "Vue"]
    },
    {
      imgLink:
        "src/assets/images/work-image6.png",
      title: "巧克巧克形象官網設計",
      description: "三步驟完成訂票，電腦手機都支援",
      tags: ["UI設計", "設計系統", "網路電商"]
    }
  ];
  
function Card({ data }) {
return (
    <>
    <li>
        <img
        src={data.imgLink}
        alt={data.imgLink}
        className="w-full h-auto rounded-lg"
        />
        <div className="pt-4 px-2">
        <p className="font-bold text-lg">{data.title}</p>
        <p className="text-[#919191] text-sm">{data.description}</p>
        </div>
        <ul className="flex gap-x-6 gap-y-20 pt-3">
        {data.tags.map((item, idx) => (
            <li key={idx} className="text-xs font-thin bg-[#F1F1F1] rounded-full py-0.5 px-2">
                {item}
            </li>
        ))}
        </ul>
    </li>
    </>
);
}

export function CustomPagination({ currentPage ,totalPage}) {
  // const [currentPage, setCurrentPage] = useState(1);
  // const onPageChange = (page: number) => setCurrentPage(page);
  
  return (
    <>
    <div className="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex items-center h-8 text-sm">
          {Array(totalPage).fill(null).map((e, idx)=> (<><li>
            <NavLink to={'/works'} aria-current={(currentPage === (idx+1))? 'page': false}   className="flex items-center justify-center px-3 h-8 rounded leading-tight text-black active:text-white bg-white active:bg-black hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{idx+1}</NavLink>
            </li></>))}
        </ul>
      </nav>
    </div>
    </>
  )
}

export function ExperienceCard({title, content}) {
    const description = content.join('、')

    return (<>
    <li className="w-full sm:max-w-[300px]">
        <p className="relative text-center text-sm mb-2 text-[#5B5B5B] after:content-[''] after:block after:border-b-[2px] after:border-[#c1c1c1] after:absolute after:w-6 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1  after:z-50">{title}</p>
        <p className="text-center text-[#3B3B3B] text-wrap">{ description}</p>
    </li>
    </>)
}


export default function (){
    return (<>
    <div className="container mx-auto min-[992px] max-w-[1296px] border p-3">
        <div className="py-20 sm:py-32">
            <p className="text-xl text-center leading-relaxed">讓使用者在觀賞與使用的旅程中，發現<span className="bg-[url('src/assets/images/mark.png')] bg-bottom bg-no-repeat p-0">設計的價值</span></p>
            <p className="text-xl text-center leading-relaxed">而我在設計與開發的過程中，看見<span className="bg-[url('src/assets/images/mark.png')] bg-bottom bg-no-repeat p-0">自己的價值</span></p>
            <div>

            </div>
            <ul className="flex flex-col sm:flex-row sm:justify-between w-full gap-x-2 gap-y-4 sm:w-2/3 mx-auto pt-10">
                {
                    experience.map((e, idx)=> <ExperienceCard key={idx} title={e.title} content={e.content} />)
                }
            </ul>
        </div>
        {/* card list */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-10 py-10">
          {cardList.map((item,idx) => (
            <Card key={idx} data={item} />
          ))}
        </ul>
        {/* pagination */}
        <CustomPagination currentPage={1} totalPage={3} />
      </div>
    </>)
}