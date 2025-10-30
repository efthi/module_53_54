import React, { useState } from 'react';

const User = ({users}) => {
//    const [user, setUser] = useState;

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
        });
        
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
                users.map((user) => {
                    return <p key={user.id}>Username: {user.name} Email: {user.email}</p>;
                })
            }
            </div>
        </div>
        </>
    );
};

export default User;