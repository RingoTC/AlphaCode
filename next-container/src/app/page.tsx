import React from 'react';

function App() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <p className="text-gray-600 mb-6">Enter your email below to login to your account.</p>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="m@example.com"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default App;