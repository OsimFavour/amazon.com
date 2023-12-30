import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About/About'
import Contact from './pages/Contact'
import Store from './pages/Store'
import Blog from './pages/Blog'
import CompareProduct from './pages/CompareProduct'


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='store' element={<Store/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='compare-product' element={<CompareProduct/>}/>
        </Route>
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App
