import React, { useState } from 'react';
import '../styles/Login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  async function loginUser(e){
    e.preventDefault();
    const response= await fetch("https://backend-vidyayan.vercel.app/api/login",{
    method:"POST",  
    headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        email,password
      }),
    })
    const data=await response.json();
    if(data.user){
        alert("Login Successfull")
        window.location.href="/dashboard"
    }
    else{
        alert("Login Failed")
    }
  }
  return (
    <div class="container"> 

<div className="login">
<h1>Sign In</h1>
    <form onSubmit={loginUser}>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" /><br/><br/>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Password" /><br/><br/>
      <button>Sign In</button>
    </form>
</div>

    </div>
  )
}

export default Login