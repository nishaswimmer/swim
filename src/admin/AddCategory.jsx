import React, { useState } from 'react'

function AddCategory() {
  const BACKEND_API = "https://swim-6.onrender.com"
  const [category, setCategory] = useState("")
  function saveCategory() {
    fetch(`${BACKEND_API}/api/addCategory`, {
      method: "post",
      body: JSON.stringify({ category }),
      headers: {
        "content-type": "application/json"
      }
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch((error) => { console.log(error) })

  }
  return (

    <>




      <div className='flex w-full justify-center items-center bg-blue-500'>
        <div className='  bg-blue-100 h-1/2 pl-20 pr-20  pt-10 '>
          <h1 className=' flex justify-center text-blue-800 font-bold text-2xl pb-5' >Add Category</h1>
          <div className=''>
            <input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} placeholder='Enter category' className=' cursor-pointer  p-2 mt-2' />
            <div className='mt-4 cursor-pointer  flex justify-center'>
              <button onClick={saveCategory} className='bg-blue-800 hover:text-blue-800 hover:bg-white text-white pl-3 pr-3 rounded pt-1 pb-1'>Add Category</button>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default AddCategory
