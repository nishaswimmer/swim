import React from 'react'
import { useState } from 'react';
function ContactForm() {
      const BACKEND_API = "https://swim-6.onrender.com"

    let [name, setName] = useState("")
    let [lastname, setLastname] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let [subject, setSubject] = useState("")
    let [message, setMessage] = useState("")

    function submit() {


        
        let data = { name, lastname, email, message, subject, phone: Number(phone) }
        fetch(`${BACKEND_API}/api/contact`, {
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
    <>
        <div className="main bg-gray-100" >
                <h1 className="text-center text-blue-400 font-semibold text-2xl">Always Keep Us In Your Prayer
                </h1>
                <form action="" className="px-10 my-5">
                    <div className="flex gap-30  my-6">
                        <input type="text" placeholder="First Name" id="name" value={name} className="w-full p-1  rounded bg-blue-100" onChange={(e) => { setName(e.target.value) }} />
                        <input type="text" placeholder="Last Name" id="lname" value={lastname} className="w-full p-1 rounded bg-blue-100" onChange={(e) => { setLastname(e.target.value) }} />
                    </div>
                    <div className="flex gap-30 my-6">
                        <input type="mail" placeholder="Email Address" id="mail" value={email} className="w-full p-1  rounded bg-blue-100" onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="number" placeholder="Phone" id="phone" value={phone} className="w-full p-1 rounded bg-blue-100" onChange={(e) => { setPhone(e.target.value) }} />
                    </div>

                    <input type="text" placeholder="Subject" id="sub" value={subject} className="w-full p-1  rounded bg-blue-100" onChange={(e) => { setSubject(e.target.value) }} />

                    <textarea placeholder="Message" name="Message" id="msg" value={message} className="w-full bg-blue-100 my-6 p-1" rows={5} onChange={(e) => { setMessage(e.target.value) }}>
                    </textarea>
                    <div className="aa flex justify-center">

                        <button className="border-1 bg-blue-900 text-amber-50 w-30 p-1 border-amber-50   " onClick={submit} >Submit</button>
                    </div>






                </form>
            </div>
    </>
  )
}

export default ContactForm
