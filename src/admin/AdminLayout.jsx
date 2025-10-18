
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function AdminLayout() {
  return (
    <div className='flex '>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  )
}

export default AdminLayout
