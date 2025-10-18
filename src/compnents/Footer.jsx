import React from 'react'
import { House } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import footer from "../assets/footer-logo.webp"
import kidss from "../assets/kidss.jpg"
import mombab from "../assets/mombab.jpg"
import water from "../assets/water.jpg"
import red from "../assets/red.jpg"
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
import google from "../assets/google.jpg"
function Footer() {
  return (
    <div>
      <div className="d flex  gap-6 mx-25 mt-20">
        <div className="h-56 w-85  bg-blue-700 ">
          <span className="d flex justify-center mt-10 text-amber-50  "><House /></span>
          <p className="text-amber-50 text-xl pt-6 pl-30 "> ADDRESS</p>
          <p className="text-amber-50 text-l pt-3 pl-15 ">
            Elizabeth Tower, 6th Floor
            <br />
            Medtown, New York
          </p>
        </div>
        <div className="h-56 w-85  bg-blue-400">
          <span className="d flex justify-center mt-10 text-amber-50 "><Phone /></span>
          <p className="text-amber-50 text-xl pt-6 pl-20 ">PHONE NUMBER</p>
          <p className="text-amber-50 text-l pt-3 pl-25 ">
            0123456789 <br />
            0123456789</p>
        </div>
        <div className="h-56 w-85  bg-red-500">
          <span className="d flex justify-center mt-10 text-amber-50 "><Mail /></span>
          <p className="text-amber-50 text-xl pt-6 pl-30 ">EMAIL</p>
          <p className="text-amber-50 text-l pt-3 pl-20 ">demo@example.com <br />
            demo@example.com</p>
        </div>
      </div>
      <div className='bg-zinc-50 mt-10 flex  justify-around'>
        <div>
          <div>
            <h1 className='pt-20 text-zinc-500 font-bold text-2xl italic'>twitter Feed</h1>
          </div>
          <div className='flex gap-10 text-zinc-500 pt-2 text-xs'>
            <h1 >Post By: John Doe</h1>
            <p>12 Feb 2017</p>

          </div >
          <p className='text-zinc-700 pt-2 text-sm'>#There are may “varations” pasages of texi
            <br /> Lorem Ipsum available njhgh fhg excercise

          </p>

          <div className='flex gap-10 text-zinc-500 pt-3 text-xs'>
            <h1>Post By: John Doe</h1>
            <p>12 Feb 2017</p>

          </div>
          <p className='pt-2 text-zinc-700 text-sm'>There are may “varations” pasages of texi</p>

        </div>

        <div className=''>
          <div >
            <img src={footer} alt="" className='mt-20 ' />
            <p className=' w-80  text-zinc-700 pt-5 text-sm'>“Experience the joy of swimming with our professionally guided classes for all ages—infants, toddlers, and adults. Our programs focus on building water confidence, improving fitness, and promoting safety in a fun and supportive environment. Dive in and make every stroke count!”</p>
            <div className='flex gap-5 mt-5 items-center '>
              <h1 className='rounded-full p-1 bg-blue-800 text-white'><Facebook /></h1>
              <h1 className='rounded-full p-1 bg-blue-400 text-white'><Twitter /></h1>
              <h1 className='rounded-full p-1 bg-pink-900 text-white'><Instagram /></h1>
              <h1 className='rounded-full p-1 bg-red-700 text-white'><Youtube /></h1>
              <div>
                <img src={google} alt="" className='rounded-full  size-10  bg-white' />

              </div>
            </div>

          </div>
        </div>


        <div>
          <h1 className='text-zinc-500 ll font-bold text-2xl mt-20'>latest post</h1>
          <div className='flex gap-2'>
            <img src={red} alt="" />
            <img src={water} alt="" />

          </div>
          <div className='flex gap-2 pt-2'>
            <img src={mombab} alt="" />
            <img src={kidss} alt="" />
          </div>
        </div>

      </div>




    </div>
  )
}

export default Footer
