import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/contact", 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    }
    
    );
         await response.json();
        
        
    };

  return (

    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="text-center text-3xl font-extrabold text-gray-900">
      CONTACT WITH US
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
            <input id="name" name="" type="text" autocomplete="" required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder='Enter Your Name'
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
              class="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder='Enter Your Email'
              value={email} 
              onChange={ev => setEmail(ev.target.value)}
            />
          </div>
        </div>

        <div>
          <label for="write here" className=" text-sm font-medium text-gray-700">
            Message
          </label>
          <div class="mt-1">
          <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Enter your message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
            
          </div>
        </div>

        <div>
          <button type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </div>
        
      </form>
      </div>
      </div>
      </div>
  );
}

export default ContactForm;
