import React from 'react'
import { useState, useEffect } from 'react';
function AddClass() {
      const BACKEND_API = "https://swim-6.onrender.com"
     const [allCategory, setAllCategory] = useState([]);
    const [img, setImg] = useState(null);
    const [classtype, setclassType] = useState("")
    const [agegroup, setageGroup] = useState("")
    const [time, setTime] = useState("")
    const [description, setDescription] = useState("")
    const [totalclass, settotalClass] = useState("")
    const [category, setCategory] = useState("")

    async function getCategory() {

        try {
            let res = await fetch(`${BACKEND_API}/api/getCategory`);
            let data = await res.json();
            setAllCategory(data.allCategory);
        } catch (error) {

            console.log(error);
        }
    }

    useEffect(() => {
        getCategory()

    }, []);

    function handleImage(e) {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "images");
        fetch("http://api.cloudinary.com/v1_1/dqjlbkecv/image/upload", {
            method: "post",
            body: formData,

        }).then((res) => {
            return res.json();
        })
            .then((data) => setImg(data.secure_url))
            .catch((error) => console.log(error));
    }

    function RegisterNow(e) {
        e.preventDefault()
        const data = { classtype, agegroup, time, description, totalclass, category, img }
        fetch(`${BACKEND_API}/api/addclass`, {
            body: JSON.stringify(data),
            method: "post",
            headers: {
                "content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => alert(data.msg))
            .catch(error => console.log(error))
    }
    return (
        <div className=" ml-50  box pl-20 pr-20  ">
            <div className='flex justify-center'>
                <p className='font-bold text-3xl pt-10 '>Add Class </p>
            </div>


            <form onSubmit={RegisterNow}>
                <div >
                    <label htmlFor="" className='block font-medium mb-1'> Choose File :</label>
                    <input  required type="file" className=' border w-full p-2 rounded ' onChange={handleImage} />
                </div>

                <div>
                    <label htmlFor="" className='block font-medium mb-1'>Class Type :</label>
                    <input required type="text" placeholder='Swim Clasess For Infant' value={classtype} className='border w-full p-2 rounded' onChange={(e) => { setclassType(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="" className='block font-medium mb-1'>Age Group :</label>
                    <input required type="text" placeholder='Age 2-3 years' value={agegroup} className='border w-full p-2 rounded' onChange={(e) => { setageGroup(e.target.value) }} />
                </div>
                <div >
                    <label htmlFor="" className='block font-medium mb-1'>Class Time :</label>
                    <input  required type="time" placeholder='Class Time : 10am-11am' value={time} className='border w-full p-2 rounded' onChange={(e) => { setTime(e.target.value) }} />

                </div>
                <div>
                    <label htmlFor="" className='block font-medium mb-1' >Descreption :</label>
                    <input  required type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis notrud.' value={description} className='border w-full p-4 rounded' onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <div >
                    <label htmlFor="" className='block font-medium mb-1'>Total Class :</label>
                    <input required type="number" placeholder='Totall Class - 20' value={totalclass} className='border w-full p-2 rounded' onChange={(e) => { settotalClass(e.target.value) }} />

                </div>
                <div >
                    <label htmlFor="" className='block font-medium mb-1'> Category :</label>
                    <select name="category" value={category} className='border w-full p-2 rounded' onChange={(e) => { setCategory(e.target.value) }}>
                        <option value="">--Select--</option>
                        {
                            allCategory.map(val => <option key={val._id} value={val._id}>{val.category}</option>)
                        }
                    </select>

                </div>
                <div className='flex justify-center mt-5 '>
                    <button className='border pl-3 pr-3 pt-1 pb-1 rounded bg-blue-800 text-white cursor-pointer' >Register Now</button>

                </div>
            </form>
        </div>
    )
}

export default AddClass



// import React, { useState, useEffect } from "react";

// function AddClass() {
//   const [allCategory, setAllCategory] = useState([]);
//   const [img, setImg] = useState("");
//   const [classtype, setClassType] = useState("");
//   const [agegroup, setAgeGroup] = useState("");
//   const [time, setTime] = useState("");
//   const [description, setDescription] = useState("");
//   const [totalclass, setTotalClass] = useState("");
//   const [category, setCategory] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch all categories
//   async function getCategory() {
//     try {
//       const res = await fetch("http://localhost:4001/api/getCategory");
//       const data = await res.json();
//       setAllCategory(data.allCategory);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     getCategory();
//   }, []);

//   // Handle image upload
//   function handleImage(e) {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "images");

//     fetch("https://api.cloudinary.com/v1_1/dqjlbkecv/image/upload", {
//       method: "post",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((data) => setImg(data.secure_url))
//       .catch((error) => console.log(error));
//   }

//   // Submit form
//   function RegisterNow(e) {
//     e.preventDefault();
//     setLoading(true);
//     const data = { classtype, agegroup, time, description, totalclass, category, img };

//     fetch("http://localhost:4001/api/addclass", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert(data.msg);
//         setClassType("");
//         setAgeGroup("");
//         setTime("");
//         setDescription("");
//         setTotalClass("");
//         setCategory("");
//         setImg("");
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
//       <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg">
//         <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
//           Add Class
//         </h1>

//         <form onSubmit={RegisterNow} className="space-y-5">
//           {/* File Upload */}
//           <div>
//             <label className="block font-medium mb-1">Choose File:</label>
//             <input
//               type="file"
//               required
//               className="border w-full p-2 rounded"
//               onChange={handleImage}
//             />
//             {img && (
//               <div className="mt-3 flex justify-center">
//                 <img
//                   src={img}
//                   alt="Uploaded Preview"
//                   className="w-32 h-32 object-cover rounded-md border"
//                 />
//               </div>
//             )}
//           </div>

//           {/* Class Type */}
//           <div>
//             <label className="block font-medium mb-1">Class Type:</label>
//             <input
//               required
//               type="text"
//               placeholder="Swim Classes for Infant"
//               value={classtype}
//               onChange={(e) => setClassType(e.target.value)}
//               className="border w-full p-2 rounded"
//             />
//           </div>

//           {/* Age Group */}
//           <div>
//             <label className="block font-medium mb-1">Age Group:</label>
//             <input
//               required
//               type="text"
//               placeholder="Age 2–3 years"
//               value={agegroup}
//               onChange={(e) => setAgeGroup(e.target.value)}
//               className="border w-full p-2 rounded"
//             />
//           </div>

//           {/* Class Time */}
//           <div>
//             <label className="block font-medium mb-1">Class Time:</label>
//             <input
//               required
//               type="time"
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//               className="border w-full p-2 rounded"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block font-medium mb-1">Description:</label>
//             <textarea
//               required
//               placeholder="Enter class details..."
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="border w-full p-2 rounded resize-none"
//               rows="3"
//             />
//           </div>

//           {/* Total Class */}
//           <div>
//             <label className="block font-medium mb-1">Total Class:</label>
//             <input
//               required
//               type="number"
//               placeholder="Total Classes - 20"
//               value={totalclass}
//               onChange={(e) => setTotalClass(e.target.value)}
//               className="border w-full p-2 rounded"
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block font-medium mb-1">Category:</label>
//             <select
//               required
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="border w-full p-2 rounded"
//             >
//               <option value="">-- Select Category --</option>
//               {allCategory.map((val) => (
//                 <option key={val._id} value={val._id}>
//                   {val.category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               disabled={loading}
//               className={`bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition ${
//                 loading && "opacity-50 cursor-not-allowed"
//               }`}
//             >
//               {loading ? "Please wait..." : "Register Now"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddClass;

