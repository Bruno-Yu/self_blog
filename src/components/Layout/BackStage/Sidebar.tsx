import { Sidebar, TextInput } from 'flowbite-react'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from 'react-icons/hi'

const BackStageSidebar: FC = function () {
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    const newPage = window.location.pathname

    setCurrentPage(newPage)
  }, [setCurrentPage])

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <div className="flex h-full flex-col justify-between py-2">
        <div>
          <form className="pb-3 md:hidden">
            <TextInput
              icon={HiSearch}
              type="search"
              placeholder="Search"
              required
              size={32}
            />
          </form>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="contents"
                icon={HiShoppingBag}
                className={
                  '/contents' === currentPage
                    ? 'bg-gray-100 dark:bg-gray-700'
                    : ''
                }
              >
                Contents
              </Sidebar.Item>
              <Sidebar.Item
                href="users"
                icon={HiShoppingBag}
                className={
                  '/users' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''
                }
              >
                Users
              </Sidebar.Item>

              <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                Sign in
              </Sidebar.Item>
              <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                Sign up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  )
}

export default BackStageSidebar
