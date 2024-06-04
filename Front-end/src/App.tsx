import { Children, useState } from 'react'
import { BrowserRouter, RouterProvider, Route,Routes } from 'react-router-dom'
import './App.css'
import useRoutes from './routes'
import ReactDOM from 'react-dom'




function App() {
  
  const routes = useRoutes();

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} 
          
            />
          ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
