import React, { useState } from 'react'
import { loginAPI } from '../services/allAPI'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email,setemail]=useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()
        if (email && password) {
            try {
                const result = await loginAPI({ email, password })
                console.log(result);
                
                if (result.status === 200) {
                    alert("Login Success")
                    localStorage.setItem("userId",result.data._id)
                    navigate('/profile')
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='flex justify-center items-center flex-col border rounded'>
        <h1 className='text-3xl mt-2'>Login</h1>
            <form className='flex justify-center items-center flex-col p-8'>
            <input onChange={(e)=>setemail(e.target.value)} className='border rounded p-4 mb-3 ' type="text" required placeholder='Email' />
            <input onChange={(e)=>setpassword(e.target.value)} className='border rounded p-4 mb-3 ' type="password" required placeholder='Password' />
            <button onClick={formSubmit} className='border rounded-full bg-black text-white p-4 mt-5 w-full'>Login</button>
         </form>
    </div>
</div>
  )
}

export default Login