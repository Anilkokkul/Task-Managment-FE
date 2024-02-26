/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ email, password });
        axios.post("http://localhost:5000/register", user).then((response) => {
            alert(response.data.message)
            // console.log(response)
        }).catch((error) => {
            alert(error.response.data.message)
            // console.log(error.response)
        })
        setEmail("")
        setPassword("")
    }

    return (
        <div className=" p-9">
            <h1 className=" text-center text-3xl mt-10">Create a new account</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col sm:w-80 mx-auto m-5 border p-4 rounded-md" >
                <label className=" font-bold mb-1 mt-4">Name</label>
                <input type="text" name="name" id="" placeholder="Your Name" className="border rounded-md p-1 h-7 text-md" required />
                <label className=" font-bold mb-1 mt-4">Email</label>
                <input className=" border rounded-md p-1 h-7 text-md" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Your email" />
                <label className=" font-bold mb-1 mt-4">Mobile Number</label>
                <input type="tel" name="name" id="" placeholder="Enter your mobile number" className="border rounded-md p-1 h-7 text-md" pattern="[0-9]{10}" title="Must be a valid mobile number" />
                <label className=" font-bold mb-1 mt-4">Password</label>
                <input className=" border rounded-md p-1 h-7 text-md" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter new password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />
                <button type="submit" className="mt-5 h-8 bg-green-400 rounded-lg" >Register</button>
            </form>
        </div>
    )
}

export default Register