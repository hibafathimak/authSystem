import React, { useState } from 'react'
import { loginAPI } from '../services/allAPI'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email,setemail]=useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

    const formSubmit = async () => {
        if (email || password) {
            try {
             const result = await loginAPI({email,password})
                if (result.status === 200) {
                    alert("Login Success")
                    localStorage.setItem(userId,result.token.userId)
                    navigate('./profile')
                }
            } catch (error) {
                console.log(error);
                
            }
        }
    }
  return (
    <div className='flexCenter container'>
    <div className='form-container border rounded'>
        <h1 className='text-3xl'>Login</h1>
            <form className='form-container' onSubmit={ formSubmit}>
            <input onChange={(e)=>setemail(e.target.value)} className='border rounded p-4 mb-3 form-control' type="text" required placeholder='Email' />
            <input onChange={(e)=>setpassword(e.target.value)} className='border rounded p-4 mb-3 form-control' type="password" required placeholder='Password' />
            <button className='btn btn-secondary'>Login</button>
         </form>
    </div>
</div>
  )
}

export default Login