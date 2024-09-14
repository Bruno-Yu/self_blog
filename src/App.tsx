import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DarkThemeToggle } from 'flowbite-react'
import { Local } from '@/utils/index'
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from '@/store/user-slice'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from './views/Layout.tsx'

const DefaultLayout = React.lazy(() => import('./layout/Layout.tsx'))

function App() {
  const dispatch = useDispatch()
  const isLogin = useSelector((state) => state.user.isLogin)

  useEffect(() => {
    if (typeof Local.get('isLogin') === 'boolean') {
      dispatch(userActions.updateLoginState(Local.get('isLogin')))
    } else {
      Local.set('isLogin', isLogin)
    }
  }, [dispatch, isLogin])
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
