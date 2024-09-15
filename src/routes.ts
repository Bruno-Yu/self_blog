import React from 'react'

const Home = React.lazy(() => import('./views/FrontStage/Home/index'))
const Works = React.lazy(() => import('./views/FrontStage/Works/index'))
const Login = React.lazy(() => import('./views/FrontStage/Login/index'))
const Contents = React.lazy(() => import('./views/BackStage/Works/index'))
const Users = React.lazy(() => import('./views/BackStage/Users/index'))

const routes = [
  // {path: '/', exact: true, name: 'layout'},
  {
    path: `${import.meta.env.BASE_URL}`,
    exact: true,
    name: 'Home',
    element: Home,
    title: '首頁',
  },
  {
    path: `${import.meta.env.BASE_URL}works`,
    exact: true,
    name: 'Works',
    element: Works,
    title: '作品集',
  },
  {
    path: `${import.meta.env.BASE_URL}service`,
    exact: true,
    name: 'Service',
    element: Home,
    title: '服務項目',
  },
  {
    path: `${import.meta.env.BASE_URL}blog`,
    exact: true,
    name: 'Blog',
    element: Home,
    title: '部落格',
  },
  {
    path: `${import.meta.env.BASE_URL}contact`,
    exact: true,
    name: 'Contact',
    element: Home,
    title: '聯絡我',
  },
  {
    path: `${import.meta.env.BASE_URL}login`,
    exact: true,
    name: 'Login',
    element: Login,
    title: '登入',
  },
  {
    path: `${import.meta.env.BASE_URL}users`,
    exact: true,
    name: 'Users',
    element: Users,
    title: '使用者管理',
  },
  {
    path: `${import.meta.env.BASE_URL}contents`,
    exact: true,
    name: 'Contact',
    element: Contents,
    title: '編輯內容',
  },
]

export const frontRoutes = [
  // {path: '/', exact: true, name: 'layout'},
  {
    path: `${import.meta.env.BASE_URL}`,
    exact: true,
    name: 'Home',
    element: Home,
    title: '首頁',
  },
  {
    path: `${import.meta.env.BASE_URL}works`,
    exact: true,
    name: 'Works',
    element: Works,
    title: '作品集',
  },
  // {
  //   path: `${import.meta.env.BASE_URL}service`,
  //   exact: true,
  //   name: 'Service',
  //   element: Home,
  //   title: '服務項目',
  // },
  {
    path: 'https://bruno-yu.github.io/bruno_blog/',
    exact: true,
    name: 'Blog',
    // element: Home,
    title: '部落格',
  },
  // {
  //   path: `${import.meta.env.BASE_URL}contact`,
  //   exact: true,
  //   name: 'Contact',
  //   element: Home,
  //   title: '聯絡我',
  // },
  {
    path: `${import.meta.env.BASE_URL}login`,
    exact: true,
    name: 'Login',
    element: Login,
    title: '登入',
  },
]

export const backRoutes = [
  // {path: '/', exact: true, name: 'layout'},
  {
    path: `${import.meta.env.BASE_URL}users`,
    exact: true,
    name: 'Users',
    element: Users,
    title: '使用者管理',
  },
  {
    path: `${import.meta.env.BASE_URL}contents`,
    exact: true,
    name: 'Contact',
    element: Contents,
    title: '編輯內容',
  },
]

export default routes
