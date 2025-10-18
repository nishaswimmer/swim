import React, { createContext, useEffect, useState } from 'react'
export let authContext = createContext()
import axios from 'axios'
function AuthContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const userID = localStorage.getItem("userID")

  useEffect(() => {
    const userID = localStorage.getItem("userID")
    if (userID) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])

  function logoutUser() {
    setIsLogin(false)
    localStorage.removeItem("userID")
  }


  async function getUserInfo() {
    try {
      let res = axios.get(`http://localhost:4001/getUserInfo/${userID}`)
      setUserName((await res).data.name)
      setUserEmail((await res).data.email)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [isLogin])


  return (
    <div>
      <authContext.Provider value={{ isLogin, setIsLogin, logoutUser, userEmail, userName, setUserName }}>
        {children}
      </authContext.Provider>

    </div>
  )
}

export default AuthContextProvider
