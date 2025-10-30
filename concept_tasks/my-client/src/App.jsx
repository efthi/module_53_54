import { useState, use } from 'react'

import './App.css'
import User from './User';

const userPromise = fetch('http://localhost:3000/users').then(res=>res.json());
function App() {
 
  return (
    <>
      <User userPromise={userPromise}></User>
    </>
  )
}

export default App
