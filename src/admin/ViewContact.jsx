import React, { useEffect, useState } from 'react'
import axios from 'axios'

function viewContact() {
  const [allContact, setAllContact] = useState([])
  async function getAllData() {
    try {
      const res = await axios.get("http://localhost:4001/api/Viewcontact");
      setAllContact(res.data.allContact)


    } catch (error) {
      console.log(error)
      alert(error)

    }
  }
  useEffect(() => {
    getAllData()
  }, [])


  async function deleteContact(e){
  
   const _id  =   e.target.id
    const ans=confirm("Data Delete?")
    if(ans){
       try {
        const res =  await axios.delete(`http://localhost:4001/api/deleteContact/${_id}`)
        alert(res.data.msg)
        getAllData()
      } catch (error) {
        console.log(error)
      }


    }

      console.log(_id)
  }
  
  return (
  <div className='w-full flex justify-center  '>
<div >
     <p className='font-bold flex justify-center text-4xl mt-15 mb-10 text-blue-600 '> View Contact</p>
      <table className=' class="table-auto mr-20 "'>
        <thead>
          <tr>
            <th  className=" border-gray-200 px-4 bg-blue-500 text-white py-2">Srno</th>
            <th className="border border-gray-200 px-4  bg-blue-500 text-white py-2">Name</th>
            <th className="border border-gray-200 px-4  bg-blue-500 text-white py-2">Lastname</th>
            <th className="border border-gray-200 px-4 bg-blue-500 text-white py-2">Email</th>
            <th className="border border-gray-200 px-4  bg-blue-500 text-white py-2">Phone</th>
            <th className="border border-gray-200 px-4  bg-blue-500  text-white py-2"> Subject</th>
            <th className="border border-gray-200 px-4  bg-blue-500 text-white  py-2">Message</th>
              <th className="border border-gray-200 px-4  bg-blue-500 text-white py-2">Action</th>
              
          </tr>
        </thead>
        <tbody>
          {
            allContact.map((val, idx) => {
              return (
                <tr>
                  <td className="border border-gray-200 px-4   py-2">{idx + 1}</td>

                  <td className="border border-gray-200 px-4 py-2">{val.name}</td>
                  <td className="border border-gray-200 px-4 py-2">{val.lastname}</td>
                  <td className="border border-gray-200 px-4 py-2">{val.email}</td>

                  <td className="border border-gray-200 px-4 py-2">{val.phone}</td>
                  <td className="border border-gray-200 px-4 py-2">{val.subject}</td>
                  <td className="border border-gray-200 px-4 py-2">{val.message}</td>
                  <td><button className='bg-red-500 text-white p-2 rounded-2xl' id={val._id} onClick={deleteContact}>Delete</button></td>
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

export default viewContact
