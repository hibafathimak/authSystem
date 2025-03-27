import React, { useState } from 'react'
import { registerAPI } from '../services/allAPI'

const Register = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")

    const submitform = async () => {
        if (username || email || password || name) {
            try {
            const result = await registerAPI({ username, email, password, name })
            if (result.status === 200) {
                alert("Registration Success")
                }
            }
            catch (err) {
                console.log(err);
            }
        } else {
            alert("fill the form completely")
        }
    }
     
    return (
    <div className='flex items-center justify-center h-screen w-full'>
            <div className='border flex items-center justify-center flex-col rounded shadow-xl w-1/3 h-[500px]'>
                <h1 className='text-2xl text-center text-gray-500'>Register </h1>
               <form className='formContainer p-6' onSubmit={submitform}>
                    <input onChange={(e)=>setusername(e.target.value)} className='border rounded mb-2 p-2 w-full' type="text" placeholder='Enter Username' />
                    <input onChange={(e)=>setemail(e.target.value)} className='border rounded mb-2 p-2 w-full' type="email" placeholder='Enter Email' />
                    <input onChange={(e)=>setname(e.target.value)} className='border rounded mb-2 p-2 w-full' type="text" placeholder='Enter Name' />
                    <input onChange={(e)=>setpassword(e.target.value)} className='border rounded mb-2 p-2 w-full' type="password" placeholder='Enter Password' />
                    <button type='submit' className='border rounded bg-black text-white p-4 mt-5 w-full'>Register</button>
               </form>
            </div>
    </div>
  )
}

export default Register