/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vnUSs681HcP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import CodeBlock from "@/components/CodeBlock"

export default function ChatBot() {

  const [jsxCode, setJsxCode] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api', jsxCode, {
        headers: { 'Content-Type': 'text/jsx' }
      });
      alert('Update successful. Preview URL: ' + response.data);
    } catch (error) {
      alert('Failed to update');
    }
  };

  const exampleTSX = `import React from 'react';

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
  
  export default App;`


  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-grow space-x-4 p-4">
        <div className="flex-grow rounded-md border p-4">
          <iframe className="w-full h-full" src="http://localhost:400"></iframe>
        </div>
        <div className="w-1/2 flex flex-grow flex-col">
          <div className="flex-grow rounded-md border p-4">
            <CodeBlock code={exampleTSX} language="jsx" showLineNumbers={true} />
          </div>
        </div>
      </div>
      <div className="flex">
      <div className="flex p-2 max-w-sm items-center w-3/5 items-center justify-between rounded-md border bg-slate-700">
        <Input type="text" placeholder="Make heading larger" />
        <Button type="submit">Submit</Button>
        <Button type="submit">Pick</Button>
      </div>
      </div>
    </div>
  )
}

