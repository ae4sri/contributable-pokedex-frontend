import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { IndexPage } from './components/Pages/IndexPage'
import { CreatePage } from './components/Pages/CreatePage'
import { SignInPage } from './components/Pages/SignInPage'
import { SearchPage } from './components/Pages/SearchPage'
import { AdminPage } from './components/Pages/AdminPage'
import { NavBar } from './components/NavBar'

const App = () => {

  const [secretKey, setSecretKey] = useState('')

  return (
    <>
      <Router>
        <NavBar />
        <Routes>

          <Route path="/signin" element={<SignInPage secretKey={secretKey} setSecretKey={setSecretKey} />} />

          <Route path="/admin" element={<AdminPage secretKey={secretKey} />} />

          <Route path="/search" element={<SearchPage />} />

          <Route path="/create" element={<CreatePage />} />

          <Route path="/" element={<IndexPage />} />

        </Routes>
      </Router>
    </>
  )
}

export default App

