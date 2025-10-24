import React from 'react'
import { CirclePlus } from 'lucide-react'
import imgg from "../assets/log.jpg"
import imgee from "../assets/class.jpg"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function OurClass() {
    const [allclasses, setAllClasses] = useState([])
    const [show, setShow] = useState("")
    async function getClasses() {
        try {
            let res = await fetch("http://localhost:4001/api/getClasses");
            let data = await res.json();
            setAllClasses(data.allClasses);
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getClasses()
    }, [])
    return (

        <div>
            <div>
                <div className="text-3xl text-gray-700 font-bold justify-center flex ">OUR CLASSES</div>
                <div className="flex justify-center items-center pt-2"> <img src={imgee} alt="" /></div>
                {
                    allclasses.map((val) => {
                        return (
                            <>
                                <div className="flex justify-around mt-3 p-2 bg-blue-50" onClick={()=>{setShow(val._id)}}>
                                    <img src={imgg} alt="" />
                                    <div className=''>{val.agegroup}</div>
                                    <div>{val.classtype}</div>

                                    <CirclePlus />

                                </div>
                                {
                                    show == val._id && (
                                        <div className='ml-7 flex'>
                                            <div className=' w-1/2'>
                                            <h1 className='text-xl font-bold pt-5 text-gray-800'>{val.classtype}</h1>
                                            <p className='text-xs pt-5 text-gray-600'> Age {val.agegroup}</p>
                                            <p className='text-xs pt-1 pb-3  text-gray-600'> Class Time : {val.time}</p>
                                            <p className='text-sm  text-gray-800 '>{val.description}</p>
                                            <p className='text-xs pl- -3 pt-3  text-gray-600'> Total Class - {val.totalclass}</p>
                                            <Link to={"/Register"} className=" mt-5 p-2  hover:bg-blue-800 text-blue-800 font-bold hover:text-amber-50 bg-blue-50">Register Now</Link>
                                            </div>
                                            <div className=' w-1/2'>
                                            <img src={val.img} alt="" className='mt-7' />
                                            </div> 
                                        </div>
                                    )
                                }

                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default OurClass
