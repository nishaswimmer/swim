import React, { useState } from 'react'

function Signup() {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    function submit() {
        let data = { name, email, password }
        fetch("http://localhost:4001/api/sign", {
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
        <div className=" login h-[80vh] flex justify-center items-center  ">
            <div className="flex bg-transparent flex-col border  p-5 rounded-xl text-white">
                <input type="text" placeholder="Enter Name" name="" id="" value={name} className=" border p-2 rounded mb-2 " onChange={(e) => { setName(e.target.value) }} />
                <input type="text" placeholder="Enter email" name="" id="" value={email} className=" border  p-2 rounded mb-2" onChange={(e) => { setEmail(e.target.value) }} />

                <input type="password" placeholder="Enter Password" name="" id="" value={password} className=" border  p-2 rounded" onChange={(e) => { setPassword(e.target.value) }} />

                <center>
                    <button onClick={submit} className="  border mt-2  1 bg-blue-900  text-amber-50 w-30 p-1 border-transparent rounded ">Signup</button>
                </center>

            </div>
        </div>
    )
}


export default Signup
