import React from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
