import { useState, use } from 'react'

import './App.css'

const userPromise = fetch('http://localhost:3000/users').then(res=>res.json());
function App() {
  const users = use(userPromise);
  console.log(users);


  return (
    <>
      <div>
        <div>
          {
            users.map(user => <p key={user.id}>{user.name} Email: {user.email}</p>)
          }

        </div>
      </div>
    </>
  )
}

export default App
