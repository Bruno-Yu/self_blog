import {Icon} from "@iconify/react"
import { Fragment } from "react/jsx-runtime"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Banner () {
    const imgList = [
        {
            name: 'ig',
            icon: 'mdi:instagram'
        },
        {
            name: 'fb',
            icon: 'mdi:facebook'
        },
        {
            name: 'yt',
            icon: 'mdi:youtube',
        }
    ]

    return (<>
    <div className="flex flex-col-reverse sm:flex-row  sm:justify-between">
        <div className="flex flex-col justify-center items-center sm:w-2/5 sm:px-2.5 ">
            <div>
                <h1 className="text-2xl text-center sm:text-left font-bold mb-2.5">Hi! 我是 Bruno</h1>
                <p className="text-[#5B5B5B] text-center sm:text-left text-sm mb-2">具有 2 年經驗的前端工程師<br/>熱衷於優化使用者的網頁體驗</p>
                <p className="text-[#C1C1C1] text-center sm:text-left text-xs mb-5">WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN</p>
                <div className="flex justify-center sm:justify-start gap-2">
                    {imgList.map((e, idx)=> (<Fragment key={idx}>
                        <a href="#"  className="block">
                        <Icon icon={e.icon} className="text-[#5B5B5B] w-6 h-6" />
                    </a>
                    </Fragment>))}
                </div>
            </div>
        </div>
        <img className="hidden sm:block w-3/5 h-auto" src="src/assets/images/hero-lg.png" alt="hero-lg" />
        <img className="block sm:hidden w-full h-auto" src="src/assets/images/hero-sm.png" alt="hero-sm" />
    </div>
    </>)
}

function Title ({title}: {title:string}) {
    return (<>
        <div className="flex justify-center  mb-12">
            <h2 className="relative text-center text-2xl font-bold bg-white px-2 after:content-[''] after:block after:rounded-full after:h-1 after:w-1 after:absolute after:bg-[#C1C1C1] before:-left-10 before:top-1/2 before:-translate-y-1/2 before:z-10 before:content-[''] before:block before:rounded-full before:h-1 before:w-1 before:absolute before:bg-[#C1C1C1] after:-right-10 after:top-1/2 after:-translate-y-1/2 after:z-10">{title}<span className="w-[170%] bg-[#C1C1C1] absolute -z-[1] -translate-y-1/2 top-1/2 h-[1px] -left-9 " /></h2>
        </div>
    </>)
}


const cardList = [
    {
      imgLink:
        "src/assets/images/article-image1.png",
      title: "Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)",
      tag: "UI/UX 新知",
      date: '2024/02/10'
    },
    {
        imgLink:
          "src/assets/images/article-image2.png",
        title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)",
        tag: "UI/UX 新知",
        date: '2023/11/20'
      },
      {
        imgLink:
          "src/assets/images/article-image3.png",
        title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)",
        tag: "UI/UX 新知",
        date: '2023/10/18'
      },
    {
    imgLink:
        "src/assets/images/article-image4.png",
    title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)",
    tag: "UI/UX 新知",
    date: '2023/10/18'
    },
    {
    imgLink:
        "src/assets/images/article-image5.png",
    title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)",
    tag: "UI/UX 新知",
    date: '2023/10/18'
    },
    {
    imgLink:
        "src/assets/images/article-image6.png",
    title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)",
    tag: "UI/UX 新知",
    date: '2023/10/18'
    },
  ];

function Carousel() {

    return (<>
            <div className="py-10">
                <Title title={'精選文章'} />
                <div className="container mx-auto min-[992px] max-w-[1296px] border p-3">
                    <div className="mx-auto">
                    <Swiper
                    // install Swiper modules
                    modules={[ Pagination, ]}
                    spaceBetween={20}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    >
                        {cardList.map((e, idx)=> (<>
                            <SwiperSlide key={idx}>
                                <div className="flex flex-col gap-y-2">
                                    <img className="rounded-lg w-full h-auto" src={e.imgLink} alt={e.imgLink} />
                                    <p className="font-bold text-lg">{e.title}</p>
                                    <div className="flex justify-between">
                                        <div className="text-xs font-thin bg-[#F1F1F1] rounded-full py-0.5 px-2">
                                            {e.tag}
                                        </div>
                                        <div className="text-xs font-thin">{e.date}</div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        </>))}
                    </Swiper>
                    </div>
                </div>
            </div> 
    </>)
}


export default function (){
    return (<>
    <Banner/>
    <Carousel/>
    </>)
}