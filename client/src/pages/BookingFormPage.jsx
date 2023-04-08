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
    const savedData = await response.json();
    console.log(savedData);
    // add code to submit form data to server or perform other actions
  };

  return (
    <div className="w-full h-full bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="flex-1 flex justify-center items-center">
            <h2 className="text-2xl uppercase justify-center items-center">Booking Here</h2>
        </div>
            
    <form className="w-full max-w-lg mx-auto mt-4 border rounded-lg text-primary transition-transform" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="flex-1 flex justify-center text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="appearance-none flex-1 flex justify-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="flex-1 flex justify-center text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="flex-1 flex justify-center text-gray-700 font-bold mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          className="appearance-none flex-1 flex justify-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="tel"
          placeholder="+880 1611000000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="flex-1 flex justify-center text-gray-700 font-bold mb-2" htmlFor="address">
          Address
        </label>
        <input
          className="appearance-none flex-1 flex justify-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          type="text"
          placeholder="Dhaka bangladesh"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="flex-1 flex justify-center text-gray-700 font-bold mb-2" htmlFor="date">
          Date
        </label>
        <input
          className="appearance-none flex-1 flex justify-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="flex-1 flex justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Book Now
      </button>
      </div>
    </form>
    </div>
  );
};

export default BookingForm;
