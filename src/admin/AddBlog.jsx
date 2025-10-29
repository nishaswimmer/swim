import React from 'react'
import { useState, useEffect } from 'react';
function AddBlog() {
    //   const BACKEND_API = "http://localhost:4001"
      const BACKEND_API = "https://swim-6.onrender.com"

     
    const [img, setImg] = useState(null);
    const [title, setTitle] = useState("")
    const [postby, setpostBy] = useState("")
    const [poston, setpostOn] = useState("")
    const [description, setDescription] = useState("")
    

  

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
        const data = { title, postby,poston, description,img }
        fetch(`${BACKEND_API}/api/addblog`, {
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
                <p className='font-bold text-3xl pt-10 '>Add blog </p>
            </div>


            <form onSubmit={RegisterNow}>
                <div >
                    <label htmlFor="" className='block font-medium mb-1'> Choose File :</label>
                    <input  required type="file" className=' border w-full p-2 rounded ' onChange={handleImage} />
                </div>

                <div>
                    <label htmlFor="" className='block font-medium mb-1'>title</label>
                    <input required type="text" placeholder='title'  value={title} className='border w-full p-2 rounded' onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="" className='block font-medium mb-1'>post by</label>
                    <input required type="text"  placeholder='post by' value={postby} className='border w-full p-2 rounded' onChange={(e) => { setpostBy(e.target.value) }} />
                </div>
                <div >
                    <label htmlFor="" className='block font-medium mb-1'>post on</label>
                    <input  required type="date"  value={poston} className='border w-full p-2 rounded' onChange={(e) => { setpostOn(e.target.value) }} />

                </div>
                <div>
                    <label htmlFor="" className='block font-medium mb-1' >Descreption :</label>
                    <input  required type="text"  value={description} className='border w-full p-4 rounded' onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                
               
                <div className='flex justify-center mt-5 '>
                    <button className='border pl-3 pr-3 pt-1 pb-1 rounded bg-blue-800 text-white cursor-pointer' >Register Now</button>

                </div>
            </form>
        </div>
    )
}

export default AddBlog
