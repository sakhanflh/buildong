import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import ConstructionPage from './pages/constructionPage'
import ConstructionDetailsPage from './pages/constructionDetails'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import { UserProvider } from './context/UserContext'
import ProfilePage from './pages/profilePage'
import ShopPage from './pages/shopPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profile/:profileId' element={<ProfilePage/>} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/constructions' element={<ConstructionPage/>}/>
          <Route path='/constructions/:constructionId' element={<ConstructionDetailsPage/>}/>
        </Routes>
      </HashRouter>
    </UserProvider>
  </React.StrictMode>,
)
