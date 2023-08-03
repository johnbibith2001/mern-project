import React, { useState } from 'react'
import design from './login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Signup = () => {
  let navigate=useNavigate()
  let [first,setFirst]=useState();
  let [last,setLast]=useState();
  let [email,setEmail]=useState();
  let [password,setPassword]=useState();
  let [conformPassword,setConformPassword]=useState();
  let firstData=(e)=>{
    setFirst(e.target.value)
  }
  let lastData=(e)=>{
    setLast(e.target.value)
  }
  let emailData=(e)=>{
    setEmail(e.target.value)
  }
  let passwordData=(e)=>{
    setPassword(e.target.value)
  }
  let conformpasswordData=(e)=>{
    setConformPassword(e.target.value)
  }
  let submission=(e)=>{
    e.preventDefault()
    let upload={first,last,email,password,conformPassword}
    console.log(upload);
    if(first && last && email && password && (password == conformPassword)){
      axios.post('http://localhost:3000/register',upload)
      .then((res)=>{
        alert(res.data.message)
        navigate("/signin")
      })
    }
    else{
      alert('Invalid data')
    }
  }
  return (
    <div id={design.signup}>
        <form action="">
            <label htmlFor="">First Name</label>
            <input type="text" required placeholder='Enter the First name'onChange={firstData}/><br />
            <label htmlFor="">Last Name</label>
            <input type="text" required placeholder='Enter the Last name'onChange={lastData}/><br />
            <label htmlFor="">Email Id</label>
            <input type="email" required placeholder='Enter the Email id'onChange={emailData}/><br />
            <label htmlFor="">Password</label>
            <input type="password" required placeholder='Enter the Password'onChange={passwordData}/><br />
            <label htmlFor="">Conform-Password</label>
            <input type="password" required placeholder='Enter the Password Again'onChange={conformpasswordData}/><br />
            <button onClick={submission}>Submit</button>
            <Link to="/signin">Already have an account</Link>
        </form>

    </div>
  )
}

export default Signup