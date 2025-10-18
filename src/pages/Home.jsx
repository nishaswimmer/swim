// import img from "./assets/swim.jpg"
import img from "../assets/swim.jpg"
import image from "../assets/swim2.jpg"
import imge from "../assets/swim3.jpg"
import imgee from "../assets/class.jpg"
import imgg from "../assets/log.jpg"
import { CirclePlus } from "lucide-react"
// import safety from "../assets/safety.jpg"
// import immg from "../assets/player.jpg"
// import swim from "../assets/girlss.jpg"
// import swimm from "../assets/females.jpg"
import kid1 from "../assets/1kid.jpg"
import kid2 from "../assets/2kid.jpg"
import kid3 from "../assets/3kid.jpg"
import kid4 from "../assets/4kid.jpg"
import kid5 from "../assets/5kid.jpg"
import kid6 from "../assets/6kid.jpg"
import kid7 from "../assets/7kid.jpg"
import silver from "../assets/silver.jpg"
import premium from "../assets/premium.jpg"
import platinum from "../assets/platinum.jpg"
import smile from "../assets/smile.jpg"
import expert from "../assets/experience.jpg"
import award from "../assets/awards.jpg"
import ballon from "../assets/ballon.jpg"
import baby from "../assets/baby.jpg"
import swimmer from "../assets/swimmer.jpg"
import boy from "../assets/boy.jpg"
import insta from "../assets/instagram.jpg"
import face from "../assets/facebook.jpg"
import twit from "../assets/twitter.jpg"
import google from "../assets/google.jpg"
import OurClass from "../compnents/OurClass"
import { Link } from "react-router-dom"


function Home() {
  let a = [
    {
      title: " Swim Class For Mini",
      icon: " icon",
      img: img,
      borderColor: "border-blue-400",
      name: "Sarah Blake",
      des: "Our Mini Swim Class introduces young swimmers to water through fun, safe, and engaging activities. Kids build confidence, learn basic floating and kicking skills, and develop comfort in the pool under the guidance of caring instructors",

    }
    ,
    {
      title: " Swim Class For Toddler",
      icon: " icon",
      img: image,
      borderColor: "border-blue-600",
      name: "Michael Lee",
      des: "Our Toddler Swim Class helps little ones gain confidence and coordination in the water through playful lessons. With gentle guidance, toddlers learn basic strokes, breath control, and water safety while having fun in a supportive, nurturing environment"
    },
    {
      title: " Swim Class For Adult",
      icon: " icon",
      img: imge,
      borderColor: "border-red-400",

      name: "Emma Johnson",
      des: "Our Adult Swim Class is perfect for beginners and those improving their skills. Learn proper techniques, strokes, and breathing while building confidence and fitness in the water under the guidance of experienced, patient instructors"
    }
  ]
  return (
    <>
      <div className="bg flex justify-center items-center">
        <div className="relative">
          <h1 className=" md:text-2xl text-amber-50 font-bold text-center italic">Swimming</h1>
          <p className="text-amber-50 text-4xl font-bold pt-5 ">A HEALTHY ACTIVITY FOR YOUR KIDS</p>
          <p className="text-amber-50 pt-5 flex justify-center">Swimming keeps kids fit, strong, and confident while having fun.
</p>
          <div className="flex justify-center items-center py-5">
          <Link to={"/About"} className=' border hover:bg-blue-800 hover:text-white  text-white p-2 '> Read More</Link>

          </div>
        </div>
      </div>

      <div className="flex gap-3 p-8 mt-25">
        {
          a.map((item) => {
            return (
              <div className={`swim flex flex-col justify-center gap-5 border-4 py-30 px-10 w-1/3 h-[300px] hover:bg-blue-500 ${item.borderColor}`}>
                <img src={item.img} alt="" className="" />
                <h1 className="text-2xl text-blue-900   font-bold "> {item.title}</h1>
                <p className=" text-blue-900  flex justify-center ">{item.name}</p>
                <p className=" swimm text-blue-900  text-sm text-center">{item.des}
                </p>
                <Link to={"/About"} className="btn border-1 bg-blue-900  text-amber-50 w-30 hover:bg-blue-300 border-amber-50 ">Read  More</Link>
              </div>

            )
          })
        }



      </div>
      <div className="d flex m-10">
        <div>
          <img src="" alt="" className="w-4xl h-" />
        </div>
        <div className="welcome">
          <div className="mt-30">
            <p className="text-blue-700 font-bold">about us</p>
            <p className="text-4xl text-zinc-700 p-5">
              Welcome To Pur

              <br />Swimmer
            </p>
            <h1 className="text-zinc-700 text-3xl ">Book  A  Appointment  Now </h1>
            <p className="pt-5 pl-15 pr-15 pb-5 text-zinc-700">Book your swim class appointment easily and secure your spot today! Choose a convenient time and experience professional coaching designed for all skill levels. Dive into confidence, fitness, and fun—reserve your session now!</p>
          </div>
                          <Link to={"/About"} className="btn border-1 bg-blue-900  text-amber-50 w-30 hover:bg-blue-300 border-amber-50 ">Read  More</Link>

        </div>

      </div>
<OurClass></OurClass>
     
      <div className="mt-10" >

        <div className="text-3xl text-gray-700 font-bold justify-center flex ">OUR BEST INSTRUCTOR</div>
        <div className="flex justify-center items-center pt-2"> <img src={imgee} alt="" /></div>
        <div className="flex justify-center mb-20 mt-10 gap-5 bg-blue-50">
          <div className="swimmm ins text-white  flex justify-center items-center pt-45">
            <div className=" instrct bg-blue-400  h-80 w-100">
              <h1 className="text-xl flex justify-center pt-10">SWIM INSTRUCTOR</h1>
              <h2 className="flex justify-center pt-3">Sarah Blake
</h2>
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
              <h2 className="flex justify-center pt-3">Michael Lee
</h2>
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
      <div className="swim1">
        <div className="text-blue-800  pt-10 flex justify-center text-2xl">What Client Say?</div>
        <p className="text-gray-700 pl-50 pr-50 pt-20"> Our clients love the positive atmosphere and professional coaching at our swim classes. Parents appreciate the patient instructors who help children gain water confidence, while adults enjoy the personalized training that improves their skills and fitness. Many describe our swim school as safe, friendly, and motivating—a perfect place to learn and grow in the water!</p>

      </div>
      <div className="text-3xl text-gray-700 font-bold justify-center flex mt-15 ">OUR GALLERY</div>

      <div className="flex justify-center items-center pt-2">
        <img src={imgee} alt="" />
      </div>
      <div className="ml-20 mt-6" >
        <div className="flex gap-5 ">
          <img src={kid1} alt="" className="h-55" />
          <img src={kid2} alt="" className="h-50" />
          <img src={kid3} alt="" className="h-50 " />
          <img src={kid5} alt="" className="w-30" />
        </div>



        <div className="flex ml-42 gap-4">
          <img src={kid4} alt="" className="h-50  " />
          <img src={kid6} alt="" className="h-50 " />

          <img src={kid7} alt="" className="h-50 " />
        </div>
      </div>
      <div className="mt-25">
        <div className="text-3xl text-gray-700 font-bold justify-center flex ">OUR PRICING PLAN</div>
        <div className="flex justify-center items-center pt-2">
          <img src={imgee} alt="" />
        </div>

      </div>
      <div className="flex justify-center gap-5 mt-10">
        <div className=" h-106 w-70 bg-blue-50 hover:bg-white">
          <p className="text-blue-700 items-center flex justify-center pt-4">Silver Pack</p>
          <div className="flex justify-center items-center   ">
            <img src={silver} alt="" className="rounded-full  bg-gray-100 p-5 mt-7" />
          </div>
          <div className="bg-blue-800 mt-5 p-2 text-amber-50 flex justify-center text-2xl">
            $95/month
          </div>
          <div className="flex justify-center items-center pt-5 flex-col text-gray-700">
            <p className="pt-2">Mini Toddler</p>
            <p className="pt-2">Coffee Break</p>
            <p className="pt-2">Total Claases-15</p>
            <p className="pt-2">Group Lesson</p>
            <div className="pt-4">
              <Link to={"/Register"}className="p-2  hover:bg-blue-800 text-blue-800 font-bold hover:text-amber-50 bg-blue-50">Register Now</Link>

            </div>
          </div>

        </div>
        <div className=" h-106  w-70 bg-blue-50 hover:bg-white">
          <p className="text-blue-700 items-center flex justify-center pt-4">Silver Pack</p>
          <div className="flex justify-center items-center   ">
            <img src={silver} alt="" className="rounded-full  bg-gray-100 p-5 mt-7" />
          </div>
          <div className="bg-blue-800 mt-5 p-2 text-amber-50 flex justify-center text-2xl">
            $95/month
          </div>
          <div className="flex justify-center items-center pt-5 flex-col text-gray-700">
            <p className="pt-2">Mini Toddler</p>
            <p className="pt-2">Coffee Break</p>
            <p className="pt-2">Total Claases-15</p>
            <p className="pt-2">Group Lesson</p>
            <div className="pt-4">
              <Link to={"/Register"} className="p-2  text-amber-50 bg-blue-800 font-bold ">Register Now</Link>

            </div>
          </div>

        </div>

        <div className=" h-106 bg-blue-50 hover:bg-white w-70">
          <p className="text-blue-700 items-center flex justify-center pt-4">Platinum Pack</p>
          <div className="flex justify-center items-center   ">
            <img src={platinum} alt="" className="rounded-full  bg-gray-100 p-5 mt-7" />
          </div>
          <div className="bg-blue-800 mt-5 p-2 text-amber-50 flex justify-center text-2xl">
            $95/month
          </div>
          <div className="flex justify-center items-center pt-5 flex-col text-gray-700">
            <p className="pt-2">Mini Toddler</p>
            <p className="pt-2">Coffee Break</p>
            <p className="pt-2">Total Claases-15</p>
            <p className="pt-2">Group Lesson</p>
            <div className="pt-4">
              <Link to={"/Register"} className="p-2  hover:text-blue-50 bg-blue-50 hover:bg-blue-800 text-blue-800 font-bold ">Register Now</Link>

            </div>
          </div>

        </div>


      </div>
      <div className="ab flex justify-around items-center mt-20 ">
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
      <div className="flex justify-around mt-20">
        <div className="h-130 w-98">
          <img src={baby} alt="" className="w-98" />
          <h1 className="font-bold text-xl pt-3 pl-1 text-neutral-700">Swimming Is The Best Physical Activity</h1>
          <p className="pt-3 pl-5 pr-5 text-zinc-600">Swimming helps little ones develop motor skills, coordination, and water confidence. Gentle movements in water improve flexibility, balance, and overall physical growth while promoting fun and bonding with parents.</p>
          <div className="flex justify-center items-center mt-5">
            <Link to={"/About"}className="border-1 bg-blue-900 text-amber-50 w-30 hover:bg-white hover:text-blue-800 font-bold border-amber-50 pt-2 pb-2 pl-3 pr-3 " >Read More</Link>

          </div>
        </div>
        <div className="h-130 w-98">
          <img src={swimmer} alt="" className="w-98" />
          <h1 className="font-bold text-xl pt-3 pl-1 text-neutral-700">Swimming Is The Best Physical Activity</h1>
          <p className="pt-3 pl-5 pr-5 text-zinc-600">Swimming is a full-body workout that improves cardiovascular fitness, strengthens muscles, and reduces stress. It enhances flexibility, supports joint health, and is ideal for maintaining a healthy, active lifestyle at any age. </p>
          <div className="flex justify-center items-center mt-5">
            <Link to={"/About"} className="border-1 bg-blue-900 text-amber-50 w-30 hover:bg-white hover:text-blue-800 font-bold border-amber-50 pt-2 pb-2 pl-3 pr-3 " >Read More</Link>

          </div>
        </div>
        <div className="h-130 w-98 ">
          <img src={boy} alt="" className="w-98" />
          <h1 className="font-bold text-xl pt-3 pl-1 text-neutral-700">Swimming Is The Best Physical Activity</h1>
          <p className="pt-3 pl-5 pr-5  text-zinc-600">Swimming boosts strength, stamina, and cardiovascular health for toddlers. It enhances coordination, builds confidence in water, and encourages social interaction with peers in a safe and playful environment.</p>
          <div className="flex justify-center items-center mt-5 ">
            <Link to={"/About"} className="border-1 bg-blue-900 text-amber-50 w-30 hover:bg-white hover:text-blue-800 font-bold border-amber-50 pt-2 pb-2 pl-3 pr-3 " >Read More</Link>

          </div>
        </div>
      </div>

    </>



  )
}
export default Home;