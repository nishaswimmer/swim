import React, { useState ,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../context/AuthContextProvider'
function Login() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
   let {isLogin , setIsLogin} =  useContext(authContext)
    let navgate = useNavigate()
    async function login() {
        let loginData = { email, password }
        try {
            const res = await fetch("http://localhost:4001/api/login", {
                body: JSON.stringify(loginData),
                method: "post",
                headers: {
                    "content-Type": "application/json"
                }
            })
            const data = await res.json()
            if (res.ok) {
                localStorage.setItem("userID", data._id)
                setIsLogin(true)
                navgate('/')
            } else {
                alert(data.msg)
            }

        } catch (error) {
            console.log(error)
        }


    }

    return (
        <div className=" login h-[80vh] flex justify-center items-center  ">
            <div className="flex bg-transparent flex-col border  p-5 rounded-xl text-white">
                <input type="text" placeholder="Enter Email" name="" id="" value={email} className=" border p-2 rounded mb-2 " onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder="Enter Password" name="" id="" value={password} className=" border  p-2 rounded" onChange={(e) => { setPassword(e.target.value) }} />
                <center>
                    <button onClick={login} className="  border mt-2  1 bg-blue-900  text-amber-50 w-30 p-1 border-transparent rounded ">Login</button>
                </center>

            </div>
        </div>
    )
}

export default Login
