
import { Link } from "react-router-dom";

import { use, useState } from "react";
import ContactForm from "../compnents/ContactForm";
function Contacts() {



    return (
        <>
            <div className="banner flex justify-center items-center">
               <div className="relative ">
                    <h1 className="font-bold text-2xl text-amber-50">CONTACT US</h1>
                    <p className="text-white"><Link to="/"> Home</Link></p>
                </div>
            </div>
            <ContactForm></ContactForm>

          

        </>

    )
}
export default Contacts;