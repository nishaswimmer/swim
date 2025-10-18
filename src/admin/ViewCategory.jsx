import React, { useEffect, useState } from 'react'

function ViewCategory() {
  const [allCategory, setAllCategory] = useState([])

  async function getCategory() {
    try {
      let res = await fetch("http://localhost:4001/api/getCategory");
      let data = await res.json();
      setAllCategory(data.allCategory);
    } catch (error) {

      console.log(error);
    }
  }
  useEffect(() => {
    getCategory()
  }, [])

  async function deleteCategory(id) {
    const ans= confirm("Data Delete?")
if (ans){
  
    try {

      let res = await fetch(`http://localhost:4001/api/deleteCategory/${id}`);
      let data = await res.json();
      if (res.ok) {
        getCategory()
      }

    } catch (error) {
      console.log(error);
    }
  }
}   
  return (
    <div className='w-full flex justify-center '>
    <div>
        <p className=' flex justify-center items-center font-bold text-3xl text-blue-600 mt-10 mb-5 drop-shadow-lg'>View Category</p>
      <table className='class="table-auto  border  border-gray-200 mr-20'>
        <thead>
          <tr >

            <th className="border border-gray-200 px-4  text-white bg-blue-500 py-2">Srno</th>
            <th className="border border-gray-200 px-4 text-white bg-blue-500 py-2">Name</th>
            <th className="border border-gray-200 px-4 text-white  bg-blue-500 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allCategory.map((val, idx) => {
              return (
                <tr key={val._id}>
                  <td className="border bg-blue-100 border-gray-200 px-4 py-2">{idx + 1}</td>

                  <td className="border bg-blue-100 border-gray-200 px-4 py-2">{val.category}</td>

                  <td><button className='bg-red-500  text-white p-2 rounded-2xl' onClick={() => { deleteCategory(val._id) }}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>


    </div>
  )
}

export default ViewCategory
