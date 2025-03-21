import React from 'react'
import { Route, Routes } from 'react-router-dom'
import login from './pages/login/login'
import chat from './pages/chat/chat'
import profileupdate from './pages/profileupdate/profileupdate'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={login}/>
        <Route path='/chat' element={chat}/>
        <Route path='/profileupdate' element={profileupdate}/>
      </Routes>
    </>
  )
}

export default App

