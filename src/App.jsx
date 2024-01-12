import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
// import SignIn from './pages/SignInPage'
import Header from './components/header/Header'

import SignInPage from './pages/SignInPage'
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sign' element={<SignInPage/>}/>
      </Routes>
    </Router>
  )
}

export default App