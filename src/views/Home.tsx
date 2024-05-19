import {Icon} from "@iconify/react"
import { Fragment } from "react/jsx-runtime"

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



export default function (){
    return (<>
    <Banner/>
    </>)
}