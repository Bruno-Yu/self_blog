/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react'
import type { FC } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '@/store/user-slice'
import { Link, useNavigate } from 'react-router-dom'
import { Local } from '@/utils/index'
import { getImageUrl } from '@/utils/index'

const SignInPage: FC = function () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = () => {
    dispatch(userActions.toggle())
    Local.set('isLogin', true)
    navigate('/self_blog/contents')
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <div className="my-6 flex items-center gap-x-1 lg:my-0">
        {/* <img
          alt="Flowbite logo"
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-12"
        /> */}
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Manage Blog
        </span>
      </div>
      <Card
        horizontal
        imgSrc={getImageUrl('article-image6')}
        imgAlt=""
        className="max-w-5 md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-64 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          登入
        </h1>
        <form>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">帳號</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">密碼</Label>
            <TextInput
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Checkbox id="rememberMe" name="rememberMe" />
              <Label htmlFor="rememberMe">記住我</Label>
            </div>
            <a
              href="#"
              className="w-1/2 text-right text-sm text-primary-600 dark:text-primary-300"
            >
              忘記密碼?
            </a>
          </div>
          <div className="mb-6 border">
            <Button type="button" className="w-full" onClick={login}>
              登入
            </Button>
          </div>
          {/* <p className="text-sm text-gray-500 dark:text-gray-300">
            Not registered?&nbsp;
            <a href="#" className="text-primary-600 dark:text-primary-300">
              Create account
            </a>
          </p> */}
        </form>
      </Card>
    </div>
  )
}

export default SignInPage
