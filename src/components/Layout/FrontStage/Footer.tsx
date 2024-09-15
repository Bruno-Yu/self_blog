import { Icon } from '@iconify/react'
import { Fragment } from 'react/jsx-runtime'
// import { getImageUrl } from "../utils/index"

export default function () {
  const FOOTER_LIST = [
    {
      name: '填寫表單',
      icon: 'mdi:youtube',
    },
    {
      name: 'hexschool_demo',
      icon: 'mdi:instagram',
    },
    {
      name: 'hexschoolTW',
      icon: 'mdi:facebook',
    },
  ]

  return (
    <>
      {/* <footer className="bg-[url('assets/images/footer-bg-lg.png')] sm:bg-[url('assets/images/footer-bg-lg.png')] bg-cover">
        <div className="container mx-auto min-[992px] max-w-[1296px] px-2 sm:px-4 py-8 flex flex-col items-center gap-y-2 sm:flex-row sm:justify-between">
          <div className="">
            <p className="text-xl text-center sm:text-left font-bold mb-2">
              Bruno
            </p>
            <p className="text-[#3B3B3B] text-sm mb-2">
              若有數位產品設計和開發相關問題
              <br />
              歡迎填單，或直接跟我聯絡
            </p>
            <p className="text-[#919191] text-center sm:text-left text-xs">
              bruno@gmail.com
            </p>
          </div>
          <ul>
            {FOOTER_LIST.map((e, idx) => (
              <Fragment key={idx}>
                <li className="group">
                  <a
                    href="#"
                    className="flex items-center py-2 px-6 rounded border border-1 shadow  group-hover:bg-black"
                  >
                    <Icon
                      icon={e.icon}
                      className="text-[#5B5B5B] group-hover:text-white w-6 h-6 pr-2"
                    />
                    <p className="text-[#3B3B3B] group-hover:text-white">
                      {e.name}
                    </p>
                  </a>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
      </footer> */}
      <footer className="">
        <div className="container mx-auto min-[992px] max-w-[1296px] px-2 py-4 flex flex-col items-center gap-y-2 justify-center  border-t border-gray-200">
          <div className="flex gap-5 items-center">
            <p className="text-xl text-center sm:text-left font-bold mb-2">
              Bruno
            </p>
            <div>
              <p className="text-[#3B3B3B] text-sm mb-2">
                若有數位產品開發與合作等相關問題，歡迎直接跟我聯絡
              </p>
              <p className="text-[#919191] text-center sm:text-left text-xs">
                bruno@gmail.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
