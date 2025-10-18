import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Adminlogin(){

    let[name,setName]=useState("")
    let[password,setPassword]=useState("")
   let navi =   useNavigate()
    // const login  = ()=>{}
    function login(){
        if(name=="admin"&& password==123){
            alert("admin login!")
         navi("/admin")   
        }
        else{
            alert("name and password invalid !")
        }

    }

    return(
        <div className=" login h-[80vh] flex justify-center items-center  ">
        <div className="flex bg-transparent flex-col border  p-5 rounded-xl text-white">
        <input type="text" placeholder="Enter Name" name="" id="" value={name} className=" border p-2 rounded mb-2 "  onChange={(e)=>{setName(e.target.value)}}/>
        <input type="password" placeholder="Enter Password" name="" id="" value={password} className=" border  p-2 rounded" onChange={(e)=>{setPassword(e.target.value)}} />
        <center>
            <button onClick={login} className="  border mt-2  1 bg-blue-900  text-amber-50 w-30 p-1 border-transparent rounded ">Admin Login</button>
        </center>

        </div>
        </div>
    )
}
export default Adminlogin