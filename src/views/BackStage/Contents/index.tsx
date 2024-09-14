/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Breadcrumb,
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  Textarea,
  TextInput,
} from 'flowbite-react'
import type { FC } from 'react'
import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import {
  HiCog,
  HiDotsVertical,
  HiExclamationCircle,
  HiHome,
  HiOutlineExclamationCircle,
  HiPencilAlt,
  HiTrash,
  HiUpload,
} from 'react-icons/hi'
import { useAttractions } from '@/api/attraction'
import { getImageUrl } from '@/utils/index'
// import NavbarSidebarLayout from '../../layouts/navbar-sidebar'
// import { Pagination } from '../users/list'

const EcommerceContentsPage: FC = function () {
  const attractionsApi = useAttractions()
  const [works, setWorks] = useState()
  useEffect(() => {
    async function getAttractions() {
      const result = await attractionsApi.queryWorks()
      setWorks([...result])
      console.log('result', result)
    }
    getAttractions()
  }, [])
  return (
    <>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div className="mb-1 w-full">
          <div className="">
            {/* <Breadcrumb className="mb-4">
              <Breadcrumb.Item href="#">
                <div className="flex items-center gap-x-3">
                  <HiHome className="text-xl" />
                  <span className="dark:text-white">Home</span>
                </div>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/e-commerce/Contents">
                E-commerce
              </Breadcrumb.Item>
              <Breadcrumb.Item>Contents</Breadcrumb.Item>
            </Breadcrumb> */}
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              所有作品
            </h1>
            <div className="block items-center sm:flex">
              {/* <SearchForContents />
            <div className="hidden space-x-1 border-l border-gray-100 pl-2 dark:border-gray-700 md:flex">
              <a
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Configure</span>
                <HiCog className="text-2xl" />
              </a>
              <a
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Delete</span>
                <HiTrash className="text-2xl" />
              </a>
              <a
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Purge</span>
                <HiExclamationCircle className="text-2xl" />
              </a>
              <a
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Settings</span>
                <HiDotsVertical className="text-2xl" />
              </a>
            </div> */}
              <div className="flex w-full items-center sm:justify-end">
                <AddOrEditModal isEditing={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <ContentsTable tableData={works} />
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination /> */}
    </>
  )
}

const SearchForContents: FC = function () {
  return (
    <form className="mb-4 sm:mb-0 sm:pr-3" action="#" method="GET">
      <Label htmlFor="Contents-search" className="sr-only">
        Search
      </Label>
      <div className="relative mt-1 lg:w-64 xl:w-96">
        <TextInput
          id="Contents-search"
          name="Contents-search"
          placeholder="Search for Contents"
        />
      </div>
    </form>
  )
}

const AddContentModal: FC = function () {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Button color="primary" onClick={() => setOpen(!isOpen)}>
        <FaPlus className="mr-3 text-sm" />
        Add Content
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>Add Content</strong>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <Label htmlFor="ContentName">Content name</Label>
                <TextInput
                  id="ContentName"
                  name="ContentName"
                  placeholder='Apple iMac 27"'
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <TextInput
                  id="category"
                  name="category"
                  placeholder="Electronics"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="brand">Brand</Label>
                <TextInput
                  id="brand"
                  name="brand"
                  placeholder="Apple"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="price">Price</Label>
                <TextInput
                  id="price"
                  name="price"
                  type="number"
                  placeholder="$2300"
                  className="mt-1"
                />
              </div>
              <div className="lg:col-span-2">
                <Label htmlFor="Contentable.Celletails">Content details</Label>
                <Textarea
                  id="Contentable.Celletails"
                  name="Contentable.Celletails"
                  placeholder="e.g. 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, Ram 16 GB DDR4 2300Mhz"
                  rows={6}
                  className="mt-1"
                />
              </div>
              <div className="lg:col-span-2">
                <div className="flex w-full items-center justify-center">
                  <label className="flex h-32 w-full cursor-pointer flex-col rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <HiUpload className="text-4xl text-gray-300" />
                      <p className="py-1 text-sm text-gray-600 dark:text-gray-500">
                        Upload a file or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={() => setOpen(false)}>
            Add Content
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const AddOrEditModal: FC = function ({ Content = {}, isEditing = true }) {
  const [isOpen, setOpen] = useState(false)
  const CONTENT = {
    content: '',
    description: '',
    gitHubUrl: '',
    gitPageUrl: '',
    imgLink: '',
    tags: [],
    title: '',
  }

  const [content, setContent] = useState(CONTENT)

  useEffect(() => {
    if (isEditing) {
      setContent(Content)
    }
  }, [Content, isOpen])
  return (
    <>
      <Button color="primary" onClick={() => setOpen(!isOpen)}>
        <HiPencilAlt className="mr-2 text-lg" />
        {`${isEditing ? '編輯' : '新增'}作品`}
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong> {`${isEditing ? '編輯' : '新增'}作品`}</strong>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <Label htmlFor="ContentName">作品名</Label>
                <TextInput
                  id="ContentName"
                  name="ContentName"
                  placeholder='Apple iMac 27"'
                  className="mt-1"
                  value={content.title}
                />
              </div>
              <div>
                <Label htmlFor="category">類別</Label>
                <TextInput
                  id="category"
                  name="category"
                  placeholder="Electronics"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="category">GitHub</Label>
                <TextInput
                  id="github"
                  name="github"
                  placeholder="url"
                  className="mt-1"
                  value={content.gitHubUrl}
                />
              </div>
              <div>
                <Label htmlFor="category">Demo Page</Label>
                <TextInput
                  id="demoPage"
                  name="demoPage"
                  placeholder="url"
                  className="mt-1"
                  value={content.gitPageUrl}
                />
              </div>
              <div className="lg:col-span-2">
                <Label htmlFor="ContentDetails">簡介</Label>
                <Textarea
                  id="ContentDetails"
                  name="ContentDetails"
                  placeholder="e.g. 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, Ram 16 GB DDR4 2300Mhz"
                  rows={2}
                  className="mt-1"
                  value={content.description}
                />
              </div>
              <div className="lg:col-span-2">
                <Label htmlFor="Descriptions">描述</Label>
                <Textarea
                  id="Descriptions"
                  name="Descriptions"
                  placeholder="e.g. 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, Ram 16 GB DDR4 2300Mhz"
                  rows={6}
                  className="mt-1"
                  value={content.content}
                />
              </div>
              <div className="flex space-x-5">
                <div>
                  <img
                    alt={content.imgUrl}
                    src={getImageUrl(content.imgUrl)}
                    className="h-24"
                  />
                  <a href="#" className="cursor-pointer">
                    <span className="sr-only">Delete</span>
                    <HiTrash className="-mt-5 text-2xl text-red-600" />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="flex w-full items-center justify-center">
                  <label className="flex h-32 w-full cursor-pointer flex-col rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <HiUpload className="text-4xl text-gray-300" />
                      <p className="py-1 text-sm text-gray-600 dark:text-gray-500">
                        Upload a file or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={() => setOpen(false)}>
            Save all
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const EditContentModal: FC = function ({ Content }) {
  const [isOpen, setOpen] = useState(false)
  const [content, setContent] = useState(Content)

  useEffect(() => {
    setContent(content)
  }, [Content])
  return (
    <>
      <Button color="primary" onClick={() => setOpen(!isOpen)}>
        <HiPencilAlt className="mr-2 text-lg" />
        編輯作品
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>編輯作品</strong>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <Label htmlFor="ContentName">作品名</Label>
                <TextInput
                  id="ContentName"
                  name="ContentName"
                  placeholder='Apple iMac 27"'
                  className="mt-1"
                  value={content.title}
                />
              </div>
              <div>
                <Label htmlFor="category">類別</Label>
                <TextInput
                  id="category"
                  name="category"
                  placeholder="Electronics"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="category">GitHub</Label>
                <TextInput
                  id="github"
                  name="github"
                  placeholder="url"
                  className="mt-1"
                  value={content.gitHubUrl}
                />
              </div>
              <div>
                <Label htmlFor="category">Demo Page</Label>
                <TextInput
                  id="demoPage"
                  name="demoPage"
                  placeholder="url"
                  className="mt-1"
                  value={content.gitPageUrl}
                />
              </div>
              <div className="lg:col-span-2">
                <Label htmlFor="ContentDetails">描述</Label>
                <Textarea
                  id="ContentDetails"
                  name="ContentDetails"
                  placeholder="e.g. 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, Ram 16 GB DDR4 2300Mhz"
                  rows={6}
                  className="mt-1"
                  value={content.description}
                />
              </div>
              <div className="flex space-x-5">
                <div>
                  <img
                    alt={content.imgUrl}
                    src={getImageUrl(content.imgUrl)}
                    className="h-24"
                  />
                  <a href="#" className="cursor-pointer">
                    <span className="sr-only">Delete</span>
                    <HiTrash className="-mt-5 text-2xl text-red-600" />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="flex w-full items-center justify-center">
                  <label className="flex h-32 w-full cursor-pointer flex-col rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <HiUpload className="text-4xl text-gray-300" />
                      <p className="py-1 text-sm text-gray-600 dark:text-gray-500">
                        Upload a file or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={() => setOpen(false)}>
            Save all
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const DeleteContentModal: FC = function () {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Button color="failure" onClick={() => setOpen(!isOpen)}>
        <HiTrash className="mr-2 text-lg" />
        Delete item
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen} size="md">
        <Modal.Header className="px-3 pt-3 pb-0">
          <span className="sr-only">Delete Content</span>
        </Modal.Header>
        <Modal.Body className="px-6 pb-6 pt-0">
          <div className="flex flex-col items-center gap-y-6 text-center">
            <HiOutlineExclamationCircle className="text-7xl text-red-600" />
            <p className="text-lg text-gray-500 dark:text-gray-300">
              Are you sure you want to delete this Content?
            </p>
            <div className="flex items-center gap-x-3">
              <Button color="failure" onClick={() => setOpen(false)}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setOpen(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

const ContentsTable: FC = function ({ tableData }) {
  useEffect(() => {
    console.log('tableData', tableData)
  }, [tableData])
  return (
    <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
      <Table.Head className="bg-gray-100 dark:bg-gray-700">
        <Table.HeadCell>
          <span className="sr-only">Toggle selected</span>
          <Checkbox />
        </Table.HeadCell>
        <Table.HeadCell>作品名</Table.HeadCell>
        <Table.HeadCell>分類</Table.HeadCell>
        <Table.HeadCell>描述</Table.HeadCell>
        {/* <Table.HeadCell>Price</Table.HeadCell> */}
        <Table.HeadCell>Actions</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        {/* one Row Data */}
        {tableData &&
          tableData?.map((row) => (
            <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <Table.Cell className="w-4 p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                <div className="text-base font-semibold text-gray-900 dark:text-white">
                  {row.title}
                </div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {row.tags.join(', ')}
                </div>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                Vue
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                {row.description}
              </Table.Cell>
              <Table.Cell className="space-x-2 whitespace-nowrap p-4">
                <div className="flex items-center gap-x-3">
                  <AddOrEditModal Content={row} isEditing={true} />
                  <DeleteContentModal />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}

        {/* end */}
      </Table.Body>
    </Table>
  )
}

export default EcommerceContentsPage
