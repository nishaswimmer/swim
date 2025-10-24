import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { authContext } from '../context/AuthContextProvider'
// import { Import } from 'lucide-react'
import { Link } from "react-router-dom"



function Register() {
    // let [name, setName] = useState("")
    let [lastname, setLastname] = useState("")
    // let [, setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let [town, setTown] = useState("")
    let [zipcode, setZipcode] = useState("")
    let [date, setDate] = useState("")
    let [course, setCourse] = useState("")

    let {userName , userEmail , setUserName} =  useContext(authContext)
    const BACKEND_API="https://swim-6.onrender.com"

    function submit(e) {
        e.preventDefault()
        if (course === "") {
            return alert("select course ")
        }
        const userID = localStorage.getItem("userID")
        let data = { userName, lastname, userEmail, town, zipcode, date, course, phone: Number(phone), userID }
        console.log(data)
        fetch(`${BACKEND_API}/api/register`, {
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


    const [allCategory, setAllCategory] = useState([])

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
    }, [])
    return (
        <>
        <div className="banner flex justify-center items-center mb-10">
               <div className="relative ">
                    <h1 className="font-bold text-2xl text-amber-50">REGISTER</h1>
                    <p className="text-white"><Link to="/"> Home</Link></p>
                </div>

            </div>
            <div className='register flex justify-center items-center'>

                <form onSubmit={submit} className=" p-10 bg-white">
                    <div className="flex gap-30 my-6">
                        <div className='w-1/2'>
                            <label htmlFor="">First Name</label>
                            <input type="text" required placeholder="First Name" id="name" value={userName} className="w-full p-1  rounded border" onChange={(e) => { setUserName(e.target.value) }} />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" required placeholder="Last Name" id="lname" value={lastname} className="w-full p-1 rounded border" onChange={(e) => { setLastname(e.target.value) }} />
                        </div>

                    </div>

                    <div className="flex gap-30 my-6">
                        <div className='w-1/2'>
                            <label htmlFor="">Email Address</label>
                            <br />
                            <input type="text" required placeholder="Email" disabled id="name" value={userEmail} className=" w-full p-1  rounded border" />
                        </div>
                        <div className='w-1/2'  >
                            <label htmlFor="">Town/City</label>
                            <br />
                            <input type="text" required placeholder="Town/City" id="lname" value={town} className=" w-full p-1 rounded border" onChange={(e) => { setTown(e.target.value) }} />
                        </div>

                    </div>
                    <div className="flex gap-30 my-6">
                        <div className='w-1/2'>
                            <label htmlFor="">Zip Code</label>
                            <input type="text" required placeholder="Zip Code" id="name" value={zipcode} className=" p-1 w-full rounded border" onChange={(e) => { setZipcode(e.target.value) }} />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" required placeholder="Phone Number" id="lname" value={phone} className=" w-full p-1 rounded border" onChange={(e) => { setPhone(e.target.value) }} />
                        </div>

                    </div>
                    <div className="flex gap-30 my-6">
                        <div className='w-1/2'>
                            <label htmlFor="">Date</label>
                            <input type="Date" required placeholder="Date" id="name" value={date} className=" p-1  w-full rounded border" onChange={(e) => { setDate(e.target.value) }} />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="">Course Category</label>
                            <br />
                            <select name="" id="" onChange={(e) => { setCourse(e.target.value) }}>
                                <option value=""> select  option </option>
                                {
                                    allCategory.map((cat) => {
                                        return (
                                            <option value={cat._id}>{cat.category}</option>
                                        )
                                    })
                                }

                            </select>
                            {/* <input type="text" placeholder="Course Category" id="lname" value={course} className=" p-1 w-full rounded border" onChange={(e) => { setCourse(e.target.value) }} /> */}
                        </div>

                    </div>



                    <div className="aa flex justify-center">

                        <button className="border-1 bg-blue-900 text-amber-50 w-30 p-1 border-amber-50 active:scale-95 cursor-pointer" >Submit</button>
                    </div>






                </form>
            </div>


        </>
    )
}

export default Register
