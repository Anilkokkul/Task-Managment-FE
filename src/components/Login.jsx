import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  // console.log(user)

  const handleLogin = (e) => {
    e.preventDefault()
    setUser({ email, password });
    axios.post("http://localhost:5000/login", user).then((response) => {
      alert(response.data.message)
      // console.log(response)
    }).catch((error) => {
      alert(error.response.data.message)
      // console.log(error.response.data.message)
    })
    setEmail("")
    setPassword("")
  }

  return (
    <div className=" p-9">
      <h1 className=" text-center text-4xl mt-10">Login</h1>
      <form onSubmit={handleLogin} className=" flex flex-col sm:w-80 mx-auto m-5 border p-4 rounded-md" >
        <label className=" font-bold mb-1 mt-4">Email</label>
        <input className=" border rounded-md p-1 h-7 text-md" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label className=" font-bold mb-1 mt-4">Password</label>
        <input className=" border rounded-md p-1 h-7 text-md" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="mt-5 h-8 bg-green-400 rounded-lg" >Login</button>
      </form>
    </div>
  )
}

export default Login; 