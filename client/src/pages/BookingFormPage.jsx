import React, { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:5000/booking", 
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            date
          })
        }
        
    );
     await response.json();
    
    // add code to submit form data to server or perform other actions
  };

  return (
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md ">
    <h2 class="text-center text-3xl font-extrabold text-gray-900">
      REGISTER
    </h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
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
          <label for="address" class="block text-sm font-medium text-gray-700">
            Address
          </label>
          <div class="mt-1">
            <input id="address" name="name" type="text" autocomplete="" required
              class="appearance-none  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={address} 
              onChange={ev => setAddress(ev.target.value)}
            />
          </div>
        </div>

        <div>
          <label for="date" class="block text-sm font-medium text-gray-700">
            Date
          </label>
          <div class="mt-1">
            <input id="date" name="date" type="date" autocomplete="" required
              class="appearance-none  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        

        <div>
          <button type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Book Now
          </button>
        </div>
        
      </form>
      </div>
      </div>
      </div>
    
  );
};

export default BookingForm;
