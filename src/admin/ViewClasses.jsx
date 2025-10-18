import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function ViewClasses() {
    const [allclasses, setAllClasses] = useState([])

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
    console.log(allclasses)


    async function deleteClasses(e) {
        const ans=confirm("Data Delete ?")
        if(ans){

        try {
            const res = await axios.delete(`http://localhost:4001/api/deleteClasses/${_id}`)
            alert(res.data.msg)
            getClasses()
        } catch (error) {
            console.log(error)
        }

    }
    const _id = e.target.id
        console.log(_id)
        }
        
    return (
        <>
            {
                allclasses.length > 0 ? (
                    <div>
                        <p className='font-bold text-blue-600 text-4xl flex justify-center mt-5 mb-5 '> View Classes</p>
                        <table className='class="table-auto border border-gray-50 mr-20  "'>
                            <thead>
                                <tr >
                                    <th className="border border-gray-50 px-4 py-2 bg-blue-600">Sr no</th>
                                    <th className="border border-gray-50 px-4 py-2  bg-blue-600">Img</th>
                                    <th className="border border-gray-50 px-4 py-2  bg-blue-600">Class Type</th>
                                    <th className="border border-gray-50 px-4 py-2  bg-blue-600">Age Group</th>
                                    <th className="border border-gray-50 px-4 py-2  bg-blue-600">Class Time</th>
                                    <th className="border border-gray-50 px-4 py-2  bg-blue-600">Description</th>
                                    <th className="border border-gray-50 px-4 py-2  bg-blue-600"> Total Class</th>
                                    <th className="border border-gray-50 px-4 py-2  bg-blue-600">Category</th>
                                    <th className="border border-gray-50 px-4 py-2  bg-blue-600">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allclasses.map((val, idx) => {
                                        return (
                                            <tr>
                                                <td className="border border-gray-50 hover:bg-blue-100 px-4 py-2">{idx + 1}</td>

                                                <td className="border border-gray-50 hover:bg-blue-100 px-4 py-4 "><img src={val.img} alt="" width={100} className='rounded-xl h-10 ' /></td>
                                                <td className="border border-gray-50 hover:bg-blue-100 px-4 py-2">{val.classtype}</td>
                                                <td className="border border-gray-50 px-4 py-2">{val.agegroup}</td>

                                                <td className="border border-gray-50 hover:bg-blue-100 px-4 py-2">{val.time}</td>
                                                <td className="border border-gray-50 hover:bg-blue-100 px-4 py-2">{val.description.slice(0, 50)} ...</td>
                                                <td className="border border-gray-50 hover:bg-blue-100 px-4 py-2">{val.totalclass}</td>
                                                <td className="border border-gray-50  hover:bg-blue-100 px-4 py-2">{val.category?.category}</td>
 
                                                <td>
                                                    <button className='bg-red-500 text-white p-2 rounded-2xl' id={val._id} onClick={deleteClasses} >Delete</button>
                                                    <Link  to={`/admin/update/${val._id}`} className='bg-green-500 text-white p-2 rounded-2xl'>update</Link>

                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>

                ) : (
                    <div>
                        <h1> data note found !</h1>
                    </div>
                )
            }

        </>

    )
}

export default ViewClasses
