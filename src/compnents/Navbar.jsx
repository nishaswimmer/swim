import img from "../assets/logo.webp"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/AuthContextProvider";
function Navbar() {
 const { isLogin  , logoutUser}=   useContext(authContext)
  return (
    <>
      <nav className="border p-3 flex justify-between font-bold text-gray-600 items-center pr-20 pt-7" >
        <img src={img} alt="" />
        <ul className="flex gap-4">
          <li className="hover:bg-blue-600 hover:text-white  border-2 p-1 border-none rounded-xs"> <Link to={'/'}>Home</Link> </li>
          <li className="hover:bg-blue-600  hover:text-white border-2 p-1 border-none rounded-xs"> <Link to={'About'}> About</Link> </li>
          <li className="hover:bg-blue-600  hover:text-white border-2 p-1 border-none rounded-xs"><Link to={'Courses'}> Courses</Link></li>
          <li className="hover:bg-blue-600  hover:text-white border-2 p-1 border-none rounded-xs"><Link to={'Instructor'}> Instructor</Link></li>
          <li className="hover:bg-blue-600  hover:text-white border-2 p-1 border-none rounded-xs"><Link to={'Register'}> Register</Link></li>
          <li className="hover:bg-blue-600  hover:text-white border-2 p-1  border-none rounded-xs"><Link to={'Contacts'}> Contacts</Link></li>
          <li className="hover:bg-blue-600  hover:text-white border-2 p-1  border-none rounded-xs"><Link to={'adminlogin'}> Admin Login</Link></li>
                    <li className="hover:bg-blue-600  hover:text-white border-2 p-1  border-none rounded-xs"><Link to={'myregistration'}> MyRegistration</Link></li>

          {
            isLogin ? <>
             <li onClick={logoutUser} className="hover:bg-blue-600  border-2  p-1 border-none rounded-xs cursor-pointer">Logout</li>                    

            </> : <>
             <li className="hover:bg-blue-600  border-2 p-1  border-none rounded-xs"><Link to={'signup'}>Signup</Link></li>
                    <li className="hover:bg-blue-600  border-2 p-1  border-none rounded-xs"><Link to={'login'}>Login</Link></li>
            </>
          }
         






        </ul>
      </nav>

    </>


  )
}
export default Navbar;
