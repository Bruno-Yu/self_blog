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
    <div className="flex flex-col items-center pt-24 xl:pt-36 px-6 lg:h-screen lg:gap-y-12">
      <Card
        horizontal
        imgSrc={getImageUrl('article-image6')}
        imgAlt=""
        className="w-[80%] max-w-[1000px]  md:max-w-screen [&>img]:hidden md:[&>img]:w-80 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
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
              readOnly
              value="admin@gmail.com"
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">密碼</Label>
            <TextInput
              id="password"
              name="password"
              placeholder="••••••••"
              readOnly
              value="12345678"
              type="password"
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Checkbox id="rememberMe" checked name="rememberMe" />
              <Label htmlFor="rememberMe">記住我</Label>
            </div>
            {/* <a
              href="#"
              className="w-1/2 text-right text-sm text-primary-600 dark:text-primary-300"
            >
              忘記密碼?
            </a> */}
          </div>
          <div className="mb-6 border">
            <Button
              type="button"
              className="w-full bg-slate-950"
              onClick={login}
            >
              登入
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default SignInPage
