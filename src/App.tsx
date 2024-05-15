import React, { Suspense, useEffect } from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom';
import { DarkThemeToggle } from "flowbite-react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from './views/Layout.tsx'

const DefaultLayout = React.lazy(()=>import('./layout/Layout.tsx'))


function App() {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route path="*" element={<DefaultLayout/>} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
