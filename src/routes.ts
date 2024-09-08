import React from 'react'

const Home = React.lazy(() => import('./views/Home/index'))
const Works = React.lazy(() => import('./views/Works/index'))

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
]

export default routes
