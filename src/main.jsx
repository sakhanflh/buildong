import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import ShopPage from './pages/shopPage'
import ConstructionPage from './pages/constructionPage'
import ConstructionDetailsPage from './pages/constructionDetails'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/' element={<HomePage/>}/>
        <Route path='/constructions' element={<ConstructionPage/>}/>
        <Route path='/constructions/:constructionId' element={<ConstructionDetailsPage/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
