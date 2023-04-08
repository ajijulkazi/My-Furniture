import { Link, Navigate } from "react-router-dom";
import { useState } from 'react';
// import { UserContext } from "../UserContext";
export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const loggedInResponse = await fetch(
                "http://localhost:5000/auth/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify({
                        email,
                        password
                    }),
                }
            );
            await loggedInResponse.json();
            
          alert('login successful');
          setRedirect(true);
        } catch (e) {
            alert('Login Failed');
        }
    }


    if(redirect) {
        return <Navigate to={'/'}/>
    }

    return (
        <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="text-center text-3xl font-extrabold text-gray-900">
      Log in to your account
    </h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" action="#" method="POST" onSubmit={handleLoginSubmit}>
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
          <button type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Log in
          </button>
        </div>
        <div className="text-center py-2 text-gray-500">
            Don't have an account yet?
            <Link className="underline text-black" to={'/register'}>Register Now</Link>
        </div>
      </form>
      </div>
      </div>
      </div>
    );
}