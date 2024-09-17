import { Sidebar, TextInput } from 'flowbite-react'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { MdWorkspacesOutline } from 'react-icons/md'

const BackStageSidebar: FC = function () {
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    const newPage = window.location.pathname

    setCurrentPage(newPage)
  }, [setCurrentPage])

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown"
      className="h-screen"
    >
      <div className="flex h-full flex-col justify-between py-2">
        <div>
          {/* <form className="pb-3 md:hidden">
            <TextInput
              icon={HiSearch}
              type="search"
              placeholder="Search"
              required
              size={32}
            />
          </form> */}
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="contents"
                icon={MdWorkspacesOutline}
                className={
                  '/self_blogs/contents' === currentPage
                    ? 'bg-gray-100 dark:bg-gray-700'
                    : ''
                }
              >
                作品
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  )
}

export default BackStageSidebar
