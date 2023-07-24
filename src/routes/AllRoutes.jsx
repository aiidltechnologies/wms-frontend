import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Request from '../pages/Request'
import AdminTable from '../pages/AdminTable'
import DeveloperTable from '../pages/DeveloperTable'
import AdminLogin from '../pages/AdminLogin'
import DeveloperLogin from '../pages/DeveloperLogin'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/admin/request' element={<Request/>}  />
            <Route path='/admin/login' element={<AdminLogin/>}  />
            <Route path='/developer/login' element={<DeveloperLogin/>}  />
            <Route path='/developer/request/status/table' element={<DeveloperTable/>}  />
            <Route path='/admin/request/status/table' element={<AdminTable/>}  />
        </Routes>
    </div>
  )
}

export default AllRoutes