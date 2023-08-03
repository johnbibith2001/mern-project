import React, { useEffect, useState } from 'react'
import design from "./login.module.css"
import { Link, useNavigate } from 'react-router-dom'
import Submit from './Submit';
import axios from 'axios';
const Signin = () => {
  let navigate=useNavigate();
  let [content,setContent]=useState([]);
  let [name,setName]=useState([]);
  let [email,setEmail]=useState();
  let [password,setPassword]=useState();
  let emailData=(e)=>{
    setEmail(e.target.value)
  }
  let passwordData=(e)=>{
    setPassword(e.target.value)
  }

  let submit=(e)=>{
    e.preventDefault();
    let data={email,password}
    axios.post(`http://localhost:3000/login`,data)
    .then((res)=>{
        if(res.data.status==200){
          alert(res.data.message)
        }
        else{
          alert(res.data.message)
        }
    })
  }
  return (
    <div id={design.signin}>
        <form action="">
            <label htmlFor="">Email Id </label>
            <input type="email" required placeholder='Enter the mail id' onChange={emailData}/> <br />
            <label htmlFor="">Password </label>
            <input type="password" required placeholder='Enter the password' onChange={passwordData}/><br />
            <button onClick={submit}>login</button>
            <Link to="/signup">Don't have account</Link>
        </form>
    </div>
  )
}

export default Signin