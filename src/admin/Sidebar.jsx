import React from 'react'

import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className=' border h-screen  p-10 bg-blue-800 text-white   '>
      <li className='mb-7 mt-20'><Link to={"/admin"} >  ViewContact</Link></li>
      <li className='mb-7'><Link to={"addCategory"} >  AddCategory</Link></li>
      <li className='mb-7'><Link to={"viewCategory"}>  ViewCategory</Link></li>
      <li className='mb-7'><Link to={"addclass"}>  AddClass</Link></li>
      <li className='mb-7'><Link to={"viewclasses"}>  ViewClasses</Link></li>
            <li className='mb-7'><Link to={"viewregister"}>  ViewRegister</Link></li>




    </div>
  )
}

export default Sidebar
