import { useState } from "react";
import { Link } from "react-router-dom";
 export default function RegisterPage(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [occupation, setOccupation] = useState('');
   async function registerUser (ev){
        ev.preventDefault();
       try {
        const savedUserResponse = await fetch(
            "http://localhost:5000/auth/register",
            {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    location,
                    phone,
                    occupation
                }),
            }
        );
        await savedUserResponse.json();

        alert('Registration Successful. Now you can login');
       } catch (e) {
        alert('Registration failed. Please try again later');
       }
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                <input type="text" 
                        placeholder="Your Name"  
                        value={name} 
                        onChange={ev => setName(ev.target.value)} />
                <input type="email" 
                        placeholder="your@email.com" 
                        value={email} 
                        onChange={ev => setEmail(ev.target.value)} />
                <input type="password"
                       placeholder= "password" 
                       value={password} 
                       onChange={ev => setPassword(ev.target.value)} />
                <input type="text"
                       placeholder= "location" 
                       value={location} 
                       onChange={ev => setLocation(ev.target.value)} />
                <input type="text"
                       placeholder= "phone" 
                       value={phone} 
                       onChange={ev => setPhone(ev.target.value)} />
                <input type="text"
                       placeholder= "occupation" 
                       value={occupation} 
                       onChange={ev => setOccupation(ev.target.value)} />
                <button className="primary">Register</button>
                <div className="text-center py-2 text-gray-500">
                    Already a member?
                    <Link className="underline text-black" to={'/login'}>Login</Link>
                </div>
            </form>
            </div>
            
        </div>
    );
}