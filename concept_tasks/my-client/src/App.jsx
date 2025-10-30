import { useState, use } from 'react'

import './App.css'
import User from './User';

const userPromise = fetch('http://localhost:3000/users').then(res=>res.json());
function App() {
  const users = use(userPromise);
  console.log(users);


  return (
    <>
      <User users={users}></User>
    </>
  )
}

export default App
