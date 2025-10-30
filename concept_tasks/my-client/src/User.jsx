import React, { useState } from 'react';
import { use } from 'react';

const User = ({userPromise}) => {
    const initialusers = use(userPromise);
    const [users, setUsers] = useState(initialusers);

    const handleAddUser = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);
        const newUser = {name, email}
        //send data to the server
        fetch('http://localhost:3000/users', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser),
        }).then(res=> res.json())
            .then(data => {
                console.log('data after post', data);
                const newUsers = [...users, data];
                setUsers(newUsers);
                console.log(users);
                
                e.target.reset();
            })
        
    }

    return (
        <>
        <div>
           <h3>Add A User</h3>
            <div>
                <form onSubmit={handleAddUser}>
                    <label htmlFor="name">Username: </label>
                    <input type="text" name="name" placeholder="username" /><br />
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" placeholder="email" /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
           <h1 className='text-2xl font-bold'>User Info</h1>
            <div>
            {
                initialusers.map((initUser) => {
                    return <p key={initUser.id}>Username: {initUser.name} Email: {initUser.email}</p>;
                })
            }
            </div>
        </div>
        </>
    );
};

export default User;