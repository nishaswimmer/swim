import logo from "../assets/class.jpg"
import chair from "../assets/chair.jpg"
import welcome from "../assets/welcome.jpg"
import join from "../assets/join.jpg"
import { use, useState } from "react";
import smile from "../assets/smile.jpg"
import expert from "../assets/experience.jpg"
import award from "../assets/awards.jpg"
import ballon from "../assets/ballon.jpg"
import { Link } from "react-router-dom";
import ContactForm from "../compnents/ContactForm";


function About() {
      
    return (
        <div>
            <div className="bgg flex justify-center items-center">
                <div className="relative ">
                    <h1 className="font-bold text-2xl text-amber-50">ABOUT US</h1>
                    <p className="text-white"><Link to="/"> Home</Link></p>
                </div>
            </div>

            <div>
                <div className="flex justify-center mt-10 font-bold text-2xl  text-zinc-600">
                    ABOUT US
                </div>
                <div className="flex justify-center ">
                    <img src={logo} alt="" className="pt-2" />
                </div>
                <div className=" flex justify-center items-center ">
                    <p className="h-20  w-150 text-zinc-600 font-bold pt-3">We are a dedicated swim academy committed to teaching children and adults the joy of swimming. Our experienced instructors focus on safety, skill-building, and confidence, making learning fun and effective for every age group.</p>
                </div>
                <div >
                    <img src={chair} alt="" className="m-10" />
                    <p className="pl-5 pr-5 text-zinc-600">At [Dive In Swim Academy], we are passionate about teaching swimming as a safe, fun, and life-enhancing activity for all ages. Our certified instructors focus on building confidence, improving fitness, and developing essential water skills in a nurturing environment. We offer classes for toddlers, children, and adults, including group and private sessions, tailored to each student’s needs. Emphasizing safety, technique, and enjoyment, our programs help students gain skills, discipline, and self-assurance. With modern facilities and a supportive community, we aim to make swimming accessible, enjoyable, and rewarding for everyone.</p>
                </div>


            </div>
            <div className="well mt-15 h-screen flex justify-center items-center">

                <div className="flex justify-center relative ">
                    <div >
                        <img src={join} alt="" />
                        <h1 className="text-white font-bold text-5xl">WELCOME TO OUR SWIMMER</h1>
                        <h2 className="text-white font-bold text-3xl">Book An Appointment Now</h2>
                        <p className="text-white pt-5 flex justify-center">Book your swim class appointment easily and secure your spot today! <br />Choose a convenient time and experience  professional coaching designed for all skill<br /> levels. Dive into confidence, fitness, and fun—reserve your session now!

                            Ask</p>
                        <div className="flex justify-center items-center mt-5">
                            <Link to={"/Register"} className=" bg-blue-900 text-amber-50 w-30 p-2   ">Register Now</Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex">
                <div className="mt-50 ml-10 mr-10 w-1/2">
                    <h1 className=" pb-3 text-2xl text-zinc-700 pl-20">Ask us to know all info</h1>
                    <p className=" flex justify-center text-zinc-500">"Contact us today to know everything about our swimming classes! Whether you’re looking for mini, toddler, or adult sessions, we provide complete details on schedules, fees, instructors, and training programs. Reach out and get all the information you need to make the best choice for your swimming journey"</p></div>
                <ContactForm></ContactForm>
            </div>
            <div className="ab flex justify-around items-center ">
                <div className="ac flex gap-10 items-center ">
                    <div className="flex ">
                        <img src={ballon} alt="" className="rounded-full bg-white pl-12 pr-12 pt-4 pb-4  " />

                        <div className="mt-15 text-xl text-white font-bold ml-5  justify-center">
                            <h1>2,400</h1>
                            <p>Happy Client</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={expert} alt="" className="rounded-full bg-white  p-10 " />

                        <div className="mt-15 text-xl text-white font-bold ml-5 ">
                            <h1>28</h1>
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={smile} alt="" className="rounded-full bg-white  p-10" />

                        <div className="mt-15 text-xl text-white font-bold ml-5">
                            <h1>90</h1>
                            <p>Success</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={award} alt="" className="rounded-full bg-white p-10 " />

                        <div className="mt-15 text-xl text-white font-bold ml-5">
                            <h1>560</h1>
                            <p>Awards</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default About;