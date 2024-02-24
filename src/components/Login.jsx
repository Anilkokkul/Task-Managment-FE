import { useState } from "react";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleLogin = (e) => {
  e.preventDefault()

}

return (
  <div>
    <h1>Login</h1>
    <form onSubmit={handleLogin}>
      <label>Email</label>
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Password</label>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  </div>
)}

export default Login; 