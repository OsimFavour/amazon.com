import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Store from './pages/Store'
import ProductView from './pages/ProductView'
import Blog from './pages/Blog'
import BlogView from './pages/BlogView'
import CompareProduct from './pages/CompareProduct'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import TermsAndConditions from './pages/TermsAndConditions'


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='product' element={<Store/>}/>
          <Route path='product/:id' element={<ProductView/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='blog/:id' element={<BlogView/>}/>
          <Route path='compare-product' element={<CompareProduct/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='forgot-password' element={<ForgotPassword/>}/>
          <Route path='reset-password' element={<ResetPassword/>}/>
          <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='refund-policy' element={<RefundPolicy/>}/>
          <Route path='shipping-policy' element={<ShippingPolicy/>}/>
          <Route path='terms-and-conditions' element={<TermsAndConditions/>}/>
        </Route>
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App
