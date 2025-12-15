import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PatientDetail from './pages/PatientDetail'

import SignUp from './pages/SignUp'

export default function App(){
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">

      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/patient/:id' element={<PatientDetail/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </div>
  )
}
