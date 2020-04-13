import React, { useState } from 'react';

import { axiosWithAuth } from '../Utils/axiosWithAuthority';

const FriendForm = (props) => {

    const [newFriend, setNewFriend]=useState(
      {
        id: '',
        name: '',
        age: '',
        email: ''
      })
    
      const handleChanges = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
        console.log(newFriend)
        }

    const submitFriend =e => {
        e.preventDefault();
        setNewFriend({
            ...newFriend,
            id: new Date()
        })
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => {
            console.log("Add Response", res)
            props.history.push('/friends')
        })
        .catch(error => {
            console.log("Adding Didnt Work", error)
        })
    }



    return (
     <div>
      <form onSubmit={submitFriend}>
        <label>Name: 
            <input
                type="text"
                name="name"
                id="name"
                value={newFriend.name}
                onChange={handleChanges}
            />
        </label>
        <br/>
        <label>Age:  
            <input
                label="Age"
                type="text"
                name="age"
                id="age"
                value={newFriend.age}
                onChange={handleChanges}
            />
        </label>
        <br/>
        <label>Email:
            <input
                label="Email"
                type="text"
                name="email"
                id="email"
                value={newFriend.email}
                onChange={handleChanges}
            />
        </label>
        <br/>
        <button>Add Friend</button>
      </form>
     </div>
    )
}

export default FriendForm