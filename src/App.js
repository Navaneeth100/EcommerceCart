import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
import { AppProvider } from './pages/Context';


const App = () => {

  return (
    <AppProvider>
    <div>
      <Header />
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/home' element={<Home/>} />
      </Routes>
      <Footer />
    </div>
    </AppProvider>
  )
}

export default App