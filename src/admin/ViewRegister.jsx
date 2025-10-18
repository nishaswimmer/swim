import React, { useState, useEffect } from 'react'

import axios from 'axios';
function ViewRegister() {
  const [register, setRegister] = useState([])
  async function getAllData() {
    try {
      const res = await axios.get("http://localhost:4001/api/ViewRegister");
      setRegister(res.data.allRegister)

    } catch (error) {
      console.log(error)
      alert(error)

    }
  }
  useEffect(() => {
    getAllData()
  }, [])


  async function deleteRegister(e) {
    const ans=confirm("Data Delete ?")
    if (ans){
const _id = e.target.id
    console.log(_id)
    try {
      const res = await axios.delete(`http://localhost:4001/api/deleteRegister/${_id}`)
      alert(res.data.msg)
      getAllData()
    } catch (error) {
      console.log(error)
    }

  }
    }
    
  return (
    <div className='flex justify-center w-full'>
        <div>
      <p className='font-bold  text-4xl flex justify-center mt-5 mb-5  text-blue-600'> View Register</p>
      <table className='class="table-auto border border-gray-50  "'>
        <thead>
          <tr >

            <th className="border border-gray-50  bg-blue-500 text-white px-4 py-2">Srno</th>
            <th className="border border-gray-50  bg-blue-500 text-white px-4 py-2">Name</th>
            <th className="border border-gray-50  bg-blue-500 text-white px-4 py-2">Lastname</th>
            <th className="border border-gray-50 bg-blue-500 text-white px-4 py-2">Email</th>
            <th className="border border-gray-50  bg-blue-500 text-white px-4 py-2">Town</th>
            <th className="border border-gray-50 bg-blue-500 text-white px-4 py-2">ZipCode</th>
            <th className="border border-gray-50 bg-blue-500 text-white px-4 py-2">Phone Number</th>
            <th className="border border-gray-50 bg-blue-500 text-white px-4 py-2">Date</th>
            <th className="border border-gray-50 bg-blue-500 text-white px-4 py-2">Course Categorty</th>


            <th className="border  bg-blue-500 text-white border-gray-50 px-4 py-2">Action</th>

          </tr>
        </thead>
        <tbody>
          {
            register.map((val, idx) => {
              return (
                <tr>
                  <td className="border border-gray-50 px-4 py-2">{idx + 1}</td>

                  <td className="border border-gray-50 px-4 py-2">{val.userName}</td>
                  <td className="border border-gray-50 px-4 py-2">{val.lastname}</td>
                  <td className="border border-gray-50 px-4 py-2">{val.userEmail}</td>

                  <td className="border border-gray-50 px-4 py-2">{val.town}</td>
                  <td className="border border-gray-50 px-4 py-2">{val.zipcode}</td>
                  <td className="border border-gray-50 px-4 py-2">{val.phone}</td>
                  <td className="border border-gray-50 px-4 py-2">{val.date}</td>
                  <td className="border border-gray-50 px-4 py-2">{val.course.category}</td>
                  <td><button className='bg-red-500 text-white p-2 rounded-2xl' id={val._id} onClick={deleteRegister}>Delete</button></td>
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

export default ViewRegister


// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function ViewRegister() {
//   const [register, setRegister] = useState([])

//   async function getAllData() {
//     try {
//       const res = await axios.get("http://localhost:4001/api/ViewRegister");
//       setRegister(res.data.allRegister)
//     } catch (error) {
//       console.log(error)
//       alert("Failed to fetch data.")
//     }
//   }

//   useEffect(() => {
//     getAllData()
//   }, [])

//   async function deleteRegister(e) {
//     const _id = e.target.id
//     if (!window.confirm("Are you sure you want to delete this record?")) return;

//     try {
//       const res = await axios.delete(`http://localhost:4001/api/deleteRegister/${_id}`)
//       alert(res.data.msg)
//       getAllData()
//     } catch (error) {
//       console.log(error)
//       alert("Error deleting record.")
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-6">
//       <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl p-6 border border-blue-300">
//         <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700 tracking-wide">
//           🌊 View Register
//         </h1>

//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-blue-300 rounded-lg">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="px-4 py-3 text-left">Sr.No</th>
//                 <th className="px-4 py-3 text-left">Name</th>
//                 <th className="px-4 py-3 text-left">Lastname</th>
//                 <th className="px-4 py-3 text-left">Email</th>
//                 <th className="px-4 py-3 text-left">Town</th>
//                 <th className="px-4 py-3 text-left">Zip Code</th>
//                 <th className="px-4 py-3 text-left">Phone</th>
//                 <th className="px-4 py-3 text-left">Date</th>
//                 <th className="px-4 py-3 text-left">Course Category</th>
//                 <th className="px-4 py-3 text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {register.length > 0 ? (
//                 register.map((val, idx) => (
//                   <tr
//                     key={val._id}
//                     className="hover:bg-blue-50 transition-colors duration-200"
//                   >
//                     <td className="border border-blue-200 px-4 py-3">{idx + 1}</td>
//                     <td className="border border-blue-200 px-4 py-3">{val.userName}</td>
//                     <td className="border border-blue-200 px-4 py-3">{val.lastname}</td>
//                     <td className="border border-blue-200 px-4 py-3">{val.userEmail}</td>
//                     <td className="border border-blue-200 px-4 py-3">{val.town}</td>
//                     <td className="border border-blue-200 px-4 py-3">{val.zipcode}</td>
//                     <td className="border border-blue-200 px-4 py-3">{val.phone}</td>
//                     <td className="border border-blue-200 px-4 py-3">{val.date}</td>
//                     <td className="border border-blue-200 px-4 py-3">{val.course?.category || "N/A"}</td>
//                     <td className="border border-blue-200 px-4 py-3 text-center">
//                       <button
//                         id={val._id}
//                         onClick={deleteRegister}
//                         className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="10" className="text-center py-6 text-gray-500">
//                     No registrations found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ViewRegister
