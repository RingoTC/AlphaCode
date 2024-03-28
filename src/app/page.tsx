"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [jsxCode, setJsxCode] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.post('http://localhost:3000/update', jsxCode, {
        headers: { 'Content-Type': 'text/jsx' }
      });
      alert('Update successful. Preview URL: ' + response.data);
    } catch (error) {
      alert('Failed to update: ' + error.message);
    }
  };

  return (
    <div>
      <Textarea value={jsxCode} onChange={(e) => setJsxCode(e.target.value)} placeholder="Enter JSX code here" />
      <Button onClick={handleUpdate}>Update JSX</Button>
    </div>
  );
}
