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
        <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="text-center text-3xl font-extrabold text-gray-900">
      REGISTER
    </h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" action="#" method="POST" onSubmit={registerUser}>
      <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>
          <div class="mt-1">
            <input id="name" name="name" type="text" autocomplete="name" required
              class="appearance-none  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={name} 
              onChange={ev => setName(ev.target.value)}
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div class="mt-1">
            <input id="email" name="email" type="email" autocomplete="email" required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email} 
              onChange={ev => setEmail(ev.target.value)}
            />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div class="mt-1">
            <input id="password" name="password" type="password" autocomplete="current-password" required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password} 
              onChange={ev => setPassword(ev.target.value)}
            />
          </div>
        </div>

        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">
            phone
          </label>
          <div class="mt-1">
            <input id="phone" name="phone" type="text" autocomplete="" required
              class="appearance-none  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={phone} 
              onChange={ev => setPhone(ev.target.value)}
            />
          </div>
        </div>

        <div>
          <label for="location" class="block text-sm font-medium text-gray-700">
            Location
          </label>
          <div class="mt-1">
            <input id="location" name="name" type="text" autocomplete="" required
              class="appearance-none  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={location} 
              onChange={ev => setLocation(ev.target.value)}
            />
          </div>
        </div>

        <div>
          <label for="occupation" class="block text-sm font-medium text-gray-700">
            Occupation
          </label>
          <div class="mt-1">
            <input id="occupation" name="name" type="text" autocomplete="" required
              class="appearance-none  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={occupation} 
              onChange={ev => setOccupation(ev.target.value)}
            />
          </div>
        </div>

        <div>
          <button type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            register
          </button>
        </div>
        <div className="text-center py-2 text-gray-500">
            Already have an account ?
            <Link className="underline text-black" to={'/login'}>Login</Link>
        </div>
      </form>
      </div>
      </div>
      </div>
           );
}