import React from 'react'
import one from "../assets/instr1.jpg"
import insta from "../assets/instagram.jpg"
import face from "../assets/facebook.jpg"
import twit from "../assets/twitter.jpg"
import google from "../assets/google.jpg"
// import two from "../assets/instr2.jpg"

// import three from "../assets/instr3.jpg"

import imgee from "../assets/class.jpg"
import smile from "../assets/smile.jpg"
import expert from "../assets/experience.jpg"
import award from "../assets/awards.jpg"
import ballon from "../assets/ballon.jpg"
import { Link } from "react-router-dom"


function Instructor() {
  return (
    <>
      <div className='instructor flex justify-center items-center'>
        <div className='relative'>
          <h1 className='text-white ii font-bold text-2xl'>INSTRUCTOR</h1>
          <p className="text-white"><Link to="/"> Home</Link></p>

        </div>

      </div>

      {/* <div className='ml-13  ' >
        <div className='flex justify-center pt-10'>
          <h1 className='text-zinc-600 font-bold text-2xl'>OUR BEST INSTRUCTOR</h1>
        </div>
        <div className='flex justify-center pt-3'>
          <img src={imgee} alt="" />
        </div>
        <div className='flex gap-5  pl-20 pt-10  '>
          <img src={one} alt="" className='h-130 w-80' />
          <img src={one} alt="" className=' h-130 w-80' />
          <img src={one} alt="" className='h-130 w-80'/>
        </div>
      </div> */}
      <div className="mt-10 " >

        <div className="text-3xl text-gray-700 font-bold justify-center flex ">OUR BEST INSTRUCTOR
          <p className="text-white "><Link to="/home"> Home</Link></p>
        </div>
        <div className="flex justify-center items-center pt-2"> <img src={imgee} alt="" /></div>
        <div className="flex justify-center mb-20 mt-10 gap-5 bg-blue-50">
          <div className="swimmm ins text-white  flex justify-center items-center pt-45">
            <div className=" instrct bg-blue-400  h-80 w-100">
              <h1 className="text-xl flex justify-center pt-10">SWIM INSTRUCTOR</h1>
              <h2 className="flex justify-center pt-3">Sarah Blake</h2>
              <p className="flex justify-center pt-3 pl-5 pr-5">Sarah specializes in teaching infants and young swimmers. With gentle guidance and fun techniques, she helps babies build water confidence and coordination while ensuring a safe and nurturing learning environment.
              </p>
              <div className="flex justify-center items-center text-white gap-3 pt-3">
                <img src={twit} alt="" className="h-7 rounded-full" />
                <img src={insta} alt="" className="h-7 rounded-full" />
                <img src={face} alt="" className="h-7 rounded-full" />
                <img src={google} alt="" className="h-7 rounded-full text-white bg-white" />
              </div>

            </div>


          </div>
          <div className="swimmm ins text-white  flex justify-center items-center pt-45">
            <div className=" instrct bg-blue-400  h-80 w-100">
              <h1 className="text-xl flex justify-center pt-10">SWIM INSTRUCTOR</h1>
              <h2 className="flex justify-center pt-3">Michael Lee</h2>
              <p className="flex justify-center pt-3 pl-5 pr-5">Michael brings energy and patience to every toddler session. He focuses on developing basic swimming strokes, safety habits, and confidence through engaging games that make learning to swim exciting and playful.
              </p>
              <div className="flex justify-center items-center text-white gap-3 pt-3">
                <img src={twit} alt="" className="h-7  rounded-full" />
                <img src={insta} alt="" className="h-7 rounded-full" />
                <img src={face} alt="" className="h-7 rounded-full " />
                <img src={google} alt="" className="h-7 rounded-full " />
              </div>

            </div>


          </div>
          <div className="swimmm ins text-white  flex justify-center items-center pt-45">
            <div className=" instrct bg-blue-400  h-80 w-100">
              <h1 className="text-xl flex justify-center pt-10">SWIM INSTRUCTOR</h1>
              <h2 className="flex justify-center pt-3">Emma Johnson</h2>
              <p className="flex justify-center pt-3 pl-5 pr-5">Emma is a certified swim coach passionate about helping adults overcome fear of water and improve endurance. Her tailored lessons blend technique, fitness, and motivation to help every swimmer reach their personal goals.
              </p>
              <div className="flex justify-center items-center text-white gap-3 pt-3">
                <img src={twit} alt="" className="h-7 rounded-full" />
                <img src={insta} alt="" className="h-7 rounded-full" />
                <img src={face} alt="" className="h-7 rounded-full" />
                <img src={google} alt="" className="h-7 rounded-full " />
              </div>

            </div>


          </div>

        </div>
      </div>

      <div className='news flex justify-center items-center'>
        <div className='hh'>
          <h1 className='text-3xl text-white'>News Letter Signup</h1>
          <p className='text-white text-l py-3'>"Stay updated! Subscribe for swim tips, class updates, and special offers."</p>

          <div className='flex justify-center items-center gap-5 py-3'>
            <input type="text" placeholder='Enter Your Email ' className='bg-white p-2 text-l rounded w-full' />
            <button className='bg-blue-800 text-white p-2 w-30 rounded '>Subscribe </button>


          </div>
        </div>


      </div>
      <div className='instbg'>
        <div className=" flex justify-around items-center pt-15 ">
          <div className=" flex gap-10 items-center ">
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
    </>
  )
}

export default Instructor
