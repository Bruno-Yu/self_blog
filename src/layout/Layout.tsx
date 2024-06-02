
// import { Children } from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Menu  from '../components/Ｍenu.tsx'
import Footer from '../components/Footer.tsx'
import routes from '../routes.ts';

export default function () {
    return (
        <div className="container min-h-screen mx-auto min-[992px] max-w-[1296px]">
          <Menu />      
              <Routes>
                {routes.map((route, idx)=>{
                  return(
                    route.element && (<Route key={idx} path={route.path} exact={route.exact} name={route.name} element={<route.element/>} />)
                  )
                })}
                {/* <Route path="/" element={<Navigate to="home" replace />} /> */}
              </Routes>
          <Footer />

        </div>
      );
}