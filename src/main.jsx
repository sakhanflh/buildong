import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
