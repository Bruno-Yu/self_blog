import React from 'react';


const Home = React.lazy(()=> import('./views/Home'))
const Works = React.lazy(()=> import('./views/Works'))

const routes = [
    // {path: '/', exact: true, name: 'layout'},
    {path: '/', exact: true, name: 'Home', element: Home},
    {path: '/works', exact: false, name: 'Works', element: Works}
]

export default routes;