import React from 'react'
import mini from "../assets/miniinfant.jpg"
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function MyRegistration() {
  const [register, setRegister] = useState([])
  async function getAllData() {
    let userID = localStorage.getItem("userID")

    if (userID) {
      try {
        const res = await axios.get(`http://localhost:4001/api/ViewRegister/v1/${userID}`);
        setRegister(res.data.allRegister)
      } catch (error) {
        console.log(error)
        alert(error)
      }
    }
  }
  useEffect(() => {
    getAllData()
  }, [])


 

  async function deleteMyRegistration(e) {
    const _id = e.target.id
    console.log(_id)
    try {
      const res = await axios.delete(`http://localhost:4001/api/deleteMyRegistration/${_id}`)
      alert(res.data.msg)
      getAllData()
    } catch (error) {
      console.log(error)
    }

  }

  

  return (
    <>

    {
      register.length ===0 ?(
        <>
      <p className='font-bold flex justify-center items-center mt-10'>Data not found </p>
        <div className='flex justify-center mt-10'>
          <Link to={"/Register"} className=' border hover:bg-blue-800 hover:text-white pl-3 pr-3 pt-1 pb-1'> Register Now</Link>

        </div>
        </> 
      ):(
        <>
        <h1 className='flex justify-center text-3xl font-bold mt-3 mb-3'>Your Registration Details</h1>
        <div className='flex '>
        {
          register.map((val) => {
            return (
              <>
              
                <img src={mini} alt="" />
                <div className='pt-5 pb-5 pr-25 pl-25 bg-blue-500 '>
                <div className='border bg-white text-blue-700 p-5'>
                  <p className='font-bold text-2xl p-2 '>Course Category : {val.course.category}</p>
                  <p className='p-2  '><span className='font-bold pr-50'> Date :</span> {val.date}</p>
                  <p className='p-2  '> <span className='font-bold pr-40' > LastName : </span>{val.lastname}</p>
                  <p className='p-2  '><span className='font-bold pr-47'> Phone :</span> {val.phone}</p>
                  <p className='p-2'> <span className='font-bold pr-50'>Town :</span> {val.town}</p>
                  <p className='p-2  '> <span className='font-bold pr-40' >UserEmail  :</span> {val.userEmail}</p>
                  <p className='p-2'><span className='font-bold pr-49'> Name :</span> {val.userName}</p>
                  <p className='p-2  '> <span className='font-bold pr-45' >Zipcode:</span> {val.zipcode}</p>
                  <div className='flex justify-center mb-5'>
                    <button className='border hover:text-white hover:bg-blue-700 cursor-pointer pr-3 pl-3 pt-1 pb-1 ' id={val._id} onClick={deleteMyRegistration}>Remove</button>
                  </div>

                </div>
                </div>

              </>
            )
          })
        }
      </div>
        </>

      )
    }
      
    </>
  )
}

export default MyRegistration


// import React from "react";

// const MyRegistration = () => {
//   const booking = {
//     _id: "68ea2b3e9b7d4209caf8422d",
//     course: { _id: "68ca8f2c1614de1d0f7b25a6", category: "Mini Infant Class", __v: 0 },
//     date: "2025-10-17",
//     lastname: "admij",
//     phone: 1234567890,
//     town: "sdsd",
//     userEmail: "admin@gmail.com",
//     userID: "68ea281e249de2da22eb6a2a",
//     userName: "admin",
//     zipcode: "3424",
//     __v: 0,
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
//       <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all hover:scale-[1.02] duration-300">
//         <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
//           Course Booking Details
//         </h2>

//         <div className="space-y-3 text-gray-700 dark:text-gray-200">
//           <div className="flex justify-between">
//             <span className="font-medium">Course Category:</span>
//             <span>{booking.course?.category}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">Date:</span>
//             <span>{booking.date}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">Name:</span>
//             <span>{booking.userName} {booking.lastname}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">Email:</span>
//             <span>{booking.userEmail}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">Phone:</span>
//             <span>{booking.phone}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">Town:</span>
//             <span>{booking.town}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">Zipcode:</span>
//             <span>{booking.zipcode}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">User ID:</span>
//             <span>{booking.userID}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">Booking ID:</span>
//             <span>{booking._id}</span>
//           </div>
//         </div>

//         <div className="mt-6 text-center">
//           <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all">
//             View More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyRegistration;

