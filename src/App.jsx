import Navbar from "./compnents/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./pages/Layout"
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import NoPage from "./pages/NoPage";
import Adminlogin from "./pages/Adminlogin";
import Footer from "./compnents/Footer";
import ViewRegister from "./admin/ViewRegister";
import MyRegistration from "./pages/MyRegistration";
// import viewContact from "./compnents/admin/viewContact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/AdminLayout";
import ViewContact from "./admin/ViewContact";
import AddCategory from "./admin/AddCategory";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import Instructor from "./pages/Instructor";
import ViewCategory from "./admin/ViewCategory";
import AddClass from "./admin/AddClass";
import ViewClasses from "./admin/ViewClasses";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AuthContextProvider from "./context/AuthContextProvider";
import UpdateClass from "./admin/UpdateClass";
import AddBlog from "./admin/AddBlog";
import ViewBlog from "./admin/ViewBlog";

function App() {
  return (
    <>

      <BrowserRouter>
        <AuthContextProvider>
          <Routes>

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Blogs" element={<Blogs />} />
              <Route path="Contacts" element={<Contacts />} />
              <Route path="*" element={<NoPage />} />
              <Route path="adminlogin" element={<Adminlogin />} />
              <Route path="register" element={<Register></Register>} />
              <Route path="courses" element={<Courses> </Courses>} />
              <Route path="instructor" element={<Instructor></Instructor>} />
              <Route path="signup" element={<Signup></Signup>} />
              <Route path="login" element={<Login></Login>} />
              <Route path="myregistration" element={<MyRegistration></MyRegistration>} />
              {/* <Route path="myregistration" element={<></MyRegistration>} /> */}



            </Route>

            <Route path="admin" element={<AdminLayout></AdminLayout>} r>
              <Route index element={<ViewContact />} />
              <Route path="addCategory" element={<AddCategory></AddCategory>} />
              <Route path="viewCategory" element={<ViewCategory></ViewCategory>} />
              <Route path="addclass" element={<AddClass></AddClass>} />
              <Route path="viewclasses" element={<ViewClasses></ViewClasses>} />
              <Route path="viewregister" element={<ViewRegister></ViewRegister>} />
 <Route path="update/:idx" element={<UpdateClass></UpdateClass>} />
               <Route path="addblog" element={<AddBlog></AddBlog>} />
                              <Route path="viewblog" element={<ViewBlog></ViewBlog>} />





            </Route>

          </Routes>
        </AuthContextProvider>

      </BrowserRouter>

    </>
  )
}
export default App;