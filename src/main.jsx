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
import AdminPage from './pages/adminPage'
import OrderSumPage from './pages/orderSumPage'
import ProjectPage from './pages/projectPage'
import CartPage from './pages/cartPage'
import OrderDetailLayout from './components/layouts/profile/OrderDetailLayout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profile/:profileId' element={<ProfilePage/>} />
          <Route path='/profile/:profileId/:statusId' element={<ProfilePage/>} />
          <Route path='/project' element={<ProjectPage/>} />
          <Route path='/:orderId' element={<OrderDetailLayout/>} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/constructions' element={<ConstructionPage/>}/>
          <Route path='/constructions/:constructionId' element={<ConstructionDetailsPage/>}/>
          <Route path='/constructions/:constructionId/checkout' element={<OrderSumPage/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </HashRouter>
    </UserProvider>
  </React.StrictMode>,
)
