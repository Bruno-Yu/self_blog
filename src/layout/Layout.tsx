
// import { Children } from 'react'
import React, {Suspense} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Menu  from '../components/Ｍenu.tsx'
import Footer from '../components/Footer.tsx'
import routes from '../routes.ts';

export default function () {
    return (
        <main className="container min-h-screen mx-auto max-w-screen-lg">
          <Menu />
              <Routes>
                {routes.map((route, idx)=>{
                  return(
                    route.element && (<Route key={idx} path={route.path} exact={route.exact} name={route.name} element={<route.element/>} />)
                  )
                })}
              </Routes>
          <Footer />
        </main>
      );
}