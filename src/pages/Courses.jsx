import React from 'react'
import img from "../assets/swim.jpg"
import image from "../assets/swim2.jpg"
import imge from "../assets/swim3.jpg"
import { Link } from 'react-router-dom'


function Courses() {
  let a = [
    {
      title: " Swim Class For Mini",
      icon: " icon",
      img: img,
      borderColor: "border-blue-400",
      name: "Sarah Blake",
      des: "Our Mini Swim Class introduces young swimmers to water through fun, safe, and engaging activities. Kids build confidence, learn basic floating and kicking skills, and develop comfort in the pool under the guidance of caring instructors "
    }
    ,
    {
      title: " Swim Class For Toddler",
      icon: " icon",
      img: image,
      borderColor: "border-blue-600",
      name: "Michael Lee",
      des: "Our Toddler Swim Class helps little ones gain confidence and coordination in the water through playful lessons. With gentle guidance, toddlers learn basic strokes, breath control, and water safety while having fun in a supportive, nurturing environment "
    },
    {
      title: " Swim Class For Adult",
      icon: " icon",
      img: imge,
      borderColor: "border-red-400",

      name: "Emma Johnson",
      des: "Our Adult Swim Class is perfect for beginners and those improving their skills. Learn proper techniques, strokes, and breathing while building confidence and fitness in the water under the guidance of experienced, patient instructors "
    },
    {
      title: " Swim Class For Mini",
      icon: " icon",
      img: img,
      borderColor: "border-blue-400",
      name: "Sarah Blake",
      des: " Our Mini Swim Class introduces young swimmers to water through fun, safe, and engaging activities. Kids build confidence, learn basic floating and kicking skills, and develop comfort in the pool under the guidance of caring instructors"
    }
    ,
    {
      title: " Swim Class For Toddler",
      icon: " icon",
      img: image,
      borderColor: "border-blue-600",
      name: "Michael Lee",
      des: "Our Toddler Swim Class helps little ones gain confidence and coordination in the water through playful lessons. With gentle guidance, toddlers learn basic strokes, breath control, and water safety while having fun in a supportive, nurturing environment "
    },
    {
      title: " Swim Class For Adult",
      icon: " icon",
      img: imge,
      borderColor: "border-red-400",

      name: "Emma Johnson",
      des: "Our Adult Swim Class is perfect for beginners and those improving their skills. Learn proper techniques, strokes, and breathing while building confidence and fitness in the water under the guidance of experienced, patient instructors "
    }
  ]
  return (
    <div>
      <div className='courses flex justify-center pt-20'>
        <div className='relative'>
          <h1 className='text-white  text-3xl'> COURSES GRID VIEW</h1>
          <p className='text-white'><Link to="/"> Home</Link></p>
        </div>

      </div>
      <div className=" cards gap-3 p-8 ">
        {
          a.map((item) => {
            return (
              <div className={`swim flex flex-col justify-center gap-5 border-4 py-30 px-10  text-center h-[300px] mt-40 hover:bg-blue-500 ${item.borderColor}`}>
                <img src={item.img} alt="" className="" />
                <h1 className="text-xl text-blue-900 font-bold "> {item.title}</h1>
                <p className=" text-blue-900 text-l ">{item.name}</p>
                <p className=" swimm text-blue-900  text-sm text-center">{item.des}
                </p>
                <Link to={"/About"}className="btn border-1 bg-blue-900 text-amber-50 w-30 hover:bg-blue-300 border-amber-50 ">Read  More</Link>
              </div>

            )
          })
        }



      </div>
      <div className='cc  '>
        <div className='  flex justify-center items-center pt-25 '>
          <h1 className='text-white text-3xl font-bold bb'>Register Today & Start Class Tommorow
          </h1>

        </div>
        <div className=' flex justify-center items-center mt-3 '>
          <Link to={"/Register"} className='bb bg-white text-blue-800 cursor-pointer pt-1 pb-1 pl-2 pr-2 font-bold'>Register Now</Link>
        </div>

      </div>
    </div>
  )
}

export default Courses
