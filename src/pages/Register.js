import React, { useState } from 'react';
import '../styles/Register.css'

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

async function registerUser(e){
  e.preventDefault();
  const response= await fetch("https://backend-vidyayan.vercel.app/api/register",{
  method:"POST",  
  headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      name,email,password
    }),
  })
  const data=await response.json();
  if(data.status==="success"){
    alert("Registration Successfull, Login to continue")
     window.location.href="/login"
  }

}
    
  return (
    <div class="container">
      <div className="register">
      <h1>SignUp</h1>
      <form onSubmit={registerUser}>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
        <br/><br/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" /><br/><br/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Password" /><br/><br/>
        <button>Sign Up</button>
      </form>
      </div>
    </div>
  );
}

export default Register;
